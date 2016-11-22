import { Violation } from 'validator.js';
import { isNumber, isNaN } from 'lodash';
const Rgexp = /^[0-9]*[1-9][0-9]*$/;
export default function notIntAssert() {
    /**
     * Class name.
     */

    this.__class__ = 'NotInt';

    /**
     * Validation algorithm.
     */

    this.validate = value => {
        let val = new Number(value);
        if (!isNumber(val) || isNaN(val) || !Rgexp.test(val)) {
            throw new Violation(this, value);
        }
        return true;
    };

    return this;
}