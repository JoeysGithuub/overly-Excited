let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let nextSentence = ["I", "am", "so", "terrible", "at", "coding"];
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let addExcitement = (theWordArray,) => {
    let point = '!';
    let question = '?';
    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 1; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp += ` ${theWordArray[i-1]}`
        // Print buildMeUp to the console
        console.log(buildMeUp)
        if (i % 3 == 0) {
            buildMeUp += point;
            point += '!';

    }

}
}
// Invoke the function and pass in the array
addExcitement(nextSentence, "&");