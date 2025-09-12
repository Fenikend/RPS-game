let persButtn=document.querySelectorAll('button.figure')
let persImage=document.querySelector('#user')
let botImage=document.querySelector('#bot')
let emptyFigure=document.querySelector('#plhFrame')
// let timerElement=document.querySelector('#timer')
// let time=99
let gameScore=[0,0]

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
    if (res ==='pRound'){
        persImage.classList.remove('hidden')
        botImage.classList.add('hidden')
    }
    else if(res==='bRound'){
        botImage.classList.remove('hidden')
        persImage.classList.add('hidden')
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
function changeScore(score,res){
    if (res==='pRound'){
        score[0]+=1
    }
    if(res === 'bRound'){
        score[1]+=1
    }
    console.log(score)
}
function resetRound(cnd){
    persButtn.forEach((btn)=>{
        if (btn.classList.contains('active')){
            btn.classList.remove('active');
        }
        setFigure()
    })
}
//add timer to the game
// function checkTimer(){
//     let cond=getButtonStatus()
//     timerElement.textContent='00:0'+Math.floor(time/10);
//     if (cond){
//          stopTimer()
//         time=0
//     }
//     if(time===0){
//         time=0
//         stopTimer()
//     }
// }
// function stopTimer(){
//     clearInterval(myInterval)
// }
function done(res){
    return res
}
function playRound(){
    const playerChoice=getButtonStatus()
    const botChoice=getBotMove()
    let res = getWinner(playerChoice,botChoice)
    setFigure(res)
    changeScore(gameScore,res)
    console.log(res)
    
    }
function game(){
   setButtonStatus()
   persButtn.forEach((btn)=>{
    btn.addEventListener('click',playRound)
   }
   )
}
game()
