'use strict';

const Bilateral = require('./Bilateral.js');

export default class Anthropod extends Bilateral {
    constructor(name) {
    super(name, 'exoskeleton');
    }
}