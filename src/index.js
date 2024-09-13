module.exports = function check(str, bracketsConfig) {
  const map = {
		')': '(',
		']': '[',
		'}': '{',
	};
  let stack = [];
  for (let i = 0; i < str.length; i++) {
		// check for opening bracket
		if (Object.values(map).includes(str[i])) {
			stack.push(str[i]);
		} else if (stack[stack.length - 1] === map[str[i]]) {
			stack.pop();
		} else {
			return false;
		}
	}

	return stack.length === 0 ? true : false;
}
