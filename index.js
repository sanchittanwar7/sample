$(function(){
  $('.b-slogan__button-play').magnificPopup({
    //delegate: '.b-slogan__url', // child items selector, by clicking on it popup will open
    type: 'iframe',
    tLoading: 'Loading video #%curr%...',
    modal:false,
    markup: '<div class="mfp-iframe-scaler">'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', 
    callbacks:{
      open: function(){
        $('.mfp-close').remove();//удаление старой кнопки
        $('<button title="" type="button" class="mfp-close"></button>').appendTo('.mfp-container');
        //var content = $(".mfp-iframe");
      }
    }
  });
});



function goTo(value){
  // console.log(value.href.split('#')[1]);
  tagName = value.href.split('#')[1];
  var tag = document.getElementsByTagName('div');
  // console.log(tag);
  // console.log(tag[0].baseURI/*split('#')[1]*/);
  for(var i=0;i<tag.length;i++){
    if(tag[i].id == tagName){
      tagName = tag[i];
      break;
    }
  }
  pos = tagName.getBoundingClientRect();
  // console.log(pos.top);
  var currentY = window.scrollY;
  var finalY = pos.top;
  var delta = (currentY - finalY)/100;
  number = setInterval(function(){
    currentY = currentY - delta;
    window.scrollTo(0,currentY);
    mod = currentY-finalY;
    if(mod<0){
      mod = mod*(-1);
    }
    if(mod <= 1)
      clearInterval(number);
  },5);
}


