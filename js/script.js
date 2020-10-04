$(document).ready(function() {
    
    //activate wow.js
     new WOW().init();
  
    //activate fullpage.js
    $('#fullpage').fullpage({
      scrollBar: true,
      navigation: true,
      navigationTooltips: ['Ejercicio 1', 'Ejercicio 2', 'Ejercicio 3', 'Ejercicio 4'],
      loopBottom: true,
      sectionSelector: 'section'
    });
});