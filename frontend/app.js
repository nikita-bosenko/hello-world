
require('./style.css');
var folders = require('./js/folders.js');
var content = require('./content.js');
var _ = require('lodash');
var $ = require('jquery');
module.exports = _;

$( document ).ready(function() {
  
  var labelsTemplate = require('./templates/labels.html');
  var settingsTemplate = require('./templates/settings.html');
  var lettersTemplate = require('./templates/letter_min.html');


  _.templateSettings = {
    evaluate: /\{\{(.+?)\}\}/g,
    interpolate: /\{\{=(.+?)\}\}/g,
    escape: /\{\{-(.+?)\}\}/g
  };

    

var labels = [
  {
    title: "Clients",
    color: "purple"
  },
  {
    title: "Memo",
    color: "green"
  },
  {
    title: "Family",
    color: "orange"
  },
  {
    title: "Works",
    color: "blue"
  },

  {
    title: "To Read",
    color: "red"
  }
];

  var tmplLbls = _.template(labelsTemplate);
  var resultLbls = tmplLbls({labels: labels});
  $(resultLbls).prependTo($('.labels'));

    var settings = [
        {
            address: require('./images/settings.png')
        },
        {
            address: require('./images/add.png')
        }
    ];


    var tmplSttngs = _.template(settingsTemplate);
    var resultSttngs = tmplSttngs({settings: settings});
    $(resultSttngs).prependTo($('.settings'));

    var letterMins = [
        {
            senderName: "Louis Van Gaal",
            letterSubj: "Mark my words!",
            letterPreview: "Hello! My name is Louis and I am a damn sexy motherfucker..."
        },
        {
            senderName: "Louis Van Gaal",
            letterSubj: "Mark my words!",
            letterPreview: "Hello! My name is Louis and I am a damn sexy motherfucker..."
        },
        {
            senderName: "Louis Van Gaal",
            letterSubj: "Mark my words!",
            letterPreview: "Hello! My name is Louis and I am a damn sexy motherfucker..."
        },
        {
            senderName: "Louis Van Gaal",
            letterSubj: "Mark my words!",
            letterPreview: "Hello! My name is Louis and I am a damn sexy motherfucker..."
        },
        {
            senderName: "Louis Van Gaal",
            letterSubj: "Mark my words!",
            letterPreview: "Hello! My name is Louis and I am a damn sexy motherfucker..."
        }
    ];


   var tmplLetters = _.template(lettersTemplate);
   var resultLetters = tmplLetters({letterMins: letterMins});
    $(resultLetters).appendTo($('.inbox-list'));

  

   folders.render();

});
