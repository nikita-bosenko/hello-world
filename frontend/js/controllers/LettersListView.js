/**
 * Created by nbosenko on 17.05.2016.
 */

var LettersCollection = require("./../models/LettersCollection.js");
var lettersListTemplate = require('../../templates/letter_miniature.html');
var View = require('./View');
var inherit = require('../utils/inherit');



function LetterListView(){

    this.selector = '.inbox-list';
    this.template = lettersListTemplate;
    this.init();
    this.model = new LettersCollection(); //создаём экземпляр модели
    this.render();

}

inherit(View, LetterListView);

LetterListView.prototype.init = function () {

        this.$el = $(this.selector);
        this.compiledTemplate = _.template(this.template);

};

module.exports = LetterListView;





























/* Как было _________________________

render: function() {
    var t = this;
    /*var t = this;
     this.getData().then(function(data){
     t.createHTML(data);
     //TODO move to a separate js

     });*/


    //this.createHTML(this.getData());


    /*lettersCollection.getFolder("inbox").then(function(data){
     t.createHTML(data);
     $('.letters-amount').text("All inboxes (" + (1 + Object.keys(data).length) + ")");
     })*/

   /* this.model.getData().then(function(data) {
        console.log(data);
    });

},


update: function (data) {

    this.compiledTemplate({data: data})
},

createHTML: function(data) {

    var tmplLetters = _.template(lettersListTemplate);
    var resultLetters = tmplLetters({data: data});
    $(resultLetters).appendTo(this.$el);



}

*/











