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
 * @property {typeof BaseDropdownOption} optionClass
 */
//#endregion

import { IsValid, LoadTemplate } from "../../../libs/general.js";
import BaseJSElement from "../../base/base-element.js";
import { BaseDropdownOption } from "./dropdown-options/base-dropdown-option.js";

export class BaseDropdown extends BaseJSElement
{
    //#region Elements
    /**
     * @type {HTMLButtonElement}
     * @protected
     */
    _dropdownButton;
    /**
     * @type {HTMLElement}
     * @protected
     */
    _dropdownList;
    /**
     * @type {BaseDropdownOption[]}
     * @protected
     */
    _optionElements=[];
    /**
     * @type {import("@popperjs/core/lib/types.js").Instance}
     * @protected
     */
    _popperInstance;
    //#endregion

    //#region Properties
    /**
     * @type {DropdownSettings}
     * @protected
     */
    _settings;
    /**
     * @type {DropdownOption[]}
     * @protected
     */
    _options=[];
    /**
     * @type {typeof BaseDropdownOption}
     * @protected
     */
    DropdownElementClass;
    /**
     * @type {DropdownOption}
     * @protected
     */
    _selectedOption;
    //#endregion

    //#region Static Properties
    /**
     * @type {HTMLTemplateElement}
     * @protected
     * @static
     */
    static _dropdownTemplate;
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
     * @param {DropdownSettings} settings
     * @param {DropdownOption[]} options
     */
    constructor(root, settings, options)
    {
        super(root);

        BaseDropdown._LoadTemplates();
        this._settings=settings;
        this._options=options;
        this._DefaultSettings();
        this.DropdownElementClass=this._settings.optionClass;
        this._settings.optionClass=undefined;
        this._reactor.RegisterEventByName("OnSelectOption");
        if(this.constructor==BaseDropdown)
            this._Create();
    }

    //#region Static Methods
    /**
     * @static
     * @protected
     */
    static _LoadTemplates()
    {
        if(this._initialized || this!=BaseDropdown) return;
        const response=LoadTemplate("../res/templates/elements/dropdowns/base-dropdown.html");
        if(!response) return;
        const div=document.createElement("div");
        div.id="basic-dropdown";
        div.innerHTML=response;
        document.head.appendChild(div); 
        this._dropdownTemplate=div.querySelector("template[id='dropdown']");
    }
    //#endregion

    //#region Protected Methods
    /**
     * @protected
     */
    _DefaultSettings()
    {
        var wasInvalid=!IsValid(this._settings);
        if(wasInvalid)
            this._settings={};

        if(wasInvalid || !IsValid(this._settings.changeDropdownContent))
            this._settings.changeDropdownContent=true;
        if(wasInvalid || !IsValid(this._settings.optionClass))
            this._settings.optionClass=BaseDropdownOption;
    }

    /**
     * @protected
     */
    _Create()
    {
        const container=this._root;
        this._root=document.importNode(BaseDropdown._dropdownTemplate.content, true).firstElementChild;
        this._dropdownButton=this._root.querySelector('button[id="dropdown-menu-button"]');
        this._dropdownButton.addEventListener("focus", ()=>this._ShowTooltip(true));
        this._dropdownButton.addEventListener("blur", ()=>this._ShowTooltip(false));
        this._dropdownList=this._root.querySelector('[id="option-list"]');
        this._popperInstance=window.App.createPopper(this._dropdownButton, this._dropdownList, {
            placement: "auto"
        });
        console.log(this._popperInstance);
        container.appendChild(this._root);
        this.SetOptions();
        if(this._options.length>0)
            this.SetOptionByValue(this._options[0].value);
    }

    /**
     * 
     * @param {Boolean} show 
     */
    _ShowTooltip(show)
    {
        if(show)
        {
            this._dropdownList.classList.add('show');
            this._root.classList.add("show");
        }
        else
        {
            this._dropdownList.classList.remove('show');
            this._root.classList.remove("show");
        }

        // We need to tell Popper to update the tooltip position
        // after we show the tooltip, otherwise it will be incorrect
        this._popperInstance.update();
    }

    /**
     * 
     * @param {DropdownOption} option 
     */
    _OnSelectOption(option)
    {
        if(this._settings.changeDropdownContent)
            this._dropdownButton.innerText=option.name;

        this._selectedOption=option;
        this._ShowTooltip(false);
        this._reactor.DispatchEvent("OnSelectOption", {option});
    }
    //#endregion

    //#region Public Methods
    /**
     * 
     * @param {DropdownOption[]} options 
     */
    SetOptions(options=null)
    {
        if(IsValid(options))
            this._options=options;

        this._dropdownList.innerHTML=null;
        this._optionElements=[];
        this._options.forEach(option => {
            let optEl=new this.DropdownElementClass(null, this._dropdownList, option);
            this._optionElements.push(optEl);
            optEl.reactor.AddEventListener("OnSelect", (event)=>this._OnSelectOption(event.option));
        });
    }

    /**
     * 
     * @param {String|Number} value 
     * @param {Boolean} notify 
     */
    SetOptionByValue(value, notify=false)
    {
        let op=this._options.find((opt)=>opt.value=value);
        if(!IsValid(op)) return;
        this._selectedOption=op;
        if(notify)
            this._OnSelectOption(op);
    }
    //#endregion

    //#region Getters
    get selectedOption()
    {
        return this._selectedOption;
    }
    //#endregion
}