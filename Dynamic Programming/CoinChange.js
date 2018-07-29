// change=10 Coin values coinArray={2,5,3,6} => 5
//{2,2,2,2,2},{2,2,3},{2,2,6},{2,3,5},{5,5}

//Recursion

function coinChange(coinArray, change, ind) {

    if (ind == coinArray.length)
        return 0;
    if (change == 0)
        return 1;
    if (coinArray[ind] > change)
        return coinChange(coinArray, change, ind + 1);
    return coinChange(coinArray, change - coinArray[ind], ind) + coinChange(coinArray, change, ind + 1);
}

//Solving overlapping sub problems using Dynamic programming

//1.Memoization (Top Down)

function coinChange(coinArray, change, ind, memo = {}) {
    if (!(ind + ":" + change in memo)) {
        if (ind == coinArray.length)
            memo[ind + ":" + change] = 0;
        else if (change == 0)
            memo[ind + ":" + change] = 1;
        else if (coinArray[ind] > change)
            memo[ind + ":" + change] = coinChange(coinArray, change, ind + 1);
        else
            memo[ind + ":" + change] = coinChange(coinArray, change - coinArray[ind], ind) + coinChange(coinArray, change, ind + 1);;
    }
    return memo[ind + ":" + change];
}


//2.Tabulation (Bottom Up) TC: O(coinArray+1 * change+1)
function coinChange(coinArray, change) {
    var tabulation = new Array(coinArray.length + 1);
    for (let i = 0; i < tabulation.length; i++)
        tabulation[i] = new Array(change + 1);
    for (let i = 0; i < tabulation.length; i++) {
        for (let j = 0; j <= change; j++) {
            if (i == 0)
                tabulation[i][j] = 0;
            else if (j == 0)
                tabulation[i][j] = 1;
            else if (coinArray[i - 1] > j)
                tabulation[i][j] = tabulation[i - 1][j];
            else
                tabulation[i][j] = tabulation[i][j - coinArray[i - 1]] + tabulation[i - 1][j];
        }
    }
    //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    //[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
    //[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 2]
    //[1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4]
    //[1, 0, 1, 1, 1, 2, 3, 2, 4, 4, 5]
    return tabulation[coinArray.length][change]; //5


}
