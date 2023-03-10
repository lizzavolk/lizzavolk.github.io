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