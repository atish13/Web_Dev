var inp=document.querySelector("#time-ip");
var settime=document.querySelector(".set-btn");
var active=document.querySelector(".active-btn");
var deactive=document.querySelector(".deactive-btn");
var timeV;
var alramTime,setalram,alram;

function setTime(){
   timeV=inp.value;
  
}
function activeTime(){
    if(timeV=='')
    {
        alert("set time befor activation");
    }
    var now=new Date();
    alram=new Date(now.toDateString()+' '+timeV)
     setalram=alram-now;
   
    if(setalram<0)
    {
        alram.setDate(alram.getDate()+1);
        setalram=alram-now;
       
    }
    
    alert("set Alram");

    alramTime=setInterval(()=>{
        var audio = new Audio('Alarm-Clock-Short-chosic.com_.mp3'); 
         audio.play();

        alert('Alram... !');
},setalram)

}
function deactiveTime(){
 
    clearInterval(alramTime);
    // alert("deactivate");
    alert("deactivated....!");

}
function repeatTime()
{
   timeV= alram.setDate(alram.getDate()+1);

    console.log(timeV);
    activeTime();
}

