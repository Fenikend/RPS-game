let persButtn=document.querySelectorAll('button')
let persImage=document.querySelector('#user')
let botImage=document.querySelector('#bot')
let emptyFigure=document.querySelector('#plhFrame')

function setButtonStatus(){
    persButtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        persButtn.forEach((b)=>b.classList.remove('active'))
        btn.classList.add('active')
        console.log(getButtonStatus())
    })
    
})
}

function getButtonStatus(){
        for (let btn of persButtn){
            if (btn.classList.contains('active')){
                return btn.id.split('-')[1]
            }
            
        }
    }

function setFigure(res){
    if (res ==='pRound'){
        persImage.classList.remove('hidden')
    }
    else if(res==='bRound'){
        botImage.classList.remove('hidden')
    }
    else{
        botImage.classList.contains('hidden')?'':botImage.classList.add('hidden')
        persImage.classList.contains('hidden')?'':persImage.classList.add('hidden')
    }
    }

function getWinner(plrInput,botInput){
    if (plrInput==='plrbtn-scissors' && botInput=='paper'){
        return'pRound'
    }
    else if(plrInput==='plrbtn-paper' && botInput=='rock'){
        return'pRound'
    }
    else if(plrInput==='plrbtn-rock' && botInput=='scissors'){
        return'pRound'}
    else{
        return'bRound'}

}

function getBotMove(){
    let moves={0:'scissors',1:'rock',2:'paper'}
    return(moves[Math.ceil(Math.random()*3)-1])
    
}
function resetRound(cnd){
    persButtn.forEach((btn)=>{
        if (btn.classList.contains('active')){
            btn.classList.remove('active')
        }
        
    })
}
setButtonStatus()

