'use strict';

const Eukaryota = require("./Eukaryota");

export default class Protista extends Eukaryota{
	constructor(name, uniCellular, mobile, heterotroph){
		super(name, uniCellular, true, mobile, heterotroph);
	}
}