ampm=document.getElementById("ampm")
function displaytime()
{
    let dateTime = new Date();
    let hr=dateTime.getHours();
    let min=padzero(dateTime.getMinutes());
    let sec=padzero(dateTime.getSeconds());
    let date = padzero(dateTime.getDate())
    let month = padzero(dateTime.getMonth()+1)
    let year = padzero(dateTime.getFullYear())
    if(hr>12){
        ampm.innerHTML = "PM"
        hr-=12
    }
    else{
        ampm.innerHTML='AM'
    }
    hr = padzero(hr)
    document.getElementById("hours").innerHTML=hr
    document.getElementById("mins").innerHTML=min
    document.getElementById("seconds").innerHTML=sec
    document.getElementById("date").innerHTML=date
    document.getElementById("month").innerHTML=month
    document.getElementById("year").innerHTML=year
}   

function padzero(num){
    return num<10?"0"+num:num
}
setInterval(displaytime, 500)
