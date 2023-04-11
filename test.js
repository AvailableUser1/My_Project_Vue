    function findLongest(str) {
        let arr = str.split('');
        let stack = [];
        for (let i = 0; i < arr.length; i++){
            if (!stack.includes(arr[i])) {
                stack.push(arr[i]);
            }
        }
        return stack.length;
    }
    console.log(findLongest('abcabcbb'));  