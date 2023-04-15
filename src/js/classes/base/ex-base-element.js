import { IsValid, none } from "../../libs/general.js";
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
     * @param {HTMLElement|String} container
     */
    constructor(root, container)
    {
        super(root);
        if (this.constructor === ExBaseJSElement) 
            throw new Error("Abstract classes can't be instantiated.");
        
        if(typeof container == "string")
            this._container=document.getElementById(container);
        else if(container instanceof HTMLElement)
            this._container=container;
        else if(root==null)
            none();
        else
            throw new Error("The parameter 'container' must be a string (id) or an instance of HTMLElement");

        this._AppendRoot();
    }

    //#region Protected Methods
    /**
     * Appends the root to the container if both are valid (defined and different of null).
     * @protected
     */
    _AppendRoot()
    {
        if(IsValid(this._root) && IsValid(this._container))
            this._container.appendChild(this._root);
    }
    //#endregion

    //#region Getters
    get container()
    {
        return this._container;
    }
    //#endregion
}