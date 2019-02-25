//hack through DOM to arrive at a rough word count and then use completion() to send the count back to shortcuts
var count = document.body.innerText.split(' ').length; 
completion(count);
