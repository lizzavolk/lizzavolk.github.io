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
 document.querySelector('.body-container .hover-block.gryd').onclick = function(){
   document.querySelector('.inf-container .ollo').style.display =  document.querySelector('.inf-container .ollo').style.display == 'none' ? '' : 'none';
   document.querySelector('.inf-container .gryd').style.display =  document.querySelector('.inf-container .gryd').style.display == '' ? 'block' : '' ;
 };
 console.log("page is fully loaded");
};
var subtitle = "Краткий тест на знание материала";
var questions=[
{
  text: "Масса скелетной мускулатуры у взрослого человека составляет",
  answers: ["30-35% массы тела",
      "45-50% массы тела",
      "70-75% массы тела"],
  correctAnswer: 0
},
{
  text: "Мышцы крепятся к костям с помощью",
  answers: ["хрящей",
      "сухожилий",
      "надкостниц"],
  correctAnswer: 1
},
{
  text: "В изменении объема грудной полости при дыхании участвуют:",
  answers: ["мышцы спины",
      "мышцы живота",
      "мышцы диафрагмы"],
  correctAnswer: 2
},
{
  text: "Самой длинной мышцей человеческого тела является:",
  answers: ["трапецевидная",
      "портняжная",
      "Четырехглавая мышца бедра"],
  correctAnswer: 1  
},
{
  text: "Накопление молочной кислоты",
  answers: ["способствует развитию утомления мышцы",
      "способствует увеличению работоспособности мышц",
      "никак не влияет на работу мышц"],
  correctAnswer: 0  
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