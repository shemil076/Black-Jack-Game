function generateCard(){
    let x = Math.floor((Math.random() *100 /7.6 )+1)
    var img = document.createElement("img")
    img.src = "images/" + x + ".png"
    img.height = "300"
    document.body.appendChild(img)
    
}