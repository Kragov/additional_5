module.exports = function check(str, bracketsConfig) {

    for (let i = 0; i < bracketsConfig.length; i++) {
        let counter = 0;
        if (bracketsConfig[i][0] !== bracketsConfig[i][1]) {
            for (let j = 0; j < str.length; j++) {
                if (str[j] === bracketsConfig[i][0]) {
                    counter++;
                }
                else if (str[j] === bracketsConfig[i][1]) {
                    counter--;
                }
                if (counter < 0) {
                    return false;
                }
            }
            if (counter > 0) {
                return false
            }
        }
        else {
            for (let j = 0; j < str.length; j++) {
                if (str[j] === bracketsConfig[i][0]) {
                    counter++;
                }
            }
            if ((counter % 2) !== 0) {
                return false
            }
        }
    }
    return true;
}

