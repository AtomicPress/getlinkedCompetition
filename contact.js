'use strict'
const form = document.querySelector('#contactform');
const nameinp = form.querySelector('#name');
const mailinp = form.querySelector('#Mail');
const messageinp = form.querySelector('#Message');
window.addEventListener('resize', function(e){
    if(this.window.innerWidth <= 640){
        nameinp.placeholder = "Team's Name"
    }else{
        nameinp.placeholder = 'First Name'
    }
})
form.addEventListener('submit', function(e){
    e.preventDefault()
    let email = mailinp.value, name = nameinp.value, message = messageinp.value;
    let data = {
        email : email,
        first_name: name,
        message : message
    };
    fetch('https://backend.getlinked.ai/hackathon/contact-form',{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-type' : 'application/json; charset=UTF-8'
        }
    }).then(res=>res.json()).then(jsoe=>console.log(jsoe))
    mailinp.value = ''
    nameinp.value = '' 
    messageinp.value = ''
})
// {
//     "email":"sample@eexample.com",
//     "phone_number":"0903322445533",
//     "first_name": "Space Explore",
//     "message": "I need further info"
// }