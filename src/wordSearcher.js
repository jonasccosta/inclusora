

function wordSearcher(userText, wordData) {
    result = []
    userText = userText.toLowerCase();    

    for(const [key, value] of Object.entries(wordData)){
         if (userText && userText.includes(value.word)) {
            result.push({
              word:capitalize(value.word),
              replacement:buildReplacementWords(value.replacement)
             })
         }
    }

    return result;
  }

  function buildReplacementWords(words){
    return words.replace(/, ((?:.(?!, ))+)$/, ' or $1');
  }
  
  function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  module.exports = {
    wordSearcher
  };