var content=document.querySelector(".content-text");
var home=document.querySelector(".content");

var about=document.querySelector(".about");
about.addEventListener("click",()=>{
    content.innerHTML=`<h2>About</h2>
    <p>As a junior web developer passionate about creating engaging online experiences, I am eager to contribute my skills and enthusiasm to a dynamic team. With a solid foundation in HTML, CSS, and JavaScript, along with experience using frameworks like React and Angular, I am adept at building responsive and user-friendly websites.

    During my studies and personal projects, I have developed a keen eye for design and a commitment to writing clean, efficient code. I thrive in collaborative environments and enjoy tackling new challenges that push me to expand my skill set.
    
    Currently seeking opportunities for both full-time employment and internships, I am excited about the prospect of learning from experienced professionals while making meaningful contributions to projects. My goal is to continue growing as a developer and to contribute to the creation of innovative digital solutions.
    
    Let's connect and explore how I can bring value to your team!</p>`
})

var feedback=document.querySelector("#feedback");
feedback.addEventListener("click",()=>{
    content.innerHTML=`<h2>Feedback Form</h2>
    <textarea rows='8' col='900'></textarea>
    <button>send</button>`;

})
document.querySelector("#home").addEventListener("click",()=>{
    content.innerHTML=  ` <h2>project Details </h2>
    <p> <h5>1.Topic name:</h5> Traveling website Duration:1 week project Description: 
     •	The user can select the desired location and we provide them facility such as hotel booking tourist guide and etc. </p>
     <br></br>
      <p>
    <h5> 2.Topic name:</h5>Coffee Café Management  Duration:1 week project  Description: 
     •	In this project we provide the different variety of coffee to people. 
     The admin can performs CRUD operation such as adding stocks,reading a payment details and delete a record. 
     </p>`;
})