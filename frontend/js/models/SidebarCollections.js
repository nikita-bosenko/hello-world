/**
 * Created by nbosenko on 25.05.2016.
 */

var Model = require('./Model');
var inherit = require('../utils/inherit');
var config = require('../utils/config');

function SidebarCollections(sourceURL) {
    
    this.requestUrl = 'http://localhost:8080/data/' + sourceURL;

}

inherit(Model, SidebarCollections);


SidebarCollections.prototype.addItem = function (name) {

};

SidebarCollections.prototype.removeItem = function (name) {

};

module.exports = SidebarCollections;