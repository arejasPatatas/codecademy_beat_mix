// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (reqType,arrIndex,newPresetArray) => {
let response;
//failsafe for arrIndex
if (arrIndex >= 4 || arrIndex < 0) {
    return response = [404];
}
//failsafe for reqType
if (reqType === 'GET') {
//continue
return response = [200,presets[arrIndex]];


} else if (reqType ==='PUT') {
    //continue for GET
    presets[arrIndex] = newPresetArray;
    return response = [200,presets[arrIndex]];
}
else {  return response = [400];  }

}

;

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
