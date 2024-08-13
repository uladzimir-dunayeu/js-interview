// ('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

function groupStringByChars(str) {
    let newStr = '';
    let letterCount = 1;

    for (let i = 0; i<str.length; i++) {
        if (str[i] === str[i+1]) {
            letterCount += 1;
        } else {
            if (letterCount !== 1) {
                newStr += str[i] + letterCount;
            } else {
                newStr += str[i];
            }

            letterCount = 1;
        }
    }

    return newStr
}

console.log(groupStringByChars('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));