/**
 * Created by nbosenko on 17.05.2016.
 */
var _ = require('lodash');
var labelsTemplate = require('../templates/labels.html');

function Labels() {

}

Labels.prototype = {
    render: function () {
        var t = this;
        this.getData().then(function (data) {

            t.createHTML(data.labels);
        })
    },

    getData: function () {
        var requestResult = $.getJSON('labels.json', function (data) {
            var labelsData = [];
            for (var i = 0; i < data.labels.length; i++) {
                labelsData.push({title: data.labels[i].title, color: data.labels[i].color});
            }

            return labelsData;

        });


        return requestResult;
    },

    createHTML: function (data) {
        var tmplLbls = _.template(labelsTemplate);
        var resultLbls = tmplLbls({labels: data});
        $(resultLbls).prependTo($('.labels'));
    }
};


module.exports = Labels;