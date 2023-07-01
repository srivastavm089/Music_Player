let songImg = [
  "https://i.ytimg.com/vi/dSDehTfGYK4/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR64HgOXGeKoe-Kv-zSrPfXrq-u6198mTDLQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZ9-X2QC2Nu2VFkMN-bHjQF5Uz2BBvGwvpQ&usqp=CAU",
];
let songName = ["Falling    ", "Ram siya raam", "Seeti Maar"];
let songDes = ["Falling", "aadpipursuh", "radhe offial"];
let imgTarg = document.getElementById("rotate");
let titleTarg = document.querySelector(".title");
let desTarg = document.querySelector(".des");
let musicTarg = document.getElementById("music");
let line = document.querySelector('.line');
let circle = document.querySelector('.last-circle');
let totalTime = document.querySelector('.total-time');
musicTarg.addEventListener('timeupdate', updateProgress);
function updateProgress(){
 const progress = (musicTarg.currentTime / musicTarg.duration)*100;
 line.style.width = progress + "%"
 circle.style.left = progress-2 + "%";
 let date = new Date();
 let cal = musicTarg.duration===NaN ? date.getTime(): musicTarg.duration + date.getTime();
 
console.log(cal)

 setInterval(()=>{
  
 },1000)
}
let rend = 0;
let musicLen = 0;
imgTarg.src = songImg[rend];
titleTarg.innerText = songName[rend];
desTarg.innerText = songDes[rend];
musicTarg.src = "./0.mp3";

function p() {
  document.getElementById("pause").style.display = "block";
  document.getElementById("play").style.display = "none";
  let render = (musicTarg.duration/60).toString();
  
  totalTime.innerText = `${render.charAt(0)}: ${render.charAt(2)}${render.charAt(3)}`
 
  musicTarg.play();
}
function pa() {
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "block";
  musicTarg.pause();
}
function next() {
  if (rend < songName.length - 1) {
    rend++;
    musicLen++;
    musicTarg.src = `./${musicLen}.mp3`;
    imgTarg.src = songImg[rend];
    titleTarg.innerText = songName[rend];
    desTarg.innerText = songDes[rend];
  } else {
    rend = 0;
    musicLen = 0;
    imgTarg.src = songImg[rend];
    titleTarg.innerText = songName[rend];
    desTarg.innerText = songDes[rend];
    musicTarg.src = `./${musicLen}.mp3`;
  }
}
function prev() {
  if (rend > 0) {
    rend--;
    musicLen--;
    imgTarg.src = songImg[rend];
    titleTarg.innerText = songName[rend];
    desTarg.innerText = songDes[rend];
    musicTarg.src = `./${musicLen}.mp3`;
  } else {
    rend = songImg.length - 1;
    musicLen = songImg.length - 1;
    
    imgTarg.src = songImg[rend];
    titleTarg.innerText = songName[rend];
    desTarg.innerText = songDes[rend];
    musicTarg.src = `./${musicLen}.mp3`;
  }
}
