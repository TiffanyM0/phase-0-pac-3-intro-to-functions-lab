function shout(string) {
 return string.toUpperCase("Hello!"); 
}

function whisper(string){
    return string.toLowerCase(); 
}

function logShout(string){
    console.log("Hello".toUpperCase());
}
console.log(logShout(string));


function logWhisper(string){
    console.log("Hello".toLowerCase());
}
console.log(logWhisper(string));


//function sayHiToHeadphonedRoommate (string){
//     let string = "hello";
//     console.log(string);
//     console.log(string.toLowerCase);
//     if (string === string.toLowerCase){
//         console.log("I can't hear you!");
//     }
// }
// console.log(sayHiToHeadphonedRoommate(string));
function sayHiToHeadphonedRoommate(string){
if (string === string.toLowerCase()){
    return "I can\'t hear you!"
}
else if (string === string.toUpperCase()) {
    return "YES INDEED!"    
}   
else if (string === "Let\'s have dinner together!"){
    return "I would love to!"
}
}
