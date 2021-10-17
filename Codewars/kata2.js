function isValidWalk(walk) {
    let arrWalk = [0,0,0,0];
if (walk.length == 10) {
   walk.forEach((item) => {
        if (item == 'n') {
            arrWalk[0]++;
            arrWalk[1]--;
} else {
    if (item == 's') {
        arrWalk[0]--;
        arrWalk[1]++;  
    } else  { 
        if (item == 'w') {
            arrWalk[2]--;
            arrWalk[3]++;
        } else { 
            if (item == 'e') {
                arrWalk[2]++;
                arrWalk[3]--; 
            }
        }
    
    }
}
    }
 
    )
    if (arrWalk[0]==0 && arrWalk[1]==0 && arrWalk[2]==0 && arrWalk[3]==0) {
        return true;

    } else {
        return false;

    }
} else { return false}}
console.log(isValidWalk('n,n'));
    