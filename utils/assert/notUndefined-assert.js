import { Violation } from 'validator.js';
import { isUndefined } from 'lodash';

export default function notUndefinedAssert() {
    /**
     * Class name.
     */

    this.__class__ = 'NotUndefined';

    /**
     * Validation algorithm.
     */

    this.validate = value => {
        console.log(isUndefined(value));
        if (isUndefined(value)) {
            console.log('233 isUndefined', new Violation(this, value));
            throw new Violation(this, value);
        }
        return true;
    };

    return this;
}