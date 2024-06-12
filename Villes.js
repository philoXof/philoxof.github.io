function calculate(x, y) {
    const dp = new Array(x.length + 1).fill(0).map(() => new Array(y.length + 1).fill(0));

    for (let i = 0; i <= x.length; i++) {
        for (let j = 0; j <= y.length; j++) {
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j - 1] + costOfSubstitution(x[i - 1], y[j - 1]),
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1
                );
            }
        }
    }

    return dp[x.length][y.length];
}

function costOfSubstitution(a, b) {
    return a === b ? 0 : 1;
}

function min(...numbers) {
    return Math.min(...numbers);
}

