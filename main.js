let timer = document.getElementById('timer');
let nowtimer = document.getElementById('nowtimer');
let next = document.getElementById('next')

let startTimename = ['朝礼','１限開始','１限終了','２限開始','２限終了','３限開始','３限終了・昼食開始','４限開始・昼食終了','４限終了','５限開始','５限終了','６限開始','６限終了・終礼','下校','次の日']
var startTimehours = [9,9,10,10,11,11,12,13,14,14,15,15,16,16,23];
let startTimeMinutes = [30,45,35,45,35,45,35,15,05,15,05,15,05,15,59]
let timeLeft;
let timerId;
let isRunning = false;
let music = new Audio('se.mp3');

function updateTimer(m){

    let d = new Date()  //現在時刻

    let s = 59-d.getSeconds();1 
    s = ('0' + s).slice(-2);
    timer.textContent = m + '分' + s + '秒';  //表示される文字列を設定
  }

window.onload = function countDown(){
    timerId = setTimeout(function(){
      let nowid=0
      let nd = new Date();
      let nh = nd.getHours();
      let nm = nd.getMinutes();
      let ns = nd.getSeconds();
      let endtime
      let nowtime=(nh*60)+nm
      nh = ('0' + nh).slice(-2); //「０」が表示される桁を設定
      nm = ('0' + nm).slice(-2);
      ns = ('0' + ns).slice(-2); 
      nowtimer.textContent = nh + ':' + nm + ':' + ns;
      for(let i=0;i<=startTimehours.length;i++){
        endtime=(startTimehours[i]*60)+startTimeMinutes[i]-1
        if(endtime>=nowtime){
            nowid=i
            break;
        }
      }
      next.textContent=startTimename[nowid]
      timeLeft = (startTimehours[nowid]*60)+startTimeMinutes[nowid]-nowtime-1
      console.log(timeLeft)
      updateTimer(timeLeft);
      if(ns==59 && timeLeft==0){
        music.play();  // 再生
      }
      if(nowid==0 || nowid==startTimename.length){
        document.getElementById('container').style.backgroundColor="#dddddd"
        document.getElementById('container').style.color="#222222"
      }
      countDown();
    },300);
}
function bgcolor(){
  document.getElementById("container").style.backgroundColor=document.getElementById("bg").value
}
function txcolor(){
  document.getElementById("container").style.color=document.getElementById("tx").value
} 