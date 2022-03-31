const rollDice=x=>{
    var radnomNumber=Math.floor(Math.random()*6) + 1;
    var image=document.querySelector(x);
    console.log(image+"   "+radnomNumber)


    switch(radnomNumber){
        case 1:
           image.src="images/dice1.png"
            break;
        case 2:
           image.src="images/dice2.png"
           break;
        case 3:
           image.src="images/dice3.png"
           break;
        case 4:
           image.src="images/dice4.png"
           break;
        case 5:
           image.src="images/dice5.png"
           break;
        case 6: 
           image.src="images/dice6.png"
         break;
     }

     return radnomNumber
}



const judge=(x,y)=>{
    if(x>y) return 'Player 1 wins'
    else if(x<y) return 'PLayer 2 wins'
    else return 'Draw !'
}


var number1 = rollDice('.player1 img')

var number2 = rollDice('.player2 img')

var result = judge(number1,number2)

document.getElementsByTagName('h1')[0].textContent=result

