function generateCard(){
   
    let x;
    do{
    x = Math.floor((Math.random() *100 /7.6 )+1)
   }while(x == 0)

   let currentTotal = document.getElementById("result").innerHTML;
   let total = parseInt(currentTotal) + x;

    document.getElementById("result").innerHTML = total;

    var img = document.createElement("img")
    img.src = "images/" + x + ".png"
    img.height = "300"
    document.body.appendChild(img)

}