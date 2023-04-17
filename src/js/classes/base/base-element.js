//#region Defines
/**
 * @typedef {Object} TemplateData
 * @property {String} path
 * @property {String} div_id
 * @property {String} id
 */
//#endregion

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

    //#region Static Properties
    /**
     * @type {HTMLTemplateElement}
     * @protected
     */
    static _template=null;
    /**
     * @type {Boolean}
     * @protected
     */
    static _initialized=false;
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

    /**@protected */
    _Create()
    {
        this._root=document.importNode(this.template.content, true).firstElementChild;

        setTimeout(() => {
            Translate.UpdateTrans(this._root);
        }, 16);
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

    /**
     * 
     * @param {Boolean} show 
     */
    Show(show)
    {
        if(show)
            this._root.classList.remove("d-none");
        else
            this._root.classList.add("d-none");
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

    /**@protected */
    get template()
    {
        return BaseJSElement._template;
    }
    //#endregion
}