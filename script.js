document.addEventListener("DOMContentLoaded",function(){//Makes sure that the DOM is loaded before execution!
    let p=0,c=0;
    function getComputerChoice(){
        let x=Math.random(),y=Math.random(),z=Math.random();
        return x>y&&x>z?"Rock":(y>x&&y>z?"Paper":"Scissors");
    }
    let playerSelection="",computerSelection="";
    function playRound(playerSelection,computerSelection){
        if( playerSelection==="Rock"&&computerSelection==="Scissors"||
            playerSelection==="Paper"&&computerSelection==="Rock"||
            playerSelection==="Scissors"&&computerSelection==="Paper")p++;
        else if( computerSelection==="Rock"&&playerSelection==="Scissors"||
                 computerSelection==="Paper"&&playerSelection==="Rock"||
                 computerSelection==="Scissors"&&playerSelection==="Paper")c++;
    }
    const rk=document.querySelector('#rk'),pr=document.querySelector('#pr'),sr=document.querySelector('#sr');
    rk.addEventListener("click",()=>{
        playerSelection="Rock";
        computerSelection=getComputerChoice();
        playRound(playerSelection,computerSelection);
        h133.textContent=p;h135.textContent=c;
        checkEndGame();
    });
    pr.addEventListener("click",()=>{
        playerSelection="Paper";
        computerSelection=getComputerChoice();
        playRound(playerSelection,computerSelection);
        h133.textContent=p;h135.textContent=c;
        checkEndGame();
    });
    sr.addEventListener("click",()=>{
        playerSelection="Scissors";
        computerSelection=getComputerChoice();
        playRound(playerSelection,computerSelection);
        h133.textContent=p;h135.textContent=c;
        checkEndGame();
    });
    function checkEndGame(){
        if(p===5||c===5){
            const winner=p>c?"Player wins the game!":c>p?"Computer wins the game!":"It's a tie! No one wins!";
            const choice=confirm(`Game Over! ${winner}\n\nDo you want to play again?`);
            if(choice){c=0;p=0;h133.textContent=p;h135.textContent=c;}
            else window.close();
        }
    }
    const div3=document.querySelector('#div3');
    const h131=document.createElement('h2');
    h131.textContent='Score Card';
    h131.style.textAlign='left';
    h131.style.marginLeft='50px';
    h131.style.marginRight='50px';
    div3.appendChild(h131);
    const h132=document.createElement('h2');
    h132.textContent='Player Score:';
    h132.style.textAlign='left';
    h132.style.marginLeft='50px';
    h132.style.marginRight='50px';
    div3.appendChild(h132);
    const h133=document.createElement('h2');
    h133.textContent=p;
    h133.style.textAlign='left';
    h133.style.marginLeft='5px';
    h133.style.marginRight='95px';
    div3.appendChild(h133);
    const h134=document.createElement('h2');
    h134.textContent='Computer Score:';
    h134.style.textAlign='left';
    h134.style.marginLeft='50px';
    h134.style.marginRight='50px';
    div3.appendChild(h134);
    const h135=document.createElement('h2');
    h135.textContent=c;
    h135.style.textAlign='left';
    h135.style.marginLeft='5px';
    h135.style.marginRight='95px';
    div3.appendChild(h135);
});
