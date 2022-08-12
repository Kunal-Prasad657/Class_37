class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    //write code to change the background color here
  background("yellow")
    //write code to show a heading for showing the result of Quiz
text("The Result",200,40)
    //call getContestantInfo( ) here
    if(allContestant !== undefined){
      fill ("Blue")
      textSize(20)
      text("Note:Contestant who win is highlighted in green color",50,20);
    }

    //write condition to check if contestantInfor is not undefined
    for(var plr in allContestants){ debugger; var correctAns = "2"; if (correctAns === allContestants[plr].answer)
     fill("Green")
     else{
       fill("red")
     }
    }
    //write code to add a note here
    display_Answers+=30;
     textSize(20);
      text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
    //write code to highlight contest who answered correctly
    
  }

}
