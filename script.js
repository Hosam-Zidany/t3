(function (window) { var names = [ "Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim", ];

for (var i = 0; i < names.length; i++) {
var firstLetter = names[i].charAt(0).toLowerCase();

if (firstLetter == "j") { // byeSpeaker.xxxx byeSpeaker.speak(names[i]); } else { // helloSpeaker.xxxx helloSpeaker.speak(names[i]); } }})(window);