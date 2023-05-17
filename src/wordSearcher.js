const genderData = require('../data/gender.json');
function wordSearcher(userText) {
    result = []

    for(const [key, value] of Object.entries(genderData)){
        if (userText && userText.includes(key)) {
            result.push([key, value]);
        }
    }
   

    return result;
  }
  
  module.exports = {
    wordSearcher
  };