/**
 * Created by nbosenko on 17.05.2016.
 */
var SidebarCollections = require("./../models/SidebarCollections.js");
var labelsTemplate = require('../../templates/labels.html');
var View = require('./View');
var inherit = require('../utils/inherit');

function LabelsView(){

    this.selector = '.labels';
    this.template = labelsTemplate;
    this.init();
    this.model = new SidebarCollections('labels-list.json'); //создаём экземпляр модели
    this.render();
}

inherit(View, LabelsView);

LabelsView.prototype.init = function() {

    this.$el = $(this.selector);

    this.compiledTemplate = _.template(this.template);



    
};


module.exports = LabelsView;

