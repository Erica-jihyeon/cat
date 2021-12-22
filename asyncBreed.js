const fs = require('fs');

//incorrect way
// const breedDetailsFromFile = function(breed) {

//   console.log('breedDetailsFromFile: calling readFile...');
//   //fs is async -> line 16 excute, then fs execute
//   fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
//     console.log("In readFile's callback: it has the data. ");
//     if(!error) return data;
//   });

// };

//correct way
//const bombay = breedDetailsFromFile('Bombay');
//console.log("Return Value: ", bombay);

/*const breedDetailsFromFile = function(breed, funcToRunWhenThingsAreDone) {

  console.log('breedDetailsFromFile: calling readFile...');
  //data is contents of the file
  fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
    console.log("In readFile's callback: it has the data. ");
    if(!error) printOutCatBreed(data);
  });

};

const printOutCatBreed = breed => {
  console.log("Return Value: ", breed);
}

breedDetailsFromFile('Bombay', printOutCatBreed);*/

//correct way practice
const breedDetailsFromFile = (breed, actionFunc) => {
  console.log('reading file...')
  fs.readFile(`./data/${breed}.txt`, 'utf-8', (err, data) => {
    console.log("It has the data. ");
    if(!err) actionFunc(data);
    else actionFunc(undefined);
  });
}

// const printDetail = (content) => {
//   console.log('Detail: ', content)
// }


// breedDetailsFromFile('Balinese',printDetail)

module.exports = breedDetailsFromFile;