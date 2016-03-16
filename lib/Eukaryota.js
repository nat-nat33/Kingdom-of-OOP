'use strict';

const LivingThing = require('./LivingThing');

export default class Eukaryota extends LivingThing{
	constructor(name, uniCellular, asexual, mobile, heterotroph){
		super(name, uniCellular, true, false, heterotroph);
		this._name = name; 
		this._uniCellular = uniCellular;
		this._asexual = asexual;
		this._mobile = mobile;
		this._heterotroph = heterotroph;
	}
get heterotroph(){
	return this._heterotroph;
}

set heterotroph(heterotroph){
	this._heterotroph = heterotroph;
}

get autotroph(){
	return !this._heterotroph;
}

set autotroph(heterotroph){
	this._heterotroph = !heterotroph;
}

}