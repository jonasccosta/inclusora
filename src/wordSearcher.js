

function wordSearcher(userText, wordData) {
    result = []

    for(const [key, value] of Object.entries(wordData)){
        if (userText && userText.includes(key)) {
            result.push([key, value]);
        }
    }
   

    return result;
  }
  
  module.exports = {
    wordSearcher
  };