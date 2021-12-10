const baseUrl='http://fundoonotes.incubation.bridgelabz.com/api/';

// function postMethod(url,formData){
//     return fetch(baseUrl+url,{
//         method:'POST',
//         body: formData,
//     }
//     .then(response=>response.json())
//     .then(result=>{
//         // console.log('Success:',result);
//         return result;
//     })

//     .catch(error=>{
//         console.console.log('Error:',error);
//         return error;
//     })
//     )
// }

function getvals(url, data, meth) {
    let options = {
      method: meth,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    if (meth != "GET") {
      options.body = JSON.stringify(data);
    }
    return fetch(baseUrl+url, options)
      .then((response) => response.json())
      .then((responseData) => {
        return responseData;
      })
      .catch((error) => console.warn(error));
  }
  

// function getMethod(){
//     fetch('http://example.com/movies.json',{
//         method:'POST',
//         body: formData,
//     })
//     .then(response=>response.json())
//     .then(result=>{
//         console.log('Success:',result);
//     })
//     .catch(error=>{
//         console.console.log('Error:',error);
//     });
// }