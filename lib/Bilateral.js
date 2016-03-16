'use strict';

const Animal = require("./Animal");

export default class Bilateral extends Animal{
	constructor(name, body){
	super(name, "bilateral", "vertebral-column");
	this._body = body;
	}


get body(){
	return this._body;
}

set body(body){
	this._body = body;
}

}