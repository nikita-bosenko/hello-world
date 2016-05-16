/**
 * Created by nbosenko on 16.05.2016.
 */
var _ = require('lodash');
var foldersTemplate = require('../templates/folders.html');

var folders = {

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
           // alert(foldersData[0].title);
            return foldersData;

        });
       // alert(requestResult[0]);

        return requestResult;

    },

    createHTML: function (data) {
        var tmplFldrs = _.template(foldersTemplate);
        var resultFldrs = tmplFldrs({folders: data});
        $(resultFldrs).prependTo($('.folders'));

    }

};

module.exports = folders;
    
