const baseUrl='http://fundoonotes.incubation.bridgelabz.com/api/';

function postMethod(url,formData){
    fetch(baseUrl+url,{
        method:'POST',
        body: formData,
    })
    .then(response=>response.json())
    .then(result=>{
        // console.log('Success:',result);
        return result;
    })
    .catch(error=>{
        console.console.log('Error:',error);
        return error;
    });
}
function getMethod(){
    fetch('http://example.com/movies.json',{
        method:'POST',
        body: formData,
    })
    .then(response=>response.json())
    .then(result=>{
        console.log('Success:',result);
    })
    .catch(error=>{
        console.console.log('Error:',error);
    });
}