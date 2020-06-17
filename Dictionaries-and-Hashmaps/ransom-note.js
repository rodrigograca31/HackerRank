function checkMagazine(magazine, note) {
    let magazineList = {};
    let noteList = {};
    let allWords = true;
    // make a list/object so that a lookup is faster (to avoid O(n^2) with 2 for loops)
    magazine.forEach((element) => {
        // list[element] = 1;
        // does if the value exists uses it otherwise starts with 0 + 1
        magazineList[element] = (magazineList[element] || 0) + 1;
    });
    note.forEach((element) => {
        noteList[element] = (noteList[element] || 0) + 1;
    });
    // noteArray.forEach((element) => {
    // 	console.log(element);
    // 	if (!(element in list)) {
    // 		allWords = false;
    // 	}
    // });
    // check that every word (element of the array) is in the list/dict
    // much cleaner than the above forEach
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    // and that theres the same amount of words or more in the magazine
    allWords = note.every((element) => element in magazineList && magazineList[element] >= noteList[element]);
    if (allWords) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}
checkMagazine("give me one grand today today today night".split(" "), "give one grand today".split(" "));
