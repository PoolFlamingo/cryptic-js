import { IsValid, LoadJSONFile } from "../../libs/general.js";

const defaultLang="en";

export default
class Translate
{
    /**
     * @type {Readonly<Object>}
     * @private
     */
    static _lang;
    /**
     * @type {String}
     * @private
     */
    static _attribute;

    //#region Public Methods
    /**
     * 
     * @param {String} lang
     * @param {String} attribute 
     */
    static init(lang=defaultLang, attribute="trans")
    {
        this._attribute=attribute;

        this.ChangeLang(lang);
    }

    /**
     * 
     * @param {String} lang_code 
     */
    static async ChangeLang(lang_code)
    {
        const response=await LoadJSONFile(`/src/json/lang/${lang_code}.json`, true);

        this._lang=Object.freeze(JSON.parse(response));
        this.UpdateTrans();
    }

    /**
     * 
     * @param {HTMLElement} context 
     */
    static UpdateTrans(context=document.body)
    {
        /**@type {HTMLElement[]} */
        const elements=Array.from(context.querySelectorAll(`[${this._attribute}]`));
        elements.forEach(element => {
            let value=element.getAttribute(this._attribute);
            if(IsValid(value) && IsValid(this._lang[value]))
                if(element.hasAttribute("t-html"))
                    element.innerHTML=this._lang[value];
                else
                    element.innerText=this._lang[value];
        });
    }

    /**
     * 
     * @param {String} key 
     * @returns {String}
     */
    static GetTrans(key)
    {
        return this._lang[key];
    }
    //#endregion

    //#region Getters
    static get lang()
    {
        return this._lang;
    }
    static get attribute()
    {
        return this._attribute;
    }
    //#endregion
}