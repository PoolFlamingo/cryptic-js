import { none } from "../../libs/general.js";
import { Reactor } from "../global/reactor.js";
import Translate from "../global/translation.js";

/**
 * @class
 * @abstract
 */
export default class BaseJSElement
{
    //#region Elements
    /**
     * @type {HTMLElement}
     * @protected
     */
    _root;
    //#endregion

    //#region Properties
    /**
     * @type {Reactor}
     * @protected
     */
    _reactor;
    //#endregion

    /**
     * 
     * @param {HTMLElement|String} root 
     */
    constructor(root)
    {
        if (this.constructor === BaseJSElement) 
            throw new Error("Abstract classes can't be instantiated.");

        if(typeof root == "string")
            this._root=document.getElementById(root);
        else if(root instanceof HTMLElement)
            this._root=root;
        else if(root==null)
            none();
        else
            throw new Error("The parameter 'root' must be a string (id) or an instance of HTMLElement");

        this._reactor=new Reactor();
    }

    //#region Static Methods
    /**
     * 
     * @param {String} id 
     * @param {String} content 
     * @returns {HTMLElement}
     * @protected
     */
    static _SetTemplateOnDocument(id, content)
    {
        const div=document.createElement("div");
        div.id=id;
        div.innerHTML=content;
        document.head.appendChild(div);
        return div;
    }
    //#endregion

    //#region Protected Methods
    /**@protected */
    _UpdateTrans()
    {
        Translate.UpdateTrans(this._root);
    }
    //#endregion

    //#region Public Methods
    /**
     * Removes the element visually. If you want a full deletion, you have to destroy all 
     * references to this object.
     */
    Remove()
    {
        this._root.outerHTML=null;
    }
    //#endregion

    //#region Getters
    get root()
    {
        return this._root;
    }

    get reactor()
    {
        return this._reactor;
    }
    //#endregion
}