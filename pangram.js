alert("Hello from JS!")

function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (lowerCased.indexOf(char) === -1) {
            return false
        }
    }
    return true;
}


function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowerCased.includes(char)) {
            return false
        }
    }
    return true;
}