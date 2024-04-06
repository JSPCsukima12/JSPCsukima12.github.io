"use strict";

function dice() {
  var random = Math.floor(Math.random() * 6) + 1;
  return random;
}

var i;
var total = 0; //総試行回数記憶用変数
const cnt =[0,0,0,0,0,0]; //回数カウント用配列
const p = [0,0,0,0,0,0]; //確率記憶用配列
const name1 = ["1.png","2.png","3.png","4.png","5.png","6.png"]; //写真用配列
const name2 = ['.one','.two','.three','.four','.five','.six']; //HTML用配列
const numlist = ['.num1','.num2','.num3','.num4','.num5','.num6'];
var element = document.querySelector('.graph');
var help = document.querySelector('.help');
document.querySelector('button').addEventListener('click', () => {
  element.style.display = 'flex';
  help.style.display = 'none';
  total += 1;
  var number = dice();
  var img = document.getElementById("dice");
  var change_img;
  for(i = 0;i < 6;i++){
    if(number == i + 1){
      change_img = name1[i];
      cnt[i] += 1;
      document.querySelector(name2[i]).textContent = String(cnt[i]);
    }
    p[i] = Math.round(1000 * cnt[i] / total) / 10;
    document.querySelector(numlist[i]).textContent = String(p[i]) + '%';
    let percent = String(p[i]) + '%';
    document.querySelector(numlist[i]).style.width = percent;
  }
  img.src = change_img;
});
