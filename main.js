const persButtn=document.querySelectorAll('.Pbuttons button')
const persImage=document.querySelector('#user')
const drawImage=document.querySelector('#draw')
const botImage=document.querySelector('#bot')
const emptyFigure=document.querySelector('#plhFrame')
const endScreen=document.querySelector('#end-screen')
const resetBtn=document.querySelector('#reset')
const botBtn=document.querySelectorAll('.Abuttons div')
const botScore=document.querySelector('#bScore')
const playerScore=document.querySelector('#pScore')
// let timerElement=document.querySelector('#timer')
// let time=99
let gameScore=[0,0]
console.log(botBtn)
function setButtonStatus(){
    persButtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        //remove active and re-add active class
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
function getBotMove(){
    let moves={0:'scissors',1:'rock',2:'paper'}
    return(moves[Math.floor(Math.random()*3)])
    
}
function setBotMove(move){
    botBtn.forEach((b)=>b.classList.remove('active-bot'))
    botBtn.forEach((btn)=>{
        if(move===btn.id){
            btn.classList.add('active-bot')
        }
    })
}
//add class hidden to image frame, clarify who won the round
function setFigure(res=''){
    if (res ==='pRound'){
        persImage.classList.remove('hidden')
        botImage.classList.add('hidden')
        drawImage.classList.add('hidden')
    }
    else if(res==='bRound'){
        botImage.classList.remove('hidden')
        persImage.classList.add('hidden')
        drawImage.classList.add('hidden')
    }
    else if(res==='draw'){
        drawImage.classList.remove('hidden')
        persImage.classList.add('hidden')
        botImage.classList.add('hidden')
    }
    else{
        botImage.classList.contains('hidden')?'':botImage.classList.add('hidden')
        persImage.classList.contains('hidden')?'':persImage.classList.add('hidden')
        drawImage.classList.contains('hidden')?'':persImage.classList.add('hidden')
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


function changeScore(score,res=''){
    if (res==='pRound'){
        score[0]+=1
        playerScore.textContent=score[0]
    }
    else if(res === 'bRound'){
        score[1]+=1
        botScore.textContent=score[1]
    }
    else if(res ==='draw'){
        //pass
        //when draw do something with score
    }
    else{
        playerScore.textContent=score[0]
        botScore.textContent=score[1]
    }
    
}
function resetRound(cnd){
    persButtn.forEach((btn)=>{
        if (btn.classList.contains('active')){
            btn.classList.remove('active');
        }
        setFigure()
    })
}
function resetGame(){
    gameScore=[0,0]
    changeScore(gameScore)
    resetRound()
    endScreen.classList.add('hidden')
    endScreen.classList.remove('on-top')
    
}

function playRound(){
    const playerChoice=getButtonStatus()
    const botChoice=getBotMove()
    let res = getWinner(playerChoice,botChoice)
    setBotMove(botChoice)
    setFigure(res)
    changeScore(gameScore,res)
    console.log(botChoice)
    //check condition to reset game
    if(gameScore.includes(5)){
        endScreen.classList.remove('hidden')
        endScreen.classList.add('on-top')
        resetBtn.addEventListener('click',resetGame)
   }

    }
function game(){
   setButtonStatus()
   persButtn.forEach((btn)=>{
    btn.addEventListener('click',playRound)
   })
   
}
game()
