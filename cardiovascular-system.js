"use strict";
window.onload = (event) => {
 document.querySelector('.body-container .hover-block.right-arm').onclick = function(){
  document.querySelector('.inf-container .ollo').style.display =  document.querySelector('.inf-container .ollo').style.display == 'none' ? '' : 'none';
   document.querySelector('.inf-container .hands').style.display =  document.querySelector('.inf-container .hands').style.display == '' ? 'block' : '' ;
 };
 document.querySelector('.body-container .hover-block.left-arm').onclick = function(){
   document.querySelector('.inf-container .ollo').style.display =  document.querySelector('.inf-container .ollo').style.display == 'none' ? '' : 'none';
   document.querySelector('.inf-container .hands').style.display =  document.querySelector('.inf-container .hands').style.display == '' ? 'block' : '' ;
 };
 document.querySelector('.body-container .hover-block.legs').onclick = function(){
   document.querySelector('.inf-container .ollo').style.display =  document.querySelector('.inf-container .ollo').style.display == 'none' ? '' : 'none';
   document.querySelector('.inf-container .legs').style.display =  document.querySelector('.inf-container .legs').style.display == '' ? 'block' : '' ;
 };
 document.querySelector('.body-container .hover-block.headd').onclick = function(){
  document.querySelector('.inf-container .ollo').style.display =  document.querySelector('.inf-container .ollo').style.display == 'none' ? '' : 'none';
   document.querySelector('.inf-container .headd').style.display =  document.querySelector('.inf-container .headd').style.display == '' ? 'block' : '' ;
 };
 document.querySelector('.body-container .hover-block.taz').onclick = function(){
   document.querySelector('.inf-container .ollo').style.display =  document.querySelector('.inf-container .ollo').style.display == 'none' ? '' : 'none';
   document.querySelector('.inf-container .taz').style.display =  document.querySelector('.inf-container .taz').style.display == '' ? 'block' : '' ;
 };
 document.querySelector('.body-container .hover-block.gryd').onclick = function(){
   document.querySelector('.inf-container .ollo').style.display =  document.querySelector('.inf-container .ollo').style.display == 'none' ? '' : 'none';
   document.querySelector('.inf-container .gryd').style.display =  document.querySelector('.inf-container .gryd').style.display == '' ? 'block' : '' ;
 };
 console.log("page is fully loaded");
};
var subtitle = "Краткий тест на знание материала";
var questions=[
{
  text: "Гемоглобин — это очень важный белок, который содержится в эритроцитах. А что он переносит?",
  answers: ["железо",
      "кислород",
      "углерод"],
  correctAnswer: 1
},
{
  text: "Какие клетки играют главную роль в защите от инфекций?",
  answers: ["эритроциты",
      "тромбоциты",
      "лейкоциты"],
  correctAnswer: 2
},
{
  text: "Артерии - это сосуды, котоые обеспечивают",
  answers: ["ток крови от органов тела к сердцу",
      "обмен веществами  и газами между кровью и тканями",
      "ток крови от сердца к органам тела"],
  correctAnswer: 2
},
{
  text: "Какой фактор обеспечивает движение крови в венах?",
  answers: ["разная скорость движения крови по сосудам",
      "сокращение близлежащих скелетных мышц",
      "работа створчатых клапанов сердца"],
  correctAnswer: 1  
},
{
  text: "Мельчайшим сосудом кровеносной системы является",
  answers: ["артерия",
      "артериола",
      "капилляр"],
  correctAnswer: 2  
}
];

var yourAns = new Array;
var score = 0;

function Engine(question, answer) {yourAns[question]=answer;}

function Score(){
   var answerText = "Результаты:\n";
   for(var i = 0; i < yourAns.length; ++i){
  var num = i+1;
  answerText=answerText+"\n    Вопрос №"+ num +"";
  if(yourAns[i]!=questions[i].correctAnswer){
      answerText=answerText+"\n    Правильный ответ: " +
    questions[i].answers[questions[i].correctAnswer] + "\n";
    }
        else{
      answerText=answerText+": Верно! \n";
      ++score;
      }
       }

   answerText=answerText+"\nВсего правильных ответов: "+score+"\n";

   alert(answerText);
   yourAns = [];
   score = 0;
   clearForm("quiz");
}
function clearForm(name) {
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
  if(f.elements[i].checked)
    f.elements[i].checked = false;
}
}