/**
 * @typedef {Object} StgSettings
 * @property {String} activeClass
 * @property {String} attributeName
 */

import { IsValid } from "../../libs/general.js";
import BaseJSElement from "../base/base-element.js";

export class SimpleToggleGroup extends BaseJSElement
{
    //#region Elements
    /**
     * @type {HTMLElement[]}
     * @protected
     */
    _innerElements=[];
    //#endregion

    //#region Properties
    /**
     * @type {StgSettings}
     * @protected
     */
    _settings;
    /**
     * @type {String|Number}
     * @protected
     */
    _selectedValue;
    //#endregion

    /**
     * 
     * @param {HTMLElement|String} root 
     * @param {StgSettings} settings 
     */
    constructor(root, settings)
    {
        super(root);

        this._settings=settings;
        this._SetDefaultSettings();
        this._reactor.RegisterEventByName("OnSelectOption");
        this._Create();
    }

    //#region Protected Methods
    _Create()
    {
        this._innerElements=this._root.querySelectorAll(`[${this._settings.attributeName}]`);
        this._innerElements.forEach(element => {
            element.addEventListener("click", (event)=>this._SetOption(event.target, true));
        });
        this.SetOptionByIndex(0);
    }

    _SetDefaultSettings()
    {
        if(!IsValid(this._settings.activeClass))
            this._settings.activeClass="active";
        if(!IsValid(this._settings.attributeName))
            this._settings.attributeName="data-value";
    }

    /**
     * 
     * @param {HTMLElement} element 
     * @param {Boolean} notify 
     */
    _SetOption(element, notify=false)
    {
        this._innerElements.forEach(el => {
            if(el===element)
                el.classList.add(this._settings.activeClass);
            else
                el.classList.remove(this._settings.activeClass);
        });
        this._selectedValue=element.getAttribute(this._settings.attributeName);

        if(notify)
            this._reactor.DispatchEvent("OnSelectOption", {value:this._selectedValue});
    }
    //#endregion

    //#region Public Methods
    /**
     * 
     * @param {String|Number} value 
     * @param {Boolean} notify
     */
    SetOptionByValue(value, notify=false)
    {
        let ele=this._innerElements.find(el=>el.getAttribute(this._settings.attributeName)==value);
        if(IsValid(ele))
            this._SetOption(ele, notify);
    }

    /**
     * 
     * @param {Number} index 
     * @param {Boolean} notify
     */
    SetOptionByIndex(index, notify=false)
    {
        if(index<0 || index>=this._innerElements.length) return;
        this._SetOption(this._innerElements[index], notify);
    }
    //#endregion

    //#region Getters
    get selectedValue()
    {
        return this._selectedValue;
    }
    //#endregion
}