//#region Defines
/**
 * @typedef {Object} TagFieldSettings
 * @property {String} badgesColor
 */
//#endregion

import { LoadTemplate } from "../../../libs/general.js";
import ExBaseJSElement from "../../base/ex-base-element.js";

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
    /**
     * @type {HTMLTemplateElement}
     * @protected
     */
    static _badgeTemplate=null;
    //#endregion

    constructor(container, settings)
    {
        super(null, container);

        this._settings=settings;
        if(this.constructor==TagField)
        {

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
        const div=document.createElement("div");
        div.innerHTML=response;
        document.head.appendChild(div);
        this._template=div.querySelector('template[id="tag-field"]');
        this._badgeTemplate=div.querySelector('template[id="tag-element"]');
    }
    //#endregion

    //#region Protected Methods
    //#endregion
}