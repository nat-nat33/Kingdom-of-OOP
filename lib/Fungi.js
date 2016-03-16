'use strict';

const Eukaryota = require('./Eukaryota');

export default class Fungi extends Eukaryota{
	constructor(name){
		super(name, false, true, false, true);
	}

}