/**
 * Created by nbosenko on 25.05.2016.
 */

function Model() {}

Model.prototype = {

    _data: null,

    requestUrl: null,
        
    getData: function() {

        var t = this;
        var deferred = $.Deferred();

        if (this._data !== null) {
            deferred.resolve(this._data);
        }

        $.get(this.requestUrl, {
            dataType: 'json'
        }).then(function (data) {
            t._data = data;
            deferred.resolve(t._data);
        });

        return deferred;
    },
    
    clearData: function() {
        this._data = null;
    }
    
};

module.exports = Model;