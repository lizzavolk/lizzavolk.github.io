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
  text: "Кости, образующие стопу",
  answers: ["запястье, пясть, фаланги",
      "предплюсна, плюсна, фаланги",
      "предплюсна, пясть, фаланги",
      "запястье, плюсна, фаланги"],
  correctAnswer: 1
},
{
  text: "Сколько пар ребер образуют грудную клетку?",
  answers: ["9",
      "10",
      "12",
      "14"],
  correctAnswer: 2
},
{
  text: "К какому виду костей относится лопатка?",
  answers: ["плоские",
      "сесамовидные",
      "смешанные",
      "короткие"],
  correctAnswer: 0
},
{
  text: "Сколько позвонков содержит поясничный отдел позвоночника?",
  answers: ["7",
      "6",
      "5",
      "4"],
  correctAnswer: 2  
},
{
  text: "Кость(-и), образующая(-ие) предплечье:",
  answers: ["плечевая",
      "плечевой и лучевой",
      "плоской",
      "локтевой и лучевой"],
  correctAnswer: 3  
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