var first=document.querySelector(".first-container");
var second=document.querySelector(".second-container");
var third=document.querySelector(".third-container");
var fourth=document.querySelector(".fourth-container");
function start()
{
    // alert("worked");
    first.classList.add("first-rotate");
    second.classList.add("second-rotate");
    third.classList.add("third-rotate");
    fourth.classList.add("fourth-rotate");
}
function medium()
{
   
    first.style.animationDuration= 5+'s';
    second.style.animationDuration=5+'s';
    third.style.animationDuration=5+'s';
    fourth.style.animationDuration=5+'s';
}
function fast()
{
    first.style.animationDuration= 300+'ms';
    second.style.animationDuration=300+'ms';
    third.style.animationDuration=300+'ms';
    fourth.style.animationDuration=300+'ms';   
}
function stop()
{
    first.classList.remove("first-rotate");
    second.classList.remove("second-rotate");
    third.classList.remove("third-rotate");
    fourth.classList.remove("fourth-rotate");   
}