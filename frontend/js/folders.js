/**
 * Created by nbosenko on 16.05.2016.
 */
var _ = require('lodash');
var foldersTemplate = require('../templates/folders.html');

function Folders(){

}

Folders.prototype = {
    render: function () {
        var t = this;
        this.getData().then(function (data) {

            t.createHTML(data.folders);
        })

    },

    getData: function () {

        var requestResult = $.getJSON('folders.json', function (data) {
            var foldersData = [];
            for (var i = 0; i < data.folders.length; i++) {
                foldersData.push({title: data.folders[i].title, address: data.folders[i].address});
            }

            return foldersData;

        });


        return requestResult;

    },

    createHTML: function (data) {
        var tmplFldrs = _.template(foldersTemplate);
        var resultFldrs = tmplFldrs({folders: data});
        $(resultFldrs).prependTo($('.folders'));

    }
};


module.exports = Folders;
    
