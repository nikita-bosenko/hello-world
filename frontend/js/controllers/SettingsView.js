/**
 * Created by nbosenko on 17.05.2016.
 */
var _ = require('lodash');
var settingsTemplate = require('../../templates/settings.html');

function Settings() {
    this.render();
}

Settings.prototype = {
    render: function() {

        var tmplSttngs = _.template(settingsTemplate);
        var resultSttngs = tmplSttngs({});
        $(resultSttngs).prependTo($('.settings'));
    }
};


module.exports = Settings;


