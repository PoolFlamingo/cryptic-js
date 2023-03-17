//#region Defines
/**
 * @typedef {Object} MenuButton
 * @property {String} title
 * @property {String} image
 * @property {String} color
 * @property {()=>{}} callback
 */
/**
 * @typedef {Object} MenuGroup
 * @property {String} title
 * @property {MenuButton[]} menuButtons
 */
//#endregion

import { EnableRippleEffect } from "../../../../../res/theme/lava-lamp/js/src/libs/md-lib.js";
import { IsValid, SendHttpRequest } from "../../../libs/general.js";
import BaseJSElement from "../../base/base-element.js";
import ExBaseJSElement from "../../base/ex-base-element.js";

export class SideMenu extends BaseJSElement
{
    //#region Elements
    //#endregion

    //#region Properties
    /**
     * @type {MenuGroup[]}
     * @protected
     */
    _menuGroups;
    /**
     * @type {MenuGroupElement[]}
     * @protected
     */
    _groups=[];
    /**
     * @type {MenuButtonElement[]}
     * @protected
     */
    _allButtons=[];
    //#endregion

    //#region Static Properties
    /**
     * @type {Boolean}
     * @protected
     * @static
     */
    static _initialized=false;
    //#endregion

    /**
     * 
     * @param {string|HTMLElement} root 
     * @param {MenuGroup[]} menuGroups
     */
    constructor(root, menuGroups)
    {
        super(root);

        this._menuGroups=menuGroups;
        SideMenu._LoadTemplates();
        this._Create();
    }

    //#region Static Methods
    static _LoadTemplates()
    {
        if(this._initialized) return;
        const request = SendHttpRequest("../res/templates/menu/side-menu.html", null, null, "GET", false);
        const div=document.createElement("div");
        div.id="side-menu-templates";
        div.innerHTML=request.responseText;
        document.head.appendChild(div);
        this._initialized=true;
    }
    //#endregion

    //#region Protected Methods
    /**
     * @protected
     */
    _Create()
    {
        this._menuGroups.forEach(group => {
            this._groups.push(new MenuGroupElement(null, this._root, group));
        });

        this._groups.forEach(group => {
            group.buttons.forEach(button=>{
                this._allButtons.push(button);
                button.button.addEventListener("click", ()=>this.SelectButton(button))
            });
        });
    }
    //#endregion
    
    //#region Public Methods
    /**
     * 
     * @param {MenuButtonElement} button 
     */
    SelectButton(button)
    {
        this._allButtons.forEach(but => {
            but.SelectButton(button==but);
        });
    }
    //#endregion
}

class MenuGroupElement extends ExBaseJSElement
{
    //#region Elements
    /**
     * @type {HTMLElement}
     * @protected
     */
    _title;
    /**
     * @type {HTMLElement}
     * @protected
     */
    _buttonList;
    /**
     * @type {MenuButtonElement[]}
     */
    _buttons=[];
    //#endregion

    //#region Properties
    /**
     * @type {MenuGroup}
     * @protected
     */
    _menuGroup;
    //#endregion

    //#region Static Properties
    /**
     * @type {HTMLTemplateElement}
     * @protected
     * @static
     */
    static _template;
    //#endregion

    /**
     * 
     * @param {HTMLElement|String} root 
     * @param {HTMLElement} container
     * @param {MenuGroup} menuGroup
     */
    constructor(root, container, menuGroup)
    {
        super(root, container);

        this._menuGroup=menuGroup;
        MenuGroupElement._PrepareTemplate();
        this._Create();
    }

    //#region Static Methods
    /**
     * @protected
     * @static
     */
    static _PrepareTemplate()
    {
        if(IsValid(this._template)) return;
        this._template=document.head.querySelector('[id="side-menu-templates"]').querySelector('template[id="side-menu-group"]');
    }
    //#endregion

    //#region Protected Methods
    /**
     * @protected
     */
    _Create()
    {
        this._root=document.importNode(MenuGroupElement._template.content, true).firstElementChild;
        this._title=this._root.querySelector('[id="side-title"]');
        this._buttonList=this._root.querySelector('[id="menu"]');
        this._container.appendChild(this._root);

        this._title.innerText=this._menuGroup.title;
        this._menuGroup.menuButtons.forEach(button => {
            this._buttons.push(new MenuButtonElement(null, this._buttonList, button));
        });
    }
    //#endregion

    //#region Getters
    get buttons()
    {
        return this._buttons;
    }
    //#endregion
}

class MenuButtonElement extends ExBaseJSElement
{
    //#region Elements
    /**
     * @type {HTMLElement}
     * @protected
     */
    _title;
    /**
     * @type {HTMLElement}
     * @protected
     */
    _img;
    //#endregion

    //#region Properties
    /**
     * @type {MenuButton}
     * @protected
     */
    _menuButton;
    /**
     * @type {Boolean}
     * @protected
     */
    _selected=false;
    //#endregion

    //#region Static Properties
    /**
     * @type {HTMLTemplateElement}
     * @protected
     * @static
     */
    static _template;
    //#endregion

    /**
     * 
     * @param {HTMLElement|String} root 
     * @param {HTMLElement} container
     * @param {MenuButton} menuButton
     */
    constructor(root, container, menuButton)
    {
        super(root, container);

        this._menuButton=menuButton;
        MenuButtonElement._PrepareTemplate();
        this._Create();
    }

    //#region Static Methods
    /**
     * @protected
     * @static
     */
    static _PrepareTemplate()
    {
        if(IsValid(this._template)) return;
        this._template=document.head.querySelector('[id="side-menu-templates"]').querySelector('template[id="side-menu-button"]');
    }
    //#endregion

    //#region Protected Methods
    /**
     * @protected
     */
    _Create()
    {
        this._root=document.importNode(MenuButtonElement._template.content, true).firstElementChild;
        this._title=this._root.querySelector('[id="text"]');
        this._img=this._root.querySelector('[id="menu-img"]');
        this._container.appendChild(this._root);

        this._title.innerText=this._menuButton.title;
        if(IsValid(this._menuButton.color))
            this._root.style.setProperty("--menu-img-color", this._menuButton.color);
        if(IsValid(this._menuButton.image))
            this._img.style.setProperty("--menu-img", `url(${this._menuButton.image})`);
        EnableRippleEffect(this._root);
        this._root.addEventListener("click", ()=>{
            if(IsValid(this._menuButton.callback))
                this._menuButton.callback();
        });
    }
    //#endregion

    //#region Public Methods
    /**
     * 
     * @param {Boolean} select 
     */
    SelectButton(select)
    {
        if(select)
        {
            this._root.classList.add("selected");
            this._root.classList.add("str-shadow-lg");
            this._root.classList.add("all");
        }
        else
        {
            this._root.classList.remove("selected");
            this._root.classList.remove("str-shadow-lg");
            this._root.classList.remove("all");
        }
    }
    //#endregion

    //#region Getters
    get button()
    {
        return this._root;
    }
    //#endregion
}