/**
 * Created by nbosenko on 18.05.2016.
 */

var _ = require("lodash");
var letterTemplate = require('../templates/letter.html');

function Letter() {

}

Letter.prototype = {
    render: function(id) {
        var t = this;

        this.getData(id).then(function(letterData){

            t.createHTML(letterData[id]);
            $('.inbox-toolbar').css('right',$('.text-area').outerWidth());

        });



    },

    getData: function(id) {

        var promiseOfLetter = $.getJSON('letters.json').then(function(response) {

            return response;
        });

        //ЗДЕСЬ В ЛЮБОМ СЛУЧАЕ ВЕСЬ ОТВЕТ В ПРОМИС ПОПАДАЕТ
        return promiseOfLetter;
    },

    createHTML: function(data) {

        var tmplLetter = _.template(letterTemplate);
        var resultLetter = tmplLetter({letterData: data});
        $('.letter-container').remove();
        $(resultLetter).appendTo($('.text-area'));
    }
};

module.exports = Letter;
