

window.addEventListener("DOMContentLoaded",function(){
  let noteContainerOne=document.querySelector(".note-container");
  let noteContainerTwo=document.querySelector(".note-container2");
  let close=document.querySelector(".cls-button");
  let titleInputOne=document.querySelector(".child1");
  let title,desc;
  let descriptionInput=document.querySelector(".child2");
  let notesContainer=document.querySelector(".notes-background");
  let archive=false;
  let archiveButton=document.querySelector("#Archive");
  
  noteContainerOne.addEventListener("click",function(e){
    e.stopPropagation();
    noteContainerOne.style.display="none";
    noteContainerTwo.style.display="flex";
  })
  archiveButton.addEventListener("click",function(e){
    e.stopPropagation();
    archive=true;
  })
 
  requirejs(['../Service/dataservices.js'], (methods) => {
    methods.getNotes().then((resp)=>{
      console.log(resp.data.data.data);
      let noteArray=resp.data.data.data;
      // notesContainer.innerHTML="abc";
      notesContainer.innerHTML = noteArray.map((note) =>`<div class="noteBox">
      <div>${note.title}</div><br>
      <div>${note.description}</div>
     <div class="logoSet"><i class="bi bi-bell"></i>
     <i class="bi bi-person-plus"></i>
      <a href="#" id="clrSelector" data-toggle="popover" data-html="true"> <i class="bi bi-palette"></i></a>
     <i class="bi bi-image"></i>
     <i class="bi bi-archive" id="Archive"></i>
     <i class="bi bi-three-dots-vertical"></i></div>
 
      </div>`).join('');
    }).catch((error)=>{
      console.log(error);
    })
  })

titleInputOne.addEventListener('change',function(e){
  title=e.target.value;
})
descriptionInput.addEventListener('change',function(e){
  desc=e.target.value;
})
close.addEventListener('click',function(e){
  console.log(title,desc);
  requirejs(['../Service/dataservices.js'], (methods) => {
   let obj={
     title:title,
     description:desc,
     isArchived:archive
   }
   methods.addNotes(JSON.stringify(obj)).then((resp)=>{
     console.log(resp);
   }).catch((error)=>{
     console.log(error);
   })
})
})
window.addEventListener('click', function(e){   
  if (document.querySelector('.note-container2').contains(e.target)){
    console.log("Clicked in box");
  } else{
    console.log("Clicked outside the box");
      noteContainerOne.style.display="flex";
  noteContainerTwo.style.display="none";
  }
})
const colors = ["#2ECC71","#AF7AC5","#F1948A","#A3E4D7","#F5B7B1","#F5B041","#DC7633","#F1C40F","#AAB7B8","#F1948A","#2ECC71","#F5B041"];
let value=colors.map((color) =>`<div class="round-boxes" style="background-color:red" border:1px solid red";>Hello</div>`).join('');
//  let value=`<div class="round-box" style="background-color: #92a8d1;"></div>`
document.getElementById("clrSelector").setAttribute("data-content",value);
})  