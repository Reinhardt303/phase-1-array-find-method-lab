// code your solution here
 function superbowlWin(wins){
    for (const record of wins){
        if(record.result === "W"){
            return record.year
        }
    }
    
 }