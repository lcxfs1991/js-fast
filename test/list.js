"use strict";

const path = require('path'),
	  List = require('../data-structure/list');

describe.only("List", function() {
    let list = new List();
	it("append", function() {
        list.append(1);
        list.append(2);
        list.append(3);
        console.log(list.toString());
        // list.clear();
        // console.log(list.dataStore);

        list.replace(2, 20);
        console.log(list.dataStore);
	});
});
