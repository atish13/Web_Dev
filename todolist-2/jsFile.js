var newArr=[];
var taskV;
var inputV=document.querySelector("input");
var searchV=document.querySelector(".search")
var ullist=document.querySelector("ul");
function addTask()
{
  
   newArr.push(inputV.value);
//    console.log(newArr);
   
  
   
    showTask();

}

function showTask()
{
  
    var listItem="";
    for(x in newArr)
   {
    
   
    listItem+=`<li>${newArr[x]} <button
         onclick='removeValue(${x})'>cancel</button></li>` ;
   
   }
   ullist.innerHTML=listItem;
   
 
  
}
function removeValue(index)
   {
     newArr.splice(index,1);
   
    showTask();
   }
function searchTask() {
    let search=searchV.value;
    
    newArr=newArr.filter(i=> search==i);

    showTask();

}
