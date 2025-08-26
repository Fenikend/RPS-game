const fig ={'paper':0,'rock':1,'scissors':2};

function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    return choice;
}
function getHumanChoice(){
   let choice=prompt('Please write which figure you choose :')
   if (choice===null){
        return 'end game'
   }
   if (choice.toLowerCase()  in fig){
        return fig[choice.toLowerCase()]
   }
   else{
        return choice
   } 
   
}
function playRound(playerChoice,computerChoice){
    if(playerChoice==0 && computerChoice==1){
        return 'player';
    }
    else if(playerChoice==1 && computerChoice==2){
        return 'player';
    }
    else if(playerChoice ==2 && computerChoice==0){
        return 'player';
    }
    else if(playerChoice=== computerChoice){
        return 'draw'
    }
    else{
        return 'computer';
    }
}

function main(){
    let score=[0,0];
    let turn=0;
    let res;
    while (true){
        turn++
        console.log('Turn:'+turn)
        if (getHumanChoice()=='end game'){
            console.log('Game ended');
            return 0
        }
        res=playRound(getHumanChoice(),getComputerChoice());
        if (res=='player'){
            score[0]+=1
            console.log('You won this round')
        }
        else if (res == 'computer'){
            score[1]+=1
            console.log('Computer won this round')
        }
        else{
            continue
        }
        if (turn==10 || score.includes(5)){
            break
        }
    }
    if (score[0]==score[1]){
        console.log('Draw')
    }
    else if(score[0]>score[1]){
        console.log('Player won')
    }
    else{
        console.log('Computer won')
    }
    
    
}
main()