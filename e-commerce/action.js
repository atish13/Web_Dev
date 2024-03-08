var addto=document.querySelector("#add");
function viewProdct()
{

 addto.classList.add("addTask");
 addto.innerHTML=`<button onclick="addRemove()" class='btn btn-success m-3'>close</button>
<br>
${content[0].innerHTML}`;



}
function addRemove()
{
   addto.classList.remove("addTask");
   // addto.children[0].remove();
   // addto.children[1].remove();
   while (addto.firstChild) {
      addto.removeChild(addto.firstChild);
  }
  
}

var div=document.createElement("div");

var content=[];


function addProduct(e)
{
  
   
   var idname=e.id;
   var imgsrc=document.querySelector(`#${idname}`).children[0].src;
   
   var price=document.querySelector(`#${idname}`).children[1].children[1].innerText;

   var img=document.createElement("img");
   //image
   img.setAttribute("src",imgsrc);
   img.setAttribute("width","150px");
   img.setAttribute("height","150px");


   //price
   var p=document.createElement("p");
      p.classList.add("text-black");
   p.innerText=price;


   //button
   var button=document.createElement("button");
   button.className="btn btn-success";
   button.innerText="cancel";
   button.setAttribute("onclick","removed(this)");
 

   div.append(img);
   // div.append(val.innerText);
   div.append(button);
   div.append(p);
  
   content.push(div);


 

   div.classList.add("addTask");

   // div.setAttribute('img',);
  
   // console.log(content);
// console.log(div);
//    div.append(e);
 addto.append(div);




}
function removed(i){
console.log(div.children[this]);  
}