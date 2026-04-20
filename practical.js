
function checkOutput(char){
    const lowerChar=char.toLowerCase();
    const vowels=['a','e','i','o','u'];
    if (vowels.includes(lowerChar)){
        return "vowel";
    }
    else if (lowerChar>='a'&& lowerChar<='z'){
        return "consonant";
    }
    else {
        return "not a letter";
    }
}
document.getElementById("result").innerHTML=checkOutput();
























































































































