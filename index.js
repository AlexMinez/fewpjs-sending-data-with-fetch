// Add your code here
let formData = {
    name: "Steve",
    email: "steve@steve.com"
}
const newObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
}


function submitData(){
    return fetch("http://localhost:3000/users", newObj)
    .then(function(response){
     return response.json();
    }).then (function(object){
        document.body.innerHTML = object["id"]
    }).catch(function(error){
        alert("Bad things! Ragnarők!");
        document.body.innerHTML = error.message
    })


}