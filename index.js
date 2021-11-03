function superbowlWin(record){
    const winner = record.find (({result})=>result === "W");
    if (winner === undefined){
        return winner;
    }
    else{
        return winner['year'];
    }
}
