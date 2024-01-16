const playButton = document.getElementsByClassName("play")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const second = document.getElementsByClassName("sec")[0];
const centisecond = document.getElementsByClassName("msec")[0];
const minute = document.getElementsByClassName("min")[0];
const laps = document.getElementsByClassName("laps")[0];
const clearbutton = document.getElementsByClassName("lap-clear-button")[0];
const bg = document.getElementsByClassName("outer-circle")[0];




let censecond ;
let sec 
let min ;

let secCounter = 0 ;
let minCounter= 0 ;
let cenSecondCounter = 0 

let  isplay = false;
const toggleButon = ()=>{
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const play = () =>{
    if(!isplay){
        playButton.innerHTML = "stop";
        playButton.style.backgroundColor = "red";
        bg.classList.add("animation-bg");
        min =  setInterval(()=>{
            minute.innerHTML=`${++minCounter} :&nbsp;`;
            } , 1000*60)

       sec =  setInterval(()=>{
        if(secCounter===60){
            secCounter=0;
        }
            second.innerHTML=`${++secCounter} .&nbsp;`;
        } , 1000);

        censecond =  setInterval(()=>{
            if(cenSecondCounter ==100){
                cenSecondCounter=0;
            }
            centisecond.innerHTML=`${++cenSecondCounter}`;
        } , 10);

        isplay = true;
        isreset= true;
    }else{
        playButton.innerHTML = "play";
        clearInterval(sec);
        clearInterval(censecond);
        clearInterval(min);
        isplay=false;
        bg.classList.remove("animation-bg");
        
    }
    toggleButon();
}

const reset = () =>{
    clearInterval(sec);
    clearInterval(censecond);
    clearInterval(min);
    isplay=false;
    playButton.innerHTML = "play";
    centisecond.innerHTML = '0'
    second.innerHTML =  '0 .'
    minute.innerHTML ='0 :'

    secCounter = 0 ;
    cenSecondCounter = 0 ;
    minCounter = 0 ;
    lapItem=0;
    clearAll();

}

let lapItem = 0 ; 


const clearAll = () =>{
    laps.innerHTML='';
    clearbutton.classList.add("hidden");
    lapItem=0;
}

const lap = ()=>{
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("stamp")

    li.setAttribute("class" , "lap-item");
    number.setAttribute("class" ,"number");
number.innerHTML=`#${++lapItem}     `
    timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${cenSecondCounter}`

    li.append(number , timeStamp);
    laps.append(li);
    clearbutton.classList.remove("hidden");
}
playButton.addEventListener("click" , play)
resetButton.addEventListener("click" , reset)
lapButton.addEventListener("click" ,lap);
clearbutton.addEventListener("click" ,clearAll) 