require('./../styles/style.css');
var Folders = require('./folders.js');
var Labels = require('./labels.js');
var LetterList = require('./lettersList.js');
var Settings = require('./settings.js');
var Letter = require('./letter.js');
var _ = require('lodash');
var $ = require('jquery');




$( document ).ready(function() {
    
      _.templateSettings = {
        evaluate: /\{\{(.+?)\}\}/g,
        interpolate: /\{\{=(.+?)\}\}/g,
        escape: /\{\{-(.+?)\}\}/g
      };

      var lettersList = new LetterList();
      var folders = new Folders();
      var labels = new Labels();
      var settings = new Settings();
      var letter = new Letter();

       folders.render();
       labels.render();
       //lettersList.render();
       settings.render();


   
        
        
    


   $('body').on('click', '.inbox-list-item', function () {
       
        $('.text-area').removeClass('hidden');
        var a = $(this).attr('id');
        letter.render(a);
   });

    $('body').on('click', '.sidebar-button', function () {
        $('.sidebar div').css('visibility', 'visible');
        $('.sidebar').css('min-width', '210px');
        $('.sidebar-button').css('visibility', 'hidden');
        
    });
    
    $('.inbox-toolbar').css('left',$('.sidebar').width());

    

});
