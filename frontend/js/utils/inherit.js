/**
 * Created by nbosenko on 25.05.2016.
 */
function inherit(parent, child) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
   
    return child;
}

module.exports = inherit;