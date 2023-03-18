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

import { BaseDropdownOption } from "./base-dropdown-option.js";

export class ProfileDropdownOption extends BaseDropdownOption
{
    //#region Elements
    /**
     * @type {HTMLImageElement}
     * @protected
     */
    _icon;
    /**
     * @type {HTMLElement}
     * @protected
     */
    _text;
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
        super(root, container, option);

        ProfileDropdownOption._LoadTemplate();
        if(this.constructor==ProfileDropdownOption)
            this._Create();
    }

    //#region Static Methods
    static _LoadTemplate()
    {
        if(this._initialized || this!=ProfileDropdownOption) return;
        this._dropdownElementTemplate=document.head.querySelector('[id="profile-dropdown"]').querySelector("template[id='dropdown-element']");
        this._initialized=true;
    }
    //#endregion

    //#region Protected Methods
    _Create()
    {
        this._root=document.importNode(ProfileDropdownOption._dropdownElementTemplate.content, true).firstElementChild;
        this._root.addEventListener("click", ()=>
            this._reactor.DispatchEvent("OnSelect", {option:this._option}));

        this._icon=this._root.querySelector('img[id="option-img"]');
        this._icon.src=this.option.data.icon;
        this._text=this._root.querySelector('[id="option-text"]');
        this._text.innerText=this.option.name;
        this._container.appendChild(this._root);
    }
    //#endregion

    //#region Getters
    get option()
    {
        return this._option;
    }

    get icon()
    {
        return this._icon;
    }
    //#endregion
}