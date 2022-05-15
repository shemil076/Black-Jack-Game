function generateCard(){
    let x;
    do{
    x = Math.floor((Math.random() *100 /7.6 )+1)
   }while(x == 0)
    var img = document.createElement("img")
    img.src = "images/" + x + ".png"
    img.height = "300"
    document.body.appendChild(img)

}