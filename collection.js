function Collection() {
    this.items = Array.prototype.splice.call(arguments, 0);
}

function indexOf(item) {
    var items, i, ret;

    items = this.items;
    ret = -1;

    for (i = 0; i < items.length; i++) {
        if (items[i] === item) {
            ret = i;
            break;
        }
    }

    return ret;
}

function push() {
    var newItems, items, i;

    newItems = Array.prototype.splice.call(arguments, 0);
    items    = this.items;

    for (i = 0; i < newItems.length; i++) {
        items[items.length] = newItems[i];
    }
    
    return newItems[newItems.length - 1];
}

function pop() {
    var items, newItems, i;

    items = this.items;
    newItems = [];

    for (i = 0; i < items.length - 1; i++) {
        newItems[i] = items[i];
    }

    this.items = newItems;

    return items[items.length - 1];
}

Collection.prototype = {
    get length() {
        return this.items.length;
    },

    indexOf : indexOf,
    push    : push,
    pop     : pop
};

module.exports = Collection;
