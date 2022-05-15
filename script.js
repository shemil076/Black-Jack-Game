function generateCard(){
   
    let x;
    let confirm =  document.getElementById("mainResult").innerHTML;
    
    if(confirm == "You lose!"){
        alert("You lose !, Restart the game");
    }else{
        
        do{
        x = Math.floor((Math.random() *100 /7.6 )+1)
       }while(x == 0)
    
       let currentTotal = document.getElementById("result").innerHTML;
       let total = parseInt(currentTotal) + x;
    
        document.getElementById("result").innerHTML = total;
    
        if(total < 21){
            let currentTotal = document.getElementById("mainResult").innerHTML = "Do you want to generate another card?";
        }else if(total == 21){
            let currentTotal = document.getElementById("mainResult").innerHTML = "You win!";
            alert("You win!");
        }else if(total > 21){
            let currentTotal = document.getElementById("mainResult").innerHTML = "You lose!";
            alert("You lose!, Click on the restart button to play again!");
        }
    
        var img = document.createElement("img")
        img.src = "images/" + x + ".png"
        img.height = "300"
        document.body.appendChild(img)
    }

}

function restart(){
    location.reload();
}