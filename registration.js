'use strict'
const form = document.querySelector('form');
const emailInp = form.querySelector('#Email');
const phoneInp = form.querySelector('#Phone')
const nameInp = form.querySelector('#Name')
const groupsl = form.querySelector('#grslt')
const topicInp = form.querySelector('#Topic')
const categorysl = form.querySelector('#categslt')
const checked = form.querySelector('#agree')
const overlay = document.querySelector('.overlay')
const btn = overlay.querySelector('button')
fetch('https://backend.getlinked.ai/hackathon/categories-list').then(res=>res.json()).then(datas=>datas.forEach(data=>{
    categorysl.insertAdjacentHTML('beforeend', `<option value=${data.id}>${data.name}</option>`)
})).catch(err=>alert(err))
form.addEventListener('submit', function(e){
    e.preventDefault()
    let email = emailInp.value, phone = phoneInp.value, name = nameInp.value, group = groupsl.value, topic = topicInp.value, category = categorysl.value, check = checked.checked;
    let data = {
        email: email,
        phone_number: phone,
        team_name: name,
        group_size: group,
        project_topic: topic,
        category: category,
        privacy_poclicy_accepted: check
    }, allinputs = form.querySelectorAll('.input');
    async function sendToServer (url, data){
      let res = await fetch( url ,{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-type' : 'application/json; charset=UTF-8'
        }
    })
        if(!res.ok){
            const errMsg = `An error has occured ${res.status}`;
            throw new Error(errMsg)
        }
        const msg = await res.json()
        return msg
    }
    // sendToServer('https://backend.getlinked.ai/hackathon/registration', data).catch(err=>console.log(err))
    fetch('https://backend.getlinked.ai/hackathon/registration', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-type' : 'application/json; charset=UTF-8'
        }
    }).then(res=>{if(!res.ok){
        throw new Error(`error: ${res.statusText}`)
    } return res.json()}).then(json=>{
        overlay.classList.remove('hideel')
        allinputs.forEach(input=>input.value= '')
        checked.checked = false
    }).catch(err=>alert(err + 'Check your details and resubmit 🙏'))
})
btn.addEventListener('click', function(){
    overlay.classList.add('hideel')
})
window.addEventListener('resize', function(e){
    if(this.window.innerWidth <= 730){
        btn.textContent = "Submit"
    }else{
        btn.textContent = 'Register now'
    }
})
// {
//     "email":"sample@eexample.com",
//     "phone_number":"0903322445533",
//     "team_name": "Space Explore",
//     "group_size": 10,
//     "project_topic":"Web server propagation",
//     "category": 1,
//     "privacy_poclicy_accepted": true
// }