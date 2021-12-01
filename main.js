// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  let  returnedBases = dnaBases[Math.floor(Math.random() * 4)];
  return returnedBases
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
  console.log(newStrand)
};



const pAequorFactory = (num, array) => {   // creating factory function for creating mutltiple organism simulation objects
  return {
    _specimenNum: num,
    _dna: array,
    mutate() {                          // method for picking 1 base in dna strand and changing it to a differrent base
      const newBase = returnRandBase(); // variable for new base to add in
      const i = Math.floor(Math.random()*this._dna.length);
      let dnaBases = ['A', 'T', 'C', 'G'];
      if (this._dna[i] !== newBase) {                     // select and remove 1 random base, replace with newBase if new base and orignal are not the same
        this._dna.splice(i, 1, newBase)
      }
      else if (this._dna[i] === newBase) {
        this._dna.splice(i, 1, dnaBases.filter(function (f) {return f !== newBase})[Math.floor(Math.random()*3)])
      }
      return this._dna
      //console.log(this._dna)
    },
    compareDNA(pAequor) {     // method to compare dna strands
      const original = this._dna;
      const compare = pAequor._dna;
      const sameBase = [];    // empty array to hold same bases at same indexes 
      for (let i = 0; i < this._dna.length; i++) {     // looping through dna Array to find same bases at same indexes
        if (original[i] === compare[i]) {
          sameBase.push(this._dna[i])                 // adding matching bases to empty array
        }
      }
      const percentSimilar = (sameBase.length / this._dna.length)*100; // calculating percent of shared dna
      console.log(sameBase)
      return `Specimen number ${this._specimenNum} and specimen number ${pAequor._specimenNum} have ${percentSimilar.toFixed(2)} % similar DNA.`
    },
    willLikelySurvive() {        // method to find total percentage of C and G bases to measure survivability 
      let count = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === 'C' || this._dna[i] === 'G') {      // looping through dna strand to find total number of c and g bases
          count++;
        }
      }
      const cgPercent = (count/this._dna.length)*100;         // calculate percent of c and g bases, find if the percentage is at least 60%
        if (cgPercent >= 60) {
          return true
        } else {
          return false
        }
      }
    }
  }


// creating 30 instances of pAequor that can survive in their natural environment
var studyArray = [];          // empty array to hold survivable pAequors
for (let i = 0; studyArray.length < 30; i++) {
  this['pAequor' + i] = pAequorFactory(i, mockUpStrand()); // looping through factory function until empty array 
  if (this['pAequor' + i].willLikelySurvive() === true) { //  is filled with 30 specimens with at least 60% c and g bases
    studyArray.push(this['pAequor' + i])
  }
}

//console.log(studyArray)
//console.log(studyArray.length)

const buildSample = (numSpecimens) => {                                // recreating above loop as a function that takes number
  var sampleArray = [];                                                // of specimens to create and returns an array with that number of 
  for (let i = 0; sampleArray.length < numSpecimens; i++) {            // objects
    this['pAequor' + i] = pAequorFactory(i, mockUpStrand());
    if (this['pAequor' + i].willLikelySurvive() === true) { 
      sampleArray.push(this['pAequor' + i])
   }
  }
  return sampleArray
}


//Commands below used to test code

//const sample1 = buildSample(30)
//const sample2 = buildSample(40)
//const sample3 = buildSample(50)
//console.log(sample1.length)
//console.log(sample2.length)
//console.log(sample3.length)

test1 = pAequorFactory(1,mockUpStrand())
console.log(test1)
test1.mutate()
//console.log(test1)
const ex1 = pAequorFactory(1, mockUpStrand())
//const ex2 = pAequorFactory(2, mockUpStrand())
//console.log(ex1.compareDNA(ex2))
console.log(ex1)
//console.log(ex2._dna)
//console.log(ex1.willLikelySurvive())
