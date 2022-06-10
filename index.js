// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
   if(blockNumber>42){
       return blockNumber-42;
   }else{
       return 42-blockNumber;
   }
}
function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber)*264
}

function distanceTravelledInFeet(start,destination){
    if(start<destination){
        return(destination-start)*264;
     }
     else{
         return(start-destination)*264
     }
}
 
function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start,destination);
    if(feet<=400){
        return 0;
    }else if(feet>400 && feet<2000){
        return 2.56;
    }else if(feet>2000 && feet < 2500){
        return 25;
    }else if (feet>2500 && feet<2500){
        return 25;
    }else    
        return 'cannot travel that far'
}


    
