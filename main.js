let mybgcolor
let mytxcolor
let myf1text
let myf1link
let myf2text
let myf2link
let myf3text
let myf3link
let timer = document.getElementById("timer");
let nowtimer = document.getElementById("nowtimer");
let next = document.getElementById("next");
let startTimename = [
  "朝礼",
  "１限開始",
  "１限終了",
  "２限開始",
  "２限終了",
  "３限開始",
  "３限終了・昼食開始",
  "４限開始・昼食終了",
  "４限終了",
  "５限開始",
  "５限終了",
  "６限開始",
  "６限終了・終礼",
  "下校",
  "次の日",
];
var startTimehours = [9, 9, 10, 10, 11, 11, 12, 13, 14, 14, 15, 15, 16, 16, 24];
let startTimeMinutes = [
  30,
  45,
  35,
  45,
  35,
  45,
  35,
  15,
  05,
  15,
  05,
  15,
  05,
  15,
  00,
];
let timeLeft;
let timerId;
let isRunning = false;
let music = new Audio("se.mp3");

function startup(){
  mybgcolor = localStorage.getItem("mybgcolor");
  mytxcolor = localStorage.getItem("mytxcolor");
  myf1text = localStorage.getItem("myf1text");
  myf2text = localStorage.getItem("myf2text");
  myf3text = localStorage.getItem("myf3text");
  myf1link = localStorage.getItem("myf1link");
  myf2link = localStorage.getItem("myf2link");
  myf3link = localStorage.getItem("myf3link");
  if(mybgcolor === null){
    localStorage.setItem('mybgcolor',"#0000aa");
    mybgcolor = localStorage.getItem("mybgcolor");
  }
  if(mytxcolor === null){
    localStorage.setItem('mytxcolor',"#eeeeee");
    mytxcolor = localStorage.getItem("mytxcolor");
  }
  if(myf1text === null){
    localStorage.setItem('myf1text',"Google");
    myf1text = localStorage.getItem("myf1text");
  }
  if(myf2text === null){
    localStorage.setItem('myf2text',"N予備校");
    myf2text = localStorage.getItem("myf2text");
  }
  if(myf3text === null){
    localStorage.setItem('myf3text',"Classroom");
    myf3text = localStorage.getItem("myf3text");
  }
  if(myf1link === null){
    localStorage.setItem('myf1link',"https://www.google.co.jp/");
    myf1link = localStorage.getItem("myf1link");
  }
  if(myf2link === null){
    localStorage.setItem('myf2link',"https://www.nnn.ed.nico/home");
    myf2link = localStorage.getItem("myf2link");
  }
  if(myf3link === null){
    localStorage.setItem('myf3link',"https://classroom.google.com/");
    myf3link = localStorage.getItem("myf3link");
  }
  document.getElementById("bg").value=mybgcolor;
  document.getElementById("tx").value=mytxcolor;
  document.getElementById("container").style.backgroundColor=mybgcolor;
  document.getElementById("container").style.color=mytxcolor;
  document.getElementById("f1").value=myf1text;
  document.getElementById("f2").value=myf2text;
  document.getElementById("f3").value=myf3text;
  document.getElementById("f1text").value=myf1text;
  document.getElementById("f2text").value=myf2text;
  document.getElementById("f3text").value=myf3text;
  document.getElementById("f1link").value=myf1link;
  document.getElementById("f2link").value=myf2link;
  document.getElementById("f3link").value=myf3link;
}
startup()
function updateTimer(m) {
  let d = new Date(); //現在時刻
  let s = 59 - d.getSeconds();
  s = ("0" + s).slice(-2);
  timer.textContent = m + "分" + s + "秒"; //表示される文字列を設定
}

window.onload = function countDown() {
  timerId = setTimeout(function () {
    let nowid = 0;
    let nd = new Date();
    let nh = nd.getHours();
    let nm = nd.getMinutes();
    let ns = nd.getSeconds();
    let endtime;
    let nowtime = nh * 60 + nm;
    nh = ("0" + nh).slice(-2); //「０」が表示される桁を設定
    nm = ("0" + nm).slice(-2);
    ns = ("0" + ns).slice(-2);
    nowtimer.textContent = nh + ":" + nm + ":" + ns;
    for (let i = 0; i <= startTimehours.length; i++) {
      endtime = startTimehours[i] * 60 + startTimeMinutes[i] - 1;
      if (endtime >= nowtime) {
        nowid = i;
        break;
      }
    }
    next.textContent = startTimename[nowid];
    timeLeft =
      startTimehours[nowid] * 60 + startTimeMinutes[nowid] - nowtime - 1;
    updateTimer(timeLeft);
    if (ns == 59 && timeLeft == 0) {
      music.play(); // 再生
    }
    countDown();
  }, 300);
};

function bgcolor() {
  document.getElementById(
    "container"
  ).style.backgroundColor = document.getElementById("bg").value;
  mybgcolor = document.getElementById("bg").value
  localStorage.setItem('mybgcolor',mybgcolor);
}

function txcolor() {
  document.getElementById("container").style.color = document.getElementById(
    "tx"
  ).value;
  mytxcolor = document.getElementById("tx").value
  localStorage.setItem('mytxcolor', mytxcolor);
}
function vachange(ban){
  if(ban==1){
    myf1text=document.getElementById("f1text").value;
    document.getElementById("f1").value=myf1text;
    localStorage.setItem('myf1text', myf1text);
  }else if(ban==2){
    myf2text=document.getElementById("f2text").value;
    document.getElementById("f2").value=myf2text;
    localStorage.setItem('myf2text', myf2text);
  }else if(ban==3){
    myf3text=document.getElementById("f3text").value;
    document.getElementById("f3").value=myf3text;
    localStorage.setItem('myf3text', myf3text);
  }
}
function lichange(ban){
  if(ban==1){
    myf1link=document.getElementById("f1link").value;
    localStorage.setItem('myf1link', myf1link);
  }else if(ban==2){
    myf2link=document.getElementById("f2link").value;
    localStorage.setItem('myf2link', myf2link);
  }else if(ban==3){
    myf3link=document.getElementById("f3link").value;
    localStorage.setItem('myf3link', myf3link);
  }
}
function openthelink(ban){
  if(ban==1){
    window.open(myf1link)
  }else if(ban==2){
    window.open(myf2link)
  }else if(ban==3){
    window.open(myf3link)
  }

}