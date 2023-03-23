//#region Defines
/**
 * @typedef {import("javascript-obfuscator/typings/src/types/options/TInputOptions.js").TInputOptions} TInputOptions
 */
//#endregion

import BaseJSElement from "../base/base-element.js";

export class ObfuscatorForm extends BaseJSElement
{
    /**
     * @type {TInputOptions}
     */
    _formOptions;

    /**
     * 
     * @param {HTMLElement|String} root 
     */
    constructor(root)
    {
        super(root);
    }

    //#region Protected Methods
    _Obfuscate()
    {
        this._formOptions.
    }
    //#endregion
}