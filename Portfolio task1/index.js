const textE1 = document.querySelector(".text");

const careers = ["FrontEnd Developer" , "Web Developer"]

let careerIndex = 0;
let characterIndex=0;

updateText()

function updateText(){
    characterIndex++
    textE1.innerHTML=`
    <h3>I am ${careers[careerIndex].slice(0,1)=="I"?"an":"a"} ${careers[careerIndex].slice(0,characterIndex)}`;

if(characterIndex === careers[careerIndex].length){
    careerIndex++
    characterIndex = 0
}
if(careerIndex === careers.length){
    careerIndex = 0;
}
setTimeout(updateText, 400);
}