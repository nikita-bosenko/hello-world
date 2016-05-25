/**
 * Created by nbosenko on 25.05.2016.
 */
function View() {}

View.prototype = {
    
    selector: null,
    
    template: null,

    //sourceURL: null,

    init: function () {

        this.$el = $(this.selector);
        this.compiledTemplate = _.template(template);
    },
    
    createHTML: function (data) {
        var t = this;
        var result = t.compiledTemplate({data: data});
        $(result).appendTo(this.$el);
    },
    
    render: function () {
        var t = this;
        this.model.getData().then(function(data) {
        
            t.createHTML(data)
        });
    }
};
module.exports = View;