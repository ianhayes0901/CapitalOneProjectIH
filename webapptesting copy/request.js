const uri = 'https://developer.nps.gov/api/v1/activities?api_key=WSAdqFUtu59kwua9z41Qs7cuVbKpruMf7eXb3kPD';
let h = new Headers();
h.append('Accept', 'application/json')

let req = new Request(uri, {
    method: 'GET',
    headers: h,
    mode: 'cors'
});

fetch(uri)
    .then(  (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('Invalid');
        }
    })
    .then(  (jsonData) =>{
            console.log(jsonData)
    })
    .catch(  (err) =>{
        console.log('ERROR:', err.message)
    })