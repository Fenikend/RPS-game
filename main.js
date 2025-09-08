let persButtn=document.querySelectorAll('button')

function setButtonStatus(){
    persButtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        persButtn.forEach((b)=>b.classList.remove('active'))
        btn.classList.add('active')
    })
})
}

function getButtonStatus(){
    persButtn.forEach(btn=>{
        if (btn.classList.contains('active')){
            return btn.id
        }
    })
}

function checkWinner(plrInput,botInput){
    if (plrInput==='plrbtn-scissors' && botInput=='paper'){
        return'pRound'
    }
    else if(plrInput==='plrbtn-paper' && botInput=='rock'){
        return'pRound'
    }
    else if(plrInput==='plrbtn-rock' && botInput=='scissors')
        return'pRound'
    else
        return'bRound'

}

function botMove(){
    let moves={0:'scissors',1:'rock',2:'paper'}
    console.log(moves[Math.ceil(Math.random()*3)-1])
    
}
botMove()
