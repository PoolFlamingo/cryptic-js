//#region Defines
/**
 * @typedef {import("javascript-obfuscator/typings/src/types/options/TInputOptions.js").TInputOptions} TInputOptions
 * @typedef {import("choices.js").Choices} Choices
 */
//#endregion
import Choices  from "../elements/dropdowns/choices.js";
import { LoadTemplate } from "../../libs/general.js";
import ExBaseJSElement from "../base/ex-base-element.js";
import Translate from "../global/translation.js";

export class ObfuscatorForm extends ExBaseJSElement
{
    //#region Elements
    /**
     * @type {HTMLButtonElement}
     * @protected
     */
    _resetButton;
    /**
     * @type {Choices}
     * @protected
     */
    _presetChoices;
    //#endregion

    //#region Properties
    /**
     * @type {TInputOptions}
     * @protected
     */
    _formOptions;
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
     * @param {HTMLElement|String} parent 
     */
    constructor(parent)
    {
        super(null, parent);

        if(this.constructor==ObfuscatorForm)
        {
            ObfuscatorForm._LoadTemplates();
            this._Create();
        }
    }

    //#region Static Methods
    /**
     * @protected
     */
    static _LoadTemplates()
    {
        if(ObfuscatorForm._initialized) return;

        const response=LoadTemplate("/res/templates/forms/obfuscator-form.html");
        if(!response) return;
        this._initialized=true;
        const div=document.createElement("div");
        div.id="obfuscator-form";
        div.innerHTML=response;
        document.head.appendChild(div);
        this._template=div.querySelector('template[id="obfuscator-form-t"]');
    }
    //#endregion

    //#region Protected Methods
    /**
     * @protected
     */
    _Create()
    {
        super._Create();

        this._resetButton=this._root.querySelector('#reset-button');
        this._presetChoices=new Choices(this._root.querySelector('#presets'), {
            shouldSort: false,
            searchEnabled: false,
            choices:[
                {
                    label: Translate.GetTrans("oform_02"),
                    value: "default",
                    active:true,
                    customProperties:{
                        description: Translate.GetTrans("oform_02d"),
                    }
                },
                {
                    label: Translate.GetTrans("oform_03"),
                    value: "low",
                    customProperties:{
                        description: Translate.GetTrans("oform_03d")
                    }
                },
                {
                    label: Translate.GetTrans("oform_04"),
                    value: "medium",
                    customProperties:{
                        description: Translate.GetTrans("oform_04d")
                    }
                },
                {
                    label: Translate.GetTrans("oform_05"),
                    value: "high",
                    customProperties: {
                        description: Translate.GetTrans("oform_05d")
                    }
                }
            ]
        })
    }

    /**@protected */
    _Obfuscate()
    {
        this._formOptions
    }
    //#endregion

    //#region Getters
    /**
     * @protected
     */
    get template()
    {
        return ObfuscatorForm._template;
    }
    //#endregion
}