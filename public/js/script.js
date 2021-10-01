var imagens = [
    "https://static8.depositphotos.com/1526816/1071/v/600/depositphotos_10714227-stock-illustration-sad-man.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiqMfF1YxaimWzB2SevhC2SNsJN7qyupFpxroHIUn2rQQ8Mb5v85n4EQp3N3fK-kOn2U&usqp=CAU",
    "https://i.pinimg.com/236x/2e/af/20/2eaf20e262d35c8a6fbc60dc0ebedf22.jpg",
    "https://i1.wp.com/emotioncard.com.br/wp-content/uploads/2016/04/c3aa55c518041fdcd1eae5304eeb9b49-sad-art-dark-quotes.jpg?resize=236%2C336&ssl=1" 
 ];
  
 function trocar(){
    var img = document.getElementById("Deus");
    var img_src = img.src;
    var img_idx = imagens.indexOf(img_src);
    img.src = imagens[ img_idx == imagens.length-1 ? 0 : img_idx+1 ];
 } 

 var fotos = [
    "https://freepikpsd.com/media/2019/10/pessoa-feliz-desenho-png.png",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT8YqGdPY9x-12cik0pUyB2uG_b1LJc-PGCA&usqp=CAU",
    "https://img1.gratispng.com/20180823/rvy/kisspng-businessperson-company-small-business-paper-organi-telegram-amp-q-5b7f524394be85.7261299615350707876093.jpg",
    "https://1.bp.blogspot.com/-Zy373Hbq0Yw/WFBw6GV9NeI/AAAAAAAAAwg/0izRl9wlBa8jaVlG8ca4qMznhW7EHb8QQCLcB/s1600/atitude-mulher-feliz.jpg"
 ];
  
 function mudar(){
    var img = document.getElementById("Jesus");
    var img_src = img.src;
    var img_idx = fotos.indexOf(img_src);
    img.src = fotos[ img_idx == fotos.length-1 ? 0 : img_idx+1 ];
 } 
 

 
 