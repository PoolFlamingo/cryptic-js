//#region Defines
/**
 * @typedef {import("javascript-obfuscator/typings/src/types/options/TInputOptions.js").TInputOptions} TInputOptions
 */
/**
 * @typedef {import("../elements/dropdowns/choices.js").ChoicesInst} ChoicesInst
 */
//#endregion
import {Choice as Choices} from "../elements/dropdowns/choices.js";
import { LoadTemplate } from "../../libs/general.js";
import ExBaseJSElement from "../base/ex-base-element.js";
import Translate from "../global/translation.js";
import TagField from "../elements/input-fields/tag-field.js";

export class ObfuscatorForm extends ExBaseJSElement
{
    //#region Elements
    //#region General Options
    /**
     * @type {HTMLButtonElement}
     * @protected
     */
    _resetButton;
    /**
     * @type {ChoicesInst}
     * @protected
     */
    _presetChoices;
    /**
     * @type {ChoicesInst}
     * @protected
     */
    _targetChoices;
    /**
     * @type {HTMLInputElement}
     * @protected
     */
    _seedInput;
    /**
     * @type {HTMLInputElement}
     * @protected
     */
    _consoleOutput;
    /**
     * @type {HTMLInputElement}
     * @protected
     */
    _selfDef;
    /**
     * @type {HTMLInputElement}
     * @protected
     */
    _debugProtect;
    /**
     * @type {HTMLInputElement}
     * @protected
     */
    _debugProtect_i;
    /**
     * @type {HTMLInputElement}
     * @protected
     */
    _ignoreImports;
    /**
     * @type {TagField}
     * @protected
     */
    _domainLock;
    /**
     * @type {HTMLInputElement}
     * @protected
     */
    _domainLockRed;
    /**
     * @type {HTMLInputElement}
     * @protected
     */
    _enableMaps;
    /**
     * @type {ChoicesInst}
     * @protected
     */
    _sourceMapMode;
    /**
     * @type {HTMLInputElement}
     * @protected
     */
    _sourceMapUrl;
    /**
     * @type {HTMLInputElement}
     * @protected
     */
    _sourceMapFileName;
    //#endregion

    //#region String Transformations
    //#endregion
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
        });

        this._targetChoices=new Choices(this._root.querySelector('#target'), {
            shouldSort: false,
            searchEnabled: false,
            choices:[
                {
                    label: Translate.GetTrans("oform_07"),
                    value: "browser"
                },
                {
                    label: Translate.GetTrans("oform_08"),
                    value: "browser_no_eval"
                },
                {
                    label: Translate.GetTrans("oform_09"),
                    value: "node"
                }
            ]
        });

        this._seedInput=this._root.querySelector('#seed');

        this._consoleOutput=this._root.querySelector('#console-output');

        this._selfDef=this._root.querySelector('#self-def');

        this._debugProtect=this._root.querySelector('#debug-protection');

        this._debugProtect_i=this._root.querySelector('#debug-protection-i');

        this._ignoreImports=this._root.querySelector('#ignore-imports');

        this._domainLock=new TagField(this._root.querySelector('#domain-lock'));

        this._domainLockRed=this._root.querySelector('#domain-lock-redirect');

        this._enableMaps=this._root.querySelector('#enable-maps');

        this._sourceMapMode=new Choices(this._root.querySelector('#source-map-mode'), {
            shouldSort: false,
            searchEnabled: false,
            choices: [
                {
                    label: Translate.GetTrans("oform_20"),
                    value: "inline"
                },
                {
                    label: Translate.GetTrans("oform_21"),
                    value: "separate"
                }
            ]
        });

        this._sourceMapUrl=this._root.querySelector('#map-base-url');

        this._sourceMapFileName=this._root.querySelector('#map-file-name');
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