//#region Defines
/**
 * @typedef {Object} TagFieldSettings
 * @property {String} badgesColor
 * @property {String} labelText
 */
//#endregion

import { LoadTemplate } from "../../../libs/general.js";
import ExBaseJSElement from "../../base/ex-base-element.js";

/**
 * @class
 */
export default
class TagField extends ExBaseJSElement
{
    //#region Elements
    /**
     * @type {HTMLElement}
     * @protected
     */
    _label;
    /**
     * @type {HTMLInputElement}
     * @protected
     */
    _input;
    /**
     * @type {HTMLElement}
     * @protected
     */
    _badgesContainer;
    //#endregion
    
    //#region Properties
    /**
     * @type {TagFieldSettings}
     * @protected
     */
    _settings;
    /**
     * @type {TagBadge[]}
     */
    _tagBadges=[];
    //#endregion

    //#region Static Properties
    /**
     * @type {Boolean}
     * @protected
     */
    static _initialized=false;
    /**
     * @type {HTMLTemplateElement}
     * @protected
     */
    static _template=null;
    //#endregion

    /**
     * 
     * @param {HTMLElement|string} parent 
     * @param {TagFieldSettings} settings 
     * @constructor
     */
    constructor(parent, settings)
    {
        super(null, parent);

        this._settings=settings;
        if(this.constructor==TagField)
        {
            TagField._LoadTemplates();
            this._Create();
        }
    }

    //#region Static Methods
    /**
     * @protected
     */
    static _LoadTemplates()
    {
        if(this._initialized) return;

        const response=LoadTemplate("/res/templates/elements/input-fields/tag-field.html");
        if(!response) return;
        this._initialized=true;
        const div=document.createElement("div");
        div.id="tag-field";
        div.innerHTML=response;
        document.head.appendChild(div);
        this._template=div.querySelector('template[id="tag-field"]');
        TagBadge._template=div.querySelector('template[id="tag-element"]');

    }
    //#endregion

    //#region Protected Methods
    /**@protected */
    _Create()
    {
        super._Create();

        this._input=this._root.querySelector('input');
        this._badgesContainer=this._root.querySelector('#badges');
        this._label=this._root.querySelector('label');

        this._input.addEventListener('keypress', (event)=>this._OnSubmitInput(event.key));
    }

    /**
     * 
     * @param {String} key
     * @protected 
     */
    _OnSubmitInput(key)
    {
        if(key=="Enter")
        {
            this._AddBadge(this._input.value);
            this._input.value=null;
        }
        else if(key=="Escape")
            this._input.value=null;
    }

    /**
     * 
     * @param {String} value 
     * @protected
     */
    _AddBadge(value)
    {
        let tagBadge=new TagBadge(this._badgesContainer, {
            badgesColor: this._settings.badgesColor,
            labelText: value
        });

        tagBadge.reactor.AddEventListener("OnDelete", (event)=>this._OnDeleteBadge(event.instance));
        this._tagBadges.push(tagBadge);
    }

    /**
     * 
     * @param {TagBadge} badge 
     * @protected
     */
    _OnDeleteBadge(badge)
    {
        this._badgesContainer.remove(badge.root);
        this._tagBadges.splice(this._tagBadges.indexOf(badge));
    }
    //#endregion

    //#region Public Methods
    /**
     * 
     * @param {String[]|null} values 
     */
    SetBadges(values=null)
    {
        if(values instanceof Array)
        {
            values.forEach(value => {
                this._AddBadge(value);
            });
        }
        else
            this._tagBadges.forEach(badge => {
                this._OnDeleteBadge(badge);
            });
    }
    //#endregion

    //#region Getters
    /**@protected */
    get template()
    {
        return TagField._template;
    }
    //#endregion
}

export class TagBadge extends ExBaseJSElement
{
    //#region Elements
    /**
     * @type {HTMLElement}
     * @protected
     */
    _label;
    /**
     * @type {HTMLButtonElement}
     * @protected
     */
    _button;
    //#endregion

    //#region Protected Properties
    /**
     * @type {TagFieldSettings}
     * @protected
     */
    _settings;
    //#endregion

    //#region Static Properties
    /**
     * @type {HTMLTemplateElement}
     * @protected
     */
    static _template=null;
    //#endregion

    /**
     * 
     * @param {HTMLElement|string} parent 
     * @param {TagFieldSettings} settings 
     */
    constructor(parent, settings)
    {
        super(null, parent);

        this._settings=settings;
        this._reactor.RegisterEventByName('OnDelete');
        if(this.constructor==TagBadge)
            this._Create();
    }

    //#region Protected Methods
    /**@protected */
    _Create()
    {
        super._Create();

        this._label=this._root.querySelector('label');
        this._button=this._root.querySelector('button');
        this._button.addEventListener('click', {instance: this});
        this._root.classList.add(this._settings.badgesColor);
        this._label.innerText=this._settings.labelText;
    }
    //#endregion

    //#region Getters
    /**@protected */
    get template()
    {
        return TagBadge._template;
    }
    //#endregion
}