function wordSearcher(userText) {
    console.log(userText);
    if (userText && userText.includes('Hello')) {
      return 'FormData contains "Hello"';
    } else {
      return 'FormData does not contain "Hello"';
    }
  }
  
  module.exports = {
    wordSearcher
  };