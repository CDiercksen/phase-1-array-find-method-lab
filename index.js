function superbowlWin(record) {
    const winningYear = record.find((record) => record.result === "W");
    if (winningYear) {
        return winningYear.year;
    }
}

