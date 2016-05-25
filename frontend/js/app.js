require('./../styles/style.css');
var Folders = require('./controllers/FoldersView.js');
var Labels = require('./controllers/LabelsView.js');
var LetterList = require('./controllers/LettersListView.js');
var Settings = require('./controllers/SettingsView.js');
var Letter = require('./controllers/LetterView.js');
var _ = require('lodash');
var $ = require('jquery');




$( document ).ready(function() {
    
      _.templateSettings = {
        evaluate: /\{\{(.+?)\}\}/g,
        interpolate: /\{\{=(.+?)\}\}/g,
        escape: /\{\{-(.+?)\}\}/g
      };


      var folders = new Folders();
      var labels = new Labels();
      var settings = new Settings();
      var letter = new Letter();
      var lettersList = new LetterList();

   
    
    
    
    var $body = $('body');

   $body.on('click', '.inbox-list-item', function () {
       
        $('.text-area').removeClass('hidden');
        var a = $(this).attr('id');
        letter.render(a);
   });



    $body.on('click', '.sidebar-button', function () {
        $('.sidebar').addClass('show');
        $('.sidebar-button').addClass('hidden');



    });

    $body.on('click', '.arrow', function () {
        $('.sidebar').removeClass('show');
        $('.sidebar-button').removeClass('hidden');

    });

   $( window ).resize(function() {
        if ($('body').width() > 480) {
            $('.sidebar').removeClass('show');
        }
    });


});
