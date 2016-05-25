/**
 * Created by nbosenko on 24.05.2016.
 */
var Model = require('./Model');
var inherit = require('../utils/inherit');

function LettersCollection() {
    this.requestUrl = 'http://localhost:8080/data/letters-list.json';
}

inherit(Model, LettersCollection);


LettersCollection.prototype.getFolder = function (name) {
    if (!this._data) {
        alert('');
    }
    return  _.filter(this._data, { folder: name });
};

module.exports = LettersCollection;

/*
*/
