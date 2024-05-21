setInterval(setClock,1000)
setInterval(watch,1000)
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand=document.querySelector('[data-second-hand]')

const hours=document.getElementById("hours")
const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds")
const ampm=document.getElementById("system")

function padder(value){
    return String(value).padStart(2,"0")
}

function watch(){
    let hourTime=new Date().getHours();
    const minuteTime=new Date().getMinutes();
    const secondTime=new Date().getSeconds();


    let am=hourTime >= 12? "PM":"AM";

    if (hourTime > 12){
        hourTime=hourTime-12;
    }


    hours.innerHTML=padder(hourTime)
    minutes.innerHTML=padder(minuteTime)
    seconds.innerHTML=padder(secondTime)
    ampm.innerHTML=am
}

function setClock(){
    const date= new Date()
    const secondsRatio= date.getSeconds()/60
    const minutesRatio= (secondsRatio + date.getMinutes())/60
    const hoursRatio= (minutesRatio + date.getHours())/12
    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)

}
function setRotation(element,ratio){
    element.style.setProperty('--rotation',ratio * 360)
}

setClock()
watch()
