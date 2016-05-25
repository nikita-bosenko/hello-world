/**
 * Created by nbosenko on 18.05.2016.
 */

var _ = require("lodash");
var letterTemplate = require('../../templates/letter.html');

function Letter() {
    
    this._data = null;
}

Letter.prototype = {
    render: function(id) {
        var t = this;

        this.getData(id).then(function(letterData){

            t.createHTML(letterData[id]);
           

        });



    },

    getData: function(id) {

        /*var promiseOfLetter = $.getJSON('letters.json').then(function(response) {

            return response;
        });
        return promiseOfLetter;*/
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

        var tmplLetter = _.template(letterTemplate);
        var resultLetter = tmplLetter({letterData: data});
        $('.letter-container').remove();
        $(resultLetter).appendTo($('.text-area'));
    }
};

module.exports = Letter;
