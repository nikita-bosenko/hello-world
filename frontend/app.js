
require('./style.css');
var content = require('./content.js');
var _ = require('lodash');
var $ = require('jquery');

$( document ).ready(function() {
  var foldersTemplate = require('./templates/folders.html');
  var labelsTemplate = require('./templates/labels.html');
  var settingsTemplate = require('./templates/settings.html');


  _.templateSettings = {
    evaluate: /\{\{(.+?)\}\}/g,
    interpolate: /\{\{=(.+?)\}\}/g,
    escape: /\{\{-(.+?)\}\}/g
  };




   $.getJSON('folders.json', function(data) {
       debugger;
        _.forEach(data, function(key, val) {

        });
    });


    /*[
    {
    title: "Inbox",
    address: require('./images/inbox.png')
    },
    {
    title: "Starred",
    address: require('./images/starred.png')
    },
    {
    title: "Draft",
    address: require('./images/draft.png')
    },
    {
    title: "Sent Mail",
    address: require('./images/sent_mail.png')
    },
    {
    title: "Trash",
    address: require('./images/trash.png')
    }
                    ];*/


  /*var tmplFldrs = _.template(foldersTemplate);
  var resultFldrs = tmplFldrs({folders: folders});
  $(resultFldrs).prependTo($('.folders'));*/



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


});

