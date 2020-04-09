// 1. DRUM ARRAYS
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,];


//2. TOGGLE DRUM FUNCTION
const toggleDrum = (drum,indexNumber) => {
    let drumToChange;
   if (drum === 'snares') {
       drumToChange = snares;
       //console.log('drumtochange: ', drumToChange);
   } else if (drum === 'kicks') {
    drumToChange = kicks;
    //console.log('drumtochange: ', drumToChange);
   } else if (drum === 'hiHats') {
    drumToChange = hiHats;
    //console.log('drumtochange: ', drumToChange);
   } else if (drum === 'rideCymbals') {
    drumToChange = rideCymbals;
    //console.log('drumtochange: ', drumToChange);
   } else {
    //console.log('nonexisting drum')   
    return;
   }

      //start with the failsafe
    if (!drum || indexNumber < 0) {
        //console.log('Missing argument: i am not going to run');
        return;
    } else if (indexNumber >= drumToChange.length) {
        //console.log('drum correct, wrong indexNumber')
        return;
} else if (indexNumber < 0) {
    //console.log("negative indexnumber, don't run")
    return;
} 
else {
    //console.log('i am going to run')
}
//continue the function from here

//console.log(drum[indexNumber]);
if  (drumToChange[indexNumber] === false) {
drumToChange[indexNumber] = true;
//console.log('thechangedDRUM:',drumToChange);
return;

} else if (drumToChange[indexNumber] === true ) {
    return drumToChange[indexNumber] = false;
} else {
    console.log( 'something has gone terribly wrong');
}
}

//3. CLEAR FUNCTION
const clear = clearMe => {
    let drumToClear;
   if (clearMe === 'snares') {
       drumToClear = snares;
       //console.log('drumtoclear: ', drumToClear);
   } else if (clearMe === 'kicks') {
    drumToClear = kicks;
       //console.log('drumtoclear: ', drumToClear);
   } else if (clearMe === 'hiHats') {
    drumToClear = hiHats;
       //console.log('drumtoclear: ', drumToClear);
   } else if (clearMe === 'rideCymbals') {
    drumToClear = rideCymbals;
       //console.log('drumtoclear: ', drumToClear);
   } else {
    //console.log('nonexisting drum')   
    return;
   }

//hier gaan we de array aanpassen
//    drumToClear.fill(false, 0,)
//fill is een nieuwe functie in ES6. hiervoor moet je loopen. laat ik die ook schrijven

for (i = 0; i < drumToClear.length; i++) {
drumToClear[i] = false;
}
}

//4. INVERT FUNCTION

const invert = invertMe => {
    let drumToInvert;
   if (invertMe === 'snares') {
       drumToInvert = snares;
    //console.log('drumtoInvert: ', drumToInvert);
   } else if (invertMe === 'kicks') {
    drumToInvert = kicks;
    //console.log('drumtoInvert: ', drumToInvert);
   } else if (invertMe === 'hiHats') {
    drumToInvert = hiHats;
    //console.log('drumtoInvert: ', drumToInvert);
   } else if (invertMe === 'rideCymbals') {
    drumToInvert = rideCymbals;
    //console.log('drumtoInvert: ', drumToInvert);
   } else {
    //console.log('nonexisting drum')   
    return;
   }

   for (i = 0; i < drumToInvert.length; i++) {
    if (drumToInvert[i]) {
        drumToInvert[i] = false;
    } else {
        drumToInvert[i] = true};
    }
}

//BONUS!

const getNeighborPads = (x,y,size) => {
    let neighbors;
    

//failsafe
if (x >= size || y >= size || x < 0 || y < 0) {
    return neighbors = [];
} 

//corners : return 2
else if (x === 0 && y === 0) {
    return neighbors = [[x+1,y],[x,y+1]];
} else if (x === 0 && y === 4) {
    return neighbors = [[x,y-1],[x+1,y]];
} else if (x === 4 && y === 0) {
    return neighbors = [[x-1,y],[x,y+1]];
} else if (x === 4 && y === 4) {
    return neighbors = [[x-1,y],[x,y-1]];
}
// edges : return 3
else if (x === 0) {
    return neighbors = [[x+1,y],[x,y-1],[x,y+1]];
} else if (x === 4) {
    return neighbors = [[x-1,y],[x,y-1],[x,y+1]];
} else if (y === 0) {
    return neighbors = [[x-1,y],[x,y+1],[x+1,y]];
} else if (y === 4) {
    return neighbors = [[x-1,y],[x,y-1],[x+1,y]];
 } else {
//all other positions : return 4
    return neighbors = [[x-1,y],[x+1,y],[x,y+1],[x,y-1]]
}
}


