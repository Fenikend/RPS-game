let persButtn=document.querySelectorAll('button')

function setButtonStatus(){
    persButtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        persButtn.forEach((b)=>b.classList.remove('active'))
        btn.classList.add('active')
        return(btn.id)
    })
})
}

