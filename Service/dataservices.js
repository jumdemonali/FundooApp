define([''], function () {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
  
    let configFile = {
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };
  
    var methods = {};
    methods.addNotes = async function (obj1) {
      let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', obj1, configFile)
  
      return response;
    }
  
    methods.getNotes = async function () {
      let getResponse = await axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', config)
      return getResponse;
    }
  
    methods.archiveNotes = async function (obj2) {
      let archResponse = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes', obj2, config)
      return archResponse;
    }
  
    methods.trashNotes = async function (obj3) {
      let trashResponse = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', obj3, config)
      return trashResponse;
    }
  
    methods.colorNotes = async function (obj4) {
      let colorResponse = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes', obj4, config)
      return colorResponse;
    }
  
    methods.collabNotes = async function (obj5) {
      let collabResponse = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/searchUserList', obj5, config)
      return collabResponse;
    }
  
    methods.updateNotes = async function (obj7){
      let updateResponse = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes', obj7, config)
      return updateResponse;
    }
  
    methods.logout = async function (){
      let outResponse = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/logout', config)
      return outResponse;
    }
  
    return methods;
  
  
  
  
  })