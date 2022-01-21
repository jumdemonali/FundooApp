

window.addEventListener("DOMContentLoaded",function(){
  let noteContainerOne=document.querySelector(".note-container");
  let noteContainerTwo=document.querySelector(".note-container2");
  let close=document.querySelector(".cls-button");
  let titleInputOne=document.querySelector(".child1");
  let title,desc;
  let descriptionInput=document.querySelector(".child2");
  let notesContainer=document.querySelector(".notes-background");
  noteContainerOne.addEventListener("click",function(e){
    e.stopPropagation();
    noteContainerOne.style.display="none";
    noteContainerTwo.style.display="flex";
  })
  requirejs(['../Service/dataservices.js'], (methods) => {
    methods.getNotes().then((resp)=>{
      console.log(resp.data.data.data);
      let noteArray=resp.data.data.data;
      notesContainer.innerHTML="abc";
      notesContainer.innerHTML = noteArray.map((note) =>`<div class="noteBox"></div>`).join('');
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
     description:desc
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
})