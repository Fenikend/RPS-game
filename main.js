let persButtn=document.querySelectorAll('button')
let persImage=document.querySelector('#user')
let botImage=document.querySelector('#bot')
let emptyFigure=document.querySelector('#plhFrame')
let timerElement=document.querySelector('#timer')
let time=99

function setButtonStatus(){
    persButtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        persButtn.forEach((b)=>b.classList.remove('active'))
        btn.classList.add('active');
    })
    
})
}

function getButtonStatus(){
        for (let btn of persButtn){
            if (btn.classList.contains('active')){
                return btn.id.split('-')[1]
            }
            
        }
    }``

function setFigure(res=''){
    timerElement.classList.add('hidden')
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
    if(plrInput===botInput){
        return 'draw'
    }
    else if (plrInput==='scissors' && botInput=='paper'){
        return'pRound'
    }
    else if(plrInput==='paper' && botInput=='rock'){
        return'pRound'
    }
    else if(plrInput==='rock' && botInput=='scissors'){
        return'pRound'}
    else{
        return'bRound'}

}

function getBotMove(){
    let moves={0:'scissors',1:'rock',2:'paper'}
    return(moves[Math.ceil(Math.random()*3)-1])
    
}
function addScore(){

}
function resetRound(cnd){
    persButtn.forEach((btn)=>{
        if (btn.classList.contains('active')){
            btn.classList.remove('active');
        }
        setFigure('')
    })
}

function checkTimer(){
    let cond=getButtonStatus()
    timerElement.textContent='00:0'+Math.floor(time/10);
    if (cond){
         stopTimer()
        time=0
    }
    if(time===0){
        time=0
        stopTimer()
    }
}
function stopTimer(){
    clearInterval(myInterval)
}
function done(res){
    return res
}
function main(){
   setButtonStatus()
   time=99
   myInterval = setInterval(() => {
        checkTimer(time)
        time--

        if (time === 0 || getButtonStatus()) {
            let playerMove = getButtonStatus()
            let botMove = getBotMove()
            let res = getWinner(playerMove, botMove)
            setFigure(res)   // you had 'res' as string
            console.log(res)
            clearInterval(myInterval)
          
        }
    }, 100)
    
    
}
function game(){
    
    let round=0;
    let results=[0,0]
    
    
}
game()
