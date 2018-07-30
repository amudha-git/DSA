//letters = ["D","J","K"] K= "B" Output = "D"
//Note:letters also wrap around
//letter =["A","r","Z"]  k="z" Output = "A"

//
//a, r, z z
//
//d, j, k b

//Approach - Binary Search so we need to sort the array first
//Refer : https://www.youtube.com/watch?v=RPG44L2XlG8 GeeksForGeeks

function smallestGreater(letters, K) {
    let start = 0;
    let end = letters.length - 1;
    while (start < end && letters[end].toLowerCase() > K.toLowerCase()) {

        let mid = Math.floor((start + end) / 2);
        if (letters[mid].toLowerCase() > K.toLocaleLowerCase())
            end = mid;
        else
            start = mid + 1;

    }
    return letters[start];

}
