//#region Defines
/**
 * @typedef {Object} DropdownOption
 * @property {String|Number} value
 * @property {String} name
 * @property {Object} data
 */
/**
 * @typedef {Object} DropdownSettings
 * @property {Boolean} changeDropdownContent
 */
//#endregion


import ExBaseJSElement from "../../../base/ex-base-element.js";

export class BaseDropdownOption extends ExBaseJSElement
{
    //#region Properties
    /**
     * @type {DropdownOption}
     * @protected
     */
    _option;
    //#endregion

    //#region Static Properties
    /**
     * @type {HTMLTemplateElement}
     * @protected
     * @static
     */
    static _dropdownElementTemplate;
    /**
     * @type {Boolean}
     * @protected
     * @static
     */
    static _initialized=false;
    //#endregion

    /**
     * 
     * @param {HTMLElement|String} root 
     * @param {HTMLElement} container
     * @param {DropdownOption} option
     */
    constructor(root, container, option)
    {
        super(root, container);

        this._option=option;
        this._reactor.RegisterEventByName("OnSelect");
        BaseDropdownOption._LoadTemplate();
        if(this.constructor==BaseDropdownOption)
            this._Create();
    }

    //#region Static Methods
    static _LoadTemplate()
    {
        if(this._initialized || this!=BaseDropdownOption) return;
        this._dropdownElementTemplate=document.head.querySelector('[id="basic-dropdown"]').querySelector("template[id='dropdown-element']");
        this._initialized=true;
    }
    //#endregion

    //#region Protected Methods
    _Create()
    {
        this._root=document.importNode(BaseDropdownOption._dropdownElementTemplate.content, true).firstElementChild;
        this._root.innerText=this._option.name;
        this._root.addEventListener("click", ()=>
            this._reactor.DispatchEvent("OnSelect", {option:this._option}));

        this._container.appendChild(this._root);
    }
    //#endregion

    //#region Getters
    get option()
    {
        return this._option;
    }
    //#endregion
}