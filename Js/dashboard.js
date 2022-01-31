

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
  let clrs;
  var colorValue;
  let dropDownContainer=document.querySelector(".dropdown-content");
  let arhiveSidebar=document.querySelector("#archivebtn");
  let sidebarLogobtn=document.querySelector(".sidebarLogo");
  let sidebarbtn=document.querySelector(".sidebar");
  let colorOne=document.querySelector(".dropdown-content");
  let drop=document.querySelector(".imgPopup");
  let getAction="normal";
  
//sidebar
  window.addEventListener('click', function(e){   
    if (document.querySelector('.sidebarLogo').contains(e.target)){
      console.log("Clicked in box");
    } else{
      console.log("Clicked outside the box");
      sidebarbtn.style.display="flex";
        sidebarLogobtn.style.display="none";
    }
  })


  //
  $(document).ready(function(){
    $('[data-toggle="popover"]').popover({
    html : true,
    template:"<div>Hello</div>"
});
  })

//   $('body').on('click', '.clrDefine', function(e) {
//     e.preventDefault()
//     console.log("hey From Color CLick")
//     console.log("Color = "+e.currentTarget.id);
//     colorValue=e.currentTarget.id;
//     console.log(colorValue)
//     titleInputOne.style.background=colorValue;
//     descriptionInput.style.background=colorValue;
//     noteContainerTwo.style.background=colorValue;
//     noteBox.style.background=colorValue;
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

  function getNotes()
  {
    let arr1=[];
    let filterArr=[];
    requirejs(['../Service/dataservices.js'], (methods) => {
      methods.getNotes().then((resp)=>{
        console.log(resp.data.data.data);
        let noteArray=resp.data.data.data;
        if(getAction=="normal")
        {
          filterArr=noteArray.filter(function(note){
            if(note.isArchived==false && note.isDeleted==false)
            {
              return note;
            }
          
        })
        console.log(filterArr);
        
          arr1=filterArr;
        }
if(getAction=="archiveNoteDisplay")
{
  filterArr=noteArray.filter(function(note){
    if(note.isArchived==true && note.isDeleted==false)
    {
      return note;
    }
})
arr1=filterArr;
}
if(getAction==="trashButtonClicked"){
  filterArray = noteArray.filter(function(note){
     if(note.isDeleted===true){
         console.log("Trash button if condition")
         return note
     }
 })
 arr=filterArray;


}

        notesContainer.innerHTML = filterArr.map((note) =>`<div class="noteBox" style="background-color:${note.color}">
          <div class="smallBoxNote1">${note.title}</div><br>
          <div class="smallBoxDesc1">${note.description}</div>
         <div class="logoSet"><i class="bi bi-bell"></i>
         <i class="bi bi-person-plus"></i>
          <a href="#" data-toggle="popover" data-html="true" id=${note.id}><div class="colorPop">
          <div class="dropdown-content"></div>
        <i class="image1 imgPopup bi bi-palette"></i>
        </div></a>
         <i class="bi bi-image"></i>
         <i class="bi bi-archive archive" id=${note.id} ></i>
         <i class="bi bi-trash" id=${note.id}></i>
         <i class="bi bi-three-dots-vertical"></i></div>
     
          </div>`).join('');
        }).catch((error)=>{
          console.log(error);
        })
      })
        return arr1;
        console.log(filterArr);
  }


  getNotes();
     

titleInputOne.addEventListener('change',function(e){
  title=e.target.value;
})
descriptionInput.addEventListener('change',function(e){
  desc=e.target.value;
})
close.addEventListener('click',function(e){
  console.log(title,desc);
  console.log(clrs);
  console.log(colorValue);
  requirejs(['../Service/dataservices.js'], (methods) => {
   let obj={
     title:title,
     description:desc,
     isArchived:archive,
     color:clrs,
   }
   methods.addNotes(JSON.stringify(obj)).then((resp)=>{
     console.log(resp);
   }).catch((error)=>{
     console.log(error);
   })
})
})
  
//archieve 
$('body').on('click', '.archive', function(e) {
  e.preventDefault()
  console.log("heyyyyyyy")
  console.log(e.currentTarget.id)
  requirejs(['../Service/dataservices.js'], (methods) => {
  let archiveobj ={
      noteIdList : [e.currentTarget.id],
      isArchived : true,     
}
      methods.archiveNotes(JSON.stringify(archiveobj)).then((resp)=>{
        console.log(resp);
      }).catch((error)=>{
        console.log(error)
      })
  
  })
 
});

//delete
$('body').on('click', '.bi-trash', function(e) {
  e.preventDefault()
  requirejs(['../Service/dataservices.js'], (methods) => {
  let deleteobj ={
      noteIdList : [e.currentTarget.id],
      isDeleted : true,     
}
console.log(deleteobj)
      methods.trashNotes(JSON.stringify(deleteobj)).then((resp)=>{
        console.log(resp);
      }).catch((error)=>{
        console.log(error)
      })
  
  })
 
});

//color popup
$(document).on('click', '.bi-palette', function(e) {
  e.preventDefault()
  console.log(colorValue)
  let obj4 = {
      noteIdList: [e.target.id],
      color:colorValue,
  }
  console.log(obj4)
  requirejs(['../Service/dataservices.js'], (methods) => {
      console.log(methods)
      methods.colorNotes(JSON.stringify(obj4)).then((response)=>{
         
    
            let a = JSON.parse(response)
            console.log(response)
            location.reload();
          
      }).catch(function(error){
          console.log(error)
      })
  
     
  });
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
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});

drop.addEventListener("mouseover",function(event){
  event.preventDefault();
clrMethod();
})
function clrMethod(){
  const colors = ["#2ECC71","#AF7AC5","#F1948A","#A3E4D7","#F5B7B1","#F5B041","#DC7633","#F1C40F","#AAB7B8","#F1948A","#2ECC71","#F5B041"];
  colorOne.innerHTML=colors.map((color)=>`<div class="clrDefine" style="background-color:${color}" id=${color}></div>`).join("")
}
$('body').on('click', '.clrDefine', function(e) {
  e.preventDefault()
  console.log("hey From Color CLick")
  console.log("Color = "+e.currentTarget.id);
  clrs=e.currentTarget.id;
  console.log(clrs)
  titleInputOne.style.background=clrs;
  descriptionInput.style.background=clrs;
  noteContainerTwo.style.background=clrs;
  noteBox.style.background=clrs;
})


$('body').on('click', '#arhiveSidebar', function(e) {
  

})

window.addEventListener('click', function(e){   
   e.preventDefault()
  document.querySelector('#archivebtn').contains(e.target)
   console.log("isArchived");
   getAction="archiveNoteDisplay";
  
   getNotes();
 
})
$('body').on('click', '.bi-trash', function(e) {
  e.preventDefault()
 getAction="trashButtonClicked";
 getNotes();
 console.log("Hey.Trash Button From Sidebar has been clicked")
})
})


