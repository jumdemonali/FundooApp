

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
  let colorpopupbtn=document.querySelector(".bi-palette");
  let colorsOptions=document.querySelector(".clr");
  let clrs="";


  

  // $(document).on('click', '.clr', function (event) {
//     color=event.target.id;
// console.log(event.target.getAttribute("data-a"));
//  })
//  colorpopupbtn.addEventListener("mouseover",function(event){
//   event.preventDefault()
// mapColorToPopp("create");
 

// })
//  function mapColorToPopp(action){
   
//   let decideClass = ""
//   if(action === "create"){
//       decideClass="color"
//   }
//   else if(action ==="update"){
//       decideClass="update"
//   }
//   console.log(decideClass)
//   console.log(action)
//   const colorArray=["#FFFFFF ","#FBBC04","#FFF475","#CCFF90","#A7FFEB","#CBF0F8","#AECBFA","#D7AEFB","#FDCFE8","#E6C9A8","#E8EAED","#D7AEFB"];
 
//   colourContainer.innerHTML=colorArray.map((color)=>
//   `<div class=${decideClass} style="background-color:${color}" id=${note.color} ></div>`).join('')

//   console.log("hey From ColorArray")
  
// }


//On clicking on a color that colour is given to the background of Main Take Note
// $('body').on('click', '.clr', function(e) {
//   e.preventDefault()
//   console.log("hey From Color CLick")
//   console.log("Color = "+e.currentTarget.id);
//   colorValue=e.currentTarget.id;
//   console.log(colorValue)
//   title2.style.background=colorValue;
//   titleDescription.style.background=colorValue;
//   noteContainerTwo.style.background=colorValue;
 
// })

  

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
      notesContainer.innerHTML = noteArray.map((note) =>`<div class="noteBox" style="background-color:${note.color}">
      <div class="smallBoxNote1">${note.title}</div><br>
      <div class="smallBoxDesc1">${note.description}</div>
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
  console.log(clrs);
  requirejs(['../Service/dataservices.js'], (methods) => {
   let obj={
     title:title,
     description:desc,
     isArchived:archive,
     color:clrs
   }
   methods.addNotes(JSON.stringify(obj)).then((resp)=>{
     console.log(resp);
   }).catch((error)=>{
     console.log(error);
   })
})
})
  
    /*Delete Note And move to Trash*/
    
      
      $('body').on('click', '.deleteButtonNote', function(e) {
        e.preventDefault()
        console.log("Hey Delete button inside note is clicked")
        console.log(e.currentTarget.id)
      
        let object ={
            noteIdList : [e.currentTarget.id],
            "isDeleted": true,
           
    }
    
    console.log(object)
    // let objectServer=JSON.stringify(object);
    // console.log(objectServer)
        requirejs(['../service/userService.js'], (methods) => {
            methods.trashNote("http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList",JSON.stringify(object)).then(function(response){
                
                console.log(response)
                
                getNote()
                let a = JSON.parse(response)
                //  console.log(a.data.data)
                  // console.log(a.data.data.id)
       
    
               
            }).catch(function(error){
                console.log(error)
            })
        
        })
       
     });
    
window.addEventListener('click', function(e){   
  if (document.querySelector('.note-container2').contains(e.target)){
    console.log("Clicked in box");
  } else{
    console.log("Clicked outside the box");
      noteContainerOne.style.display="flex";
  noteContainerTwo.style.display="none";
  }
})
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});
const colors = ["#2ECC71","#AF7AC5","#F1948A","#A3E4D7","#F5B7B1","#F5B041","#DC7633","#F1C40F","#AAB7B8","#F1948A","#2ECC71","#F5B041"];
let value=colors.map((color) =>`<div id=${color}
style="background-color:${color};  width:30px; height:25px; border-radius: 50%;
  margin: 2px 2px 2px 2px;"></div>`).join('');
document.getElementById("clrSelector").setAttribute("data-content",value);
})  