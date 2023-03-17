import { IsValid } from "../../libs/general.js";
import BaseJSElement from "./base-element.js";

/**
 * @class
 * @abstract
 */
export default class ExBaseJSElement extends BaseJSElement
{
    /**
     * @type {HTMLElement}
     * @protected
     */
    _container;

    /**
     * 
     * @param {HTMLElement|String} root 
     * @param {HTMLElement} container
     */
    constructor(root, container)
    {
        super(root);
        if (this.constructor === ExBaseJSElement) 
            throw new Error("Abstract classes can't be instantiated.");
        this._container=container;
        if(IsValid(this._root))
            this._container.appendChild(this._root);
    }

    //#region Getters
    get container()
    {
        return this._container;
    }
    //#endregion
}