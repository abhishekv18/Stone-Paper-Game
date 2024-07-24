let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genComputer=()=>{
       const options=["rock","paper","scisscors"];
       const randIn= Math.floor(Math.random()*3);
       return options[randIn];
}

   const userScorePara=document.querySelector("#user-score");
   const compScorePara=document.querySelector("#comp-score");
const drawGame=()=>{
     msg.innerText="Game was Draw.Play again.";
     msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,copmChoice,choiceId)=>{
       if(userWin){
          userScore++;
          userScorePara.innerText=userScore;
         msg.innerText=`You Win! your ${choiceId} beats ${copmChoice}`;
         msg.style.backgroundColor="green";
       }else{
           compScore++;
           compScorePara.innerText=compScore;
          msg.innerText=`You Loose! ${copmChoice} beats your ${choiceId}`;
          msg.style.backgroundColor="red";
       }
}

const playGame=(choiceId)=>{
         const copmChoice=genComputer();
         if(choiceId===copmChoice){
             drawGame();
         }else{
             let userWin=true;
             if(choiceId==="rock"){
            userWin= copmChoice==="paper"? false:true;
             }else if(choiceId==="paper"){
                userWin= copmChoice==="sicssors"? false:true;
             }
             else{
               userWin= copmChoice==="rock"? false:true;
             }
             showWinner(userWin,copmChoice,choiceId);
         }
}
choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
          const choiceId=choice.getAttribute("id");
          playGame(choiceId);
     })
})
