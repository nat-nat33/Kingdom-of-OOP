'use strict';

const LivingThing = require('./LivingThing');

export default class Bacteria extends LivingThing{
	constructor(name){
		super(name, true, false, false, true, false);
	}
}