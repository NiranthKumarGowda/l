player1_name=localStorage.getItem("player_1")
player2_name=localStorage.getItem("player_2")
document.getElementById("player1_name").innerHTML=player1_name
document.getElementById("player2_name").innerHTML=player2_name
 player1_score=0
 player2_score=0
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="Question turn= "+player1_name
document.getElementById("player_answer").innerHTML="Answer turn= "+player2_name