'use strict';

const Animal = require("./Animal");

export default class Cnidarian extends Animal{
	constructor(name){
	super(name, "radial");
	}
}