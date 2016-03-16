'use strict';

const Eukaryota = require("./Eukaryota");

export default class Plant extends Eukaryota{
	constructor(name){
	super(name, false, true, false, false);
	}
}