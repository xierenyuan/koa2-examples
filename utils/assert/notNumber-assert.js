import { Violation } from 'validator.js';
import { isNumber, isNaN } from 'lodash';
export default function notNumberAssert() {
    /**
     * Class name.
     */

    this.__class__ = 'NotNumber';

    /**
     * Validation algorithm.
     */

    this.validate = value => {
        let val = new Number(value);
        console.log(val);
        if (!isNumber(val) || isNaN(val)) {
            throw new Violation(this, value);
        }
        return true;
    };

    return this;
}