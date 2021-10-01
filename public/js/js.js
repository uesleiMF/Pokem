
function changeText() {

    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    
    
    if(b1.onclick="changeText();") {
        document.getElementById('pText').innerHTML = "button 1";
    }

    if(b2.onclick="changeText();") {
        document.getElementById('pText').innerHTML = "button 2";
    }

}


function changeImage(){
  var image = document.getElementById("image");
  if(image.src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlM5fl425giuv86gjsleqvjA5vL4b0Rm7twQdlr1L_6LMjiJ_KMIZcYuEJRTC3hGZy6-E&usqp=CAU"){
      image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvO6oK1GQOBNwsONpkB8FF6aGPkf1zN5RWsw&usqp=CAU";
  }
  else if(image.src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvO6oK1GQOBNwsONpkB8FF6aGPkf1zN5RWsw&usqp=CAU"){
      image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlM5fl425giuv86gjsleqvjA5vL4b0Rm7twQdlr1L_6LMjiJ_KMIZcYuEJRTC3hGZy6-E&usqp=CAU" ;
  }
}
function changeTex() {

    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    
    
    if(b1.onclick="changeTex();") {
        document.getElementById('pTex').innerHTML = "button 1";
    }

    if(b2.onclick="changeTex();") {
        document.getElementById('pTex').innerHTML = "button 2";
    }

}


function changeImg(){
  var img = document.getElementById("img");
  if(img.src === "https://www.imagensanimadas.com/data/media/1446/pokemon-imagem-animada-0032.gif"){
      img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04ac5773-e092-435a-b76f-2ef75481fde9/d4ziki8-0bd07fd6-cebd-4131-98b3-4ecdabcfb273.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA0YWM1NzczLWUwOTItNDM1YS1iNzZmLTJlZjc1NDgxZmRlOVwvZDR6aWtpOC0wYmQwN2ZkNi1jZWJkLTQxMzEtOThiMy00ZWNkYWJjZmIyNzMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GmLLsJ4sxPEL6o1cn93t4kC0-iafAkc4dpXPOVi6-Pc";
  }
  else if(img.src === "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04ac5773-e092-435a-b76f-2ef75481fde9/d4ziki8-0bd07fd6-cebd-4131-98b3-4ecdabcfb273.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA0YWM1NzczLWUwOTItNDM1YS1iNzZmLTJlZjc1NDgxZmRlOVwvZDR6aWtpOC0wYmQwN2ZkNi1jZWJkLTQxMzEtOThiMy00ZWNkYWJjZmIyNzMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GmLLsJ4sxPEL6o1cn93t4kC0-iafAkc4dpXPOVi6-Pc"){
      img.src = "https://www.imagensanimadas.com/data/media/1446/pokemon-imagem-animada-0032.gif" ;
  }
}