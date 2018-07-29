//Longest common subsequence
//str_a = gcbad str_b=gjhdcb => gcb
//RECURSION APPROACH

// time complexity is O(2^n). Since it is in exponential time.
function LCS(str_a, str_b, i = 0, j = 0) {
    if (i == str_a.length || j == str_b.length)
        return 0;
    if (str_a[i] == str_b[j])
        return 1 + LCS(str_a, str_b, i + 1, j + 1);
    else
        return Math.max(LCS(str_a, str_b, i + 1, j), LCS(str_a, str_b, i, j + 1));

}


/**********************************/
/****DYNAMIC PROGRAMMING***********/
/**********************************/

//Using memoization (Top - down approach)
//Time complexity is  O(m*n)

function LCS(str_a, str_b, m, n) {
    var memo = new Array(str_a.length + 1);
    for (let i = 0; i < memo.length; i++)
        memo[i] = new Array(str_b.length + 1);
    return memoizedLCS(str_a, str_b, memo);
}

function memoizedLCS(str_a, str_b, memo, i = 0, j = 0) {
    if (typeof memo[i][j] != "number") {
        if (i == str_a.length || j == str_b.length)
            memo[i][j] = 0;
        else if (str_a[i] == str_b[j])
            memo[i][j] = 1 + memoizedLCS(str_a, str_b, memo, i + 1, j + 1);
        else
            memo[i][j] = Math.max(memoizedLCS(str_a, str_b, memo, i + 1, j), memoizedLCS(str_a, str_b, memo, i, j + 1))

    }
    return memo[i][j];
}


//Using Tabulation (bottom-up approach)
//Time complexity is  O(m*n)


function LCS(str_a, str_b, m, n) {
    var tabulation = new Array(str_a.length + 1);
    for (let i = 0; i < tabulation.length; i++)
        tabulation[i] = new Array(str_b.length + 1);
    for (let i = 0; i <= str_a.length; i++) {
        for (j = 0; j <= str_b.length; j++) {
            if (i == 0 || j == 0)
                tabulation[i][j] = 0;
        }
    }
    return tabulationLCS(str_a, str_b, tabulation);
}

function tabulationLCS(str_a, str_b, tabulation) {
    var returnObj = {
        length: "",
        str: ""
    }
    for (let i = 1; i <= str_a.length; i++) {
        for (let j = 1; j <= str_b.length; j++) {
            if (str_a[i - 1] == str_b[j - 1])
                tabulation[i][j] = tabulation[i - 1][j - 1] + 1;
            else
                tabulation[i][j] = Math.max(tabulation[i - 1][j], tabulation[i][j - 1]);
        }
    }

    let row = str_a.length;
    let col = str_b.length;
    let returnStr = "";
    while (true) {
        if (row == 0 || col == 0)
            break;
        if (str_a[row - 1] == str_b[col - 1]) {
            returnStr += str_b[col - 1];
            col--;
            row--;
        } else if (tabulation[row][col] == tabulation[row - 1][col])
            row--;
        else
            col--;
    }
    return returnStr.split("").reverse().join(""); //"stone","longest" = > one
    //Sub string 
}
