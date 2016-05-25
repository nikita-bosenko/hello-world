/**
 * Created by nbosenko on 16.05.2016.
 */
var SidebarCollections = require("./../models/SidebarCollections.js");
var foldersTemplate = require('../../templates/folders.html');
var View = require('./View');
var inherit = require('../utils/inherit');

function FoldersView(){

    this.selector = '.folders';
    this.template = foldersTemplate;
    this.init();
    this.model = new SidebarCollections('folders-list.json'); //создаём экземпляр модели
    
    this.render();
}

inherit(View, FoldersView);

FoldersView.prototype.init = function() {

    this.$el = $(this.selector);
    this.compiledTemplate = _.template(this.template);
};


module.exports = FoldersView;
    
