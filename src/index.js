module.exports = function check(str, bracketsConfig) {
  let stackArray = [];
	let openBracketsArray = [];
	let closeBracketsArray = [];

	str = str.split('');

	const settingArrays = bracketsConfig => {
		for (let i = 0; bracketsConfig.length > i; i++) {
			openBracketsArray.push(bracketsConfig[i][0]);
		}
	};

	const compareOpenClose = (char, bracketsConfig) => {
		for (let i = 0; bracketsConfig.length > i; i++) {
			if (bracketsConfig[i][0] === char && bracketsConfig[i][1] === char) {
				return true;
			}
		}
		return false;
	};

	const isOpenBr = (char, open) => {
		if (open.indexOf(char) > -1) {
			return true;
		} else {
			return false;
		}
	};

	const matching = (topStack, char, bracketsConfig) => {
		for (let i = 0; bracketsConfig.length > i; i++) {
			if (bracketsConfig[i][0] === topStack && bracketsConfig[i][1] === char) {
				return true;
			}
		}
		return false;
	};


	settingArrays(bracketsConfig);
	for (let i = 0; str.length > i; i++) {
		if (compareOpenClose(str[i], bracketsConfig)) {
			if (stackArray[stackArray.length - 1] === str[i]) {
				stackArray.pop();
			} else {
				stackArray.push(str[i]);
			}
		} else {
			if (isOpenBr(str[i], openBracketsArray)) {
				stackArray.push(str[i]);
			} else {
				if (stackArray.length === 0) {
					return false;
				}
				if (!matching(stackArray.pop(), str[i], bracketsConfig)) {
					return false;
				}
			}
		}
	}
	if (stackArray.length === 0) {
		return true;
	} else {
		return false;
	}
}
