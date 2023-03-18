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
 * @property {typeof ProfileDropdownOption} optionClass
 * @property {Boolean} hideIcons
 * @property {String} image
 */
//#endregion

import { IsValid, LoadTemplate } from "../../../libs/general.js";
import { BaseDropdown } from "./base-dropdown.js";
import { ProfileDropdownOption } from "./dropdown-options/profile-dropdown-option.js";

export class ProfileDropdown extends BaseDropdown
{
    //#region Elements
    /**
     * @type {HTMLImageElement}
     * @protected
     */
    _image;
    /**
     * @type {ProfileDropdownOption[]}
     * @protected
     */
    _optionElements;
    //#endregion

    //#region Properties
    /**
     * @type {DropdownSettings}
     */
    //_settings;
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
        super(root, settings, options);

        ProfileDropdown._LoadTemplates();
        if(this.constructor==ProfileDropdown)
            this._Create();
    }

    //#region Static Methods
    static _LoadTemplates()
    {
        if(this._initialized || this!=ProfileDropdown) return;
        const response=LoadTemplate("../res/templates/elements/dropdowns/profile-dropdown.html");
        if(!response) return;
        const div=document.createElement("div");
        div.id="profile-dropdown";
        div.innerHTML=response;
        document.head.appendChild(div); 
        this._dropdownTemplate=div.querySelector("template[id='dropdown']");
    }
    //#endregion

    //#region Protected Methods
    _DefaultSettings()
    {
        super._DefaultSettings();
        
        if(!IsValid(this._settings.image))
            this._settings.image="../res/img/samples/defualt-profile-img.jpg";
        if(!IsValid(this._settings.hideIcons))
            this._settings.hideIcons=false;
    }

    _Create()
    {
        const container=this._root;
        this._root=document.importNode(ProfileDropdown._dropdownTemplate.content, true).firstElementChild;
        this._dropdownButton=this._root.querySelector('button[id="dropdown-menu-button"]');
        this._dropdownButton.addEventListener("focus", ()=>this._ShowTooltip(true));
        this._dropdownButton.addEventListener("blur", ()=>this._ShowTooltip(false));
        this._dropdownList=this._root.querySelector('[id="option-list"]');
        this._popperInstance=window.App.createPopper(this._dropdownButton, this._dropdownList, {
            placement: "bottom-start"
        });
        container.appendChild(this._root);
        this.SetOptions();
        if(this._options.length>0)
            this.SetOptionByValue(this._options[0].value);
        this._image=this._root.querySelector('img[id="profile-img"]');
        this._image.src=this._settings.image;
        if(this._settings.hideIcons)
            this._optionElements.forEach(oE => {
                oE.icon.parentElement.classList.add("d-none");
            });
    }
    //#endregion

    //#region Public Methods
    /**
     * 
     * @param {String} image 
     */
    SetImage(image)
    {
        this._settings.image=image;
        this._image.src=image;
    }
    //#endregion
}