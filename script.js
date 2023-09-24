'use strict'
const navbtn = document.querySelector('.resnavbar')
const closebtn = document.querySelector('.closelinks')
const links = document.querySelector('.links')
const topNav = document.querySelector('.topNav')
const allAs = links.querySelectorAll('a')
console.log(navbtn, closebtn, links)
navbtn.addEventListener('click', function(){
    links.classList.add('showel')
    closebtn.classList.add('showel')
})
closebtn.addEventListener('click', function(){
    links.classList.remove('showel')
})
allAs.forEach(a=>a.addEventListener('click', function(){
    links.classList.remove('showel')
}))
window.addEventListener('resize', function(){
    if(this.window.innerWidth >= 700){
        closebtn.classList.remove('showel')
    }
})
window.addEventListener('scroll', function(){
    if(this.scrollY > 500){
        topNav.classList.add('sticky')
    }else{
        topNav.classList.remove('sticky')
    }
})