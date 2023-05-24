

function wordSearcher(userText, wordData) {
    result = {triggerWords: {}}
    

    for(const [key, value] of Object.entries(wordData)){
        if (userText && userText.includes(key)) {
            result.triggerWords[key] = value;
        }
    }
   

    return result;
  }
  
  module.exports = {
    wordSearcher
  };