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
    _parent;

    /**
     * 
     * @param {HTMLElement|String} root 
     * @param {HTMLElement|String} parent
     */
    constructor(root, parent)
    {
        super(root);
        if (this.constructor === ExBaseJSElement) 
            throw new Error("Abstract classes can't be instantiated.");
        
        if(typeof parent == "string")
            this._parent=document.getElementById(parent);
        else if(parent instanceof HTMLElement)
            this._parent=parent;
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
        if(IsValid(this._root) && IsValid(this._parent))
            this._parent.appendChild(this._root);
    }

    /**@protected */
    _Create()
    {
        super._Create();
        this._AppendRoot();
    }
    //#endregion

    //#region Getters
    get parent()
    {
        return this._parent;
    }
    //#endregion
}