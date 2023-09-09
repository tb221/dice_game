function myFunction() {
  var dice_number1 = Math.floor(Math.random() * 6) + 1;

  var img_src1;
  if (dice_number1 === 1) {
    img_src1 = document.querySelector("#img-1");
    img_src1.src = "./images/dice1.png";
  } else if (dice_number1 === 2) {
    img_src1 = document.querySelector("#img-1");
    img_src1.src = "./images/dice2.png";
  } else if (dice_number1 === 3) {
    img_src1 = document.querySelector("#img-1");
    img_src1.src = "./images/dice3.png";
  } else if (dice_number1 === 4) {
    img_src1 = document.querySelector("#img-1");
    img_src1.src = "./images/dice4.png";
  } else if (dice_number1 === 5) {
    img_src1 = document.querySelector("#img-1");
    img_src1.src = "./images/dice5.png";
  } else if (dice_number1 === 6) {
    img_src1 = document.querySelector("#img-1");
    img_src1.src = "./images/dice6.png";
  }

  var dice_number2 = Math.floor(Math.random() * 6) + 1;
  var img_src2;
  if (dice_number2 === 1) {
    img_src2 = document.querySelector("#img-2");
    img_src2.src = "./images/dice1.png";
  } else if (dice_number2 === 2) {
    img_src2 = document.querySelector("#img-2");
    img_src2.src = "./images/dice2.png";
  } else if (dice_number2 === 3) {
    img_src2 = document.querySelector("#img-2");
    img_src2.src = "./images/dice3.png";
  } else if (dice_number2 === 4) {
    img_src2 = document.querySelector("#img-2");
    img_src2.src = "./images/dice4.png";
  } else if (dice_number2 === 5) {
    img_src2 = document.querySelector("#img-2");
    img_src2.src = "./images/dice5.png";
  } else if (dice_number2 === 6) {
    img_src2 = document.querySelector("#img-2");
    img_src2.src = "./images/dice6.png";
  }
  if(dice_number1 === dice_number2){
    document.querySelector("#heading-1").innerHTML = "Hurray!!!";
    document.querySelector("#heading-2").innerHTML = "No One Wins Please Try Again!!!";
  }
  else if(dice_number1 > dice_number2){
    document.querySelector("#heading-1").innerHTML = "Hurray!!!";
    document.querySelector("#heading-2").innerHTML = "Player1 Wins!!!";
  }
  else if(dice_number1 < dice_number2){
    document.querySelector("#heading-1").innerHTML = "Hurray!!!";
    document.querySelector("#heading-2").innerHTML = "Player2 Wins!!!";
  }
}
