var today = new Date();
// var formatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', };
var formatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
document.write(today.toLocaleDateString('en-US', formatOptions));