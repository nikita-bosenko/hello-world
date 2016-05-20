/**
 * Created by nbosenko on 17.05.2016.
 */
var _ = require("lodash");
var $ = require("jquery");
var lettersListTemplate = require('../templates/letter_min.html');


function LetterList(){
    this._data = null;
    this.render();
}

LetterList.prototype = {
    render: function() {
    var t = this;
    this.getData().then(function(data){

        t.createHTML(data);


    });
},
    getData: function() {
        var t = this;
        var deferred = $.Deferred();

        if(this._data !== null) {

            deferred.resolve(this._data);
        }


        $.getJSON('letters.json').then(function (data) {

            t._data = data;
            deferred.resolve(t._data);

        });

        return deferred;

    },
    createHTML: function(data) {
        var tmplLetters = _.template(lettersListTemplate);
        var resultLetters = tmplLetters({data});
        $(resultLetters).appendTo($('.inbox-list'));
    }
};

module.exports = LetterList;








/*var lettersList = {

    render: function() {
        var t = this;
        this.getData().then(function(data){

            t.createHTML(data);


        });


    },

    getData: function() {
        var t = this;
        var deferred = $.Deferred();

        if(this._data !== null) {

            deferred.resolve(this._data);
        }


        $.getJSON('letters.json').then(function (data) {

            t._data = data;
            deferred.resolve(t._data);

        });

        return deferred;



    },

    createHTML: function(data) {
        
        var tmplLetters = _.template(lettersListTemplate);
        var resultLetters = tmplLetters({data});
        $(resultLetters).appendTo($('.inbox-list'));
    },



    _data: null

};



module.exports = lettersList;*/

