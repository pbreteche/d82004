$(document).ready(function() {
  console.log('le document est chargé');
});

$(function(){
  console.log('le ocument est chargé (syntaxe raccourcie)');
});


$(function() {
  const liensMenu = document.querySelectorAll('.menu a');

  for (const lien of liensMenu) {
    lien.addEventListener('click', function(){

    });
  }

  // équivalent du code js au dessus, avec syntaxe jQuery
  $('.menu a').click(function() {

  });

  $('.menu a').on('click', function() {

  });

  $('.subMenu').hide(); // mémorise le display et masque l'élément
  $('.subMenu').show(); // restore le display d'origine
  $('.subMenu').addClass('une-classe'); // ajoute une classe HTML
  $('.subMenu').removeClass('une-classe'); // retire une classe HTML
  $('.subMenu').toggleClass('une-classe'); // bascule une classe HTML

  $('subMenu').each((elt, index) => {
    elt.className = 'toutes les classes';
    elt.classList.add('');
    $(elt).addClass('')
  });


  $.get('mon url').then(function(data) {
    // faire quelque chose avec la data
  });

  $('.chat-box').load('url des messages');

});
