//#region Defines
/**
 * @typedef {Object} BGColors
 * @property {String} color1
 * @property {String} color2
 * @property {String} color3
 * @property {String} color4
 * @property {String} color5
 * @property {String} color6
 * @property {String} color7
 * @property {String} color8
 * @property {String} color9
 * @property {String} color10
 * @property {String} color11
 * @property {String} color12
 */
/**
 * @typedef {Object} CustomBannerSettings
 * @property {String} bg
 * @property {BGColors} bgColors
 */
//#endregion

import { IsValid, ToAbsolutePath } from "../libs/general.js";

export class CustomBanner
{
    /**
     * @type {HTMLElement}
     * @private
     */
    #root;
    /**
     * @type {CustomBannerSettings}
     * @private
     */
    #settings;

    /**
     * 
     * @param {HTMLElement|string} root 
     * @param {CustomBannerSettings} settings 
     */
    constructor(root, settings)
    {
        if(typeof root == "string")
            this.#root=document.getElementById(root);
        else if(root instanceof HTMLElement)
            this.#root=root;
        else
        {
            console.error("Parameter \"root\" must be a type of string or instance of HTMLElement.");
            return;
        }

        this.#settings=settings;
        this.#SetDefaultSettings();
        this.#UpdateBannerStyle();
    }

    //#region Private Methods
    #SetDefaultSettings()
    {
        let wasInvalid=!IsValid(this.#settings);
        if(wasInvalid)
            this.#settings={};

        if(wasInvalid || !IsValid(this.#settings.backgroundColors))
            this.#settings.bg=`url(${ToAbsolutePath("/res/theme/lava-lamp/img/bgs/cubes.png")})`;
        
        wasInvalid=!IsValid(this.#settings.bgColors);
        if(wasInvalid)
            this.#settings.bgColors={};
        if(wasInvalid || !IsValid(this.#settings.bgColors.color1))
            this.#settings.bgColors.color1="#cf4af3";
        if(wasInvalid || !IsValid(this.#settings.bgColors.color2))
            this.#settings.bgColors.color2="#e73bd7";
        if(wasInvalid || !IsValid(this.#settings.bgColors.color3))
            this.#settings.bgColors.color3="#f631bc";
        if(wasInvalid || !IsValid(this.#settings.bgColors.color4))
            this.#settings.bgColors.color4="#fd31a2";
        if(wasInvalid || !IsValid(this.#settings.bgColors.color5))
            this.#settings.bgColors.color5="#ff3a8b";
        if(wasInvalid || !IsValid(this.#settings.bgColors.color6))
            this.#settings.bgColors.color6="#ff4b78";
        if(wasInvalid || !IsValid(this.#settings.bgColors.color7))
            this.#settings.bgColors.color7="#ff5e68";
        if(wasInvalid || !IsValid(this.#settings.bgColors.color8))
            this.#settings.bgColors.color8="#ff705c";
        if(wasInvalid || !IsValid(this.#settings.bgColors.color9))
            this.#settings.bgColors.color9="#ff8c51";
        if(wasInvalid || !IsValid(this.#settings.bgColors.color10))
            this.#settings.bgColors.color10="#ffaa49";
        if(wasInvalid || !IsValid(this.#settings.bgColors.color11))
            this.#settings.bgColors.color11="#ffc848";
        if(wasInvalid || !IsValid(this.#settings.bgColors.color12))
            this.#settings.bgColors.color12="#ffe652";
    }

    #UpdateBannerStyle()
    {
        this.#root.style.setProperty("--wrapper-bg", this.#settings.bg);
        this.#root.style.setProperty("--wrapper-color1", this.#settings.bgColors.color1);
        this.#root.style.setProperty("--wrapper-color2", this.#settings.bgColors.color2);
        this.#root.style.setProperty("--wrapper-color3", this.#settings.bgColors.color3);
        this.#root.style.setProperty("--wrapper-color4", this.#settings.bgColors.color4);
        this.#root.style.setProperty("--wrapper-color5", this.#settings.bgColors.color5);
        this.#root.style.setProperty("--wrapper-color6", this.#settings.bgColors.color6);
        this.#root.style.setProperty("--wrapper-color7", this.#settings.bgColors.color7);
        this.#root.style.setProperty("--wrapper-color8", this.#settings.bgColors.color8);
        this.#root.style.setProperty("--wrapper-color9", this.#settings.bgColors.color9);
        this.#root.style.setProperty("--wrapper-color10", this.#settings.bgColors.color10);
        this.#root.style.setProperty("--wrapper-color11", this.#settings.bgColors.color11);
        this.#root.style.setProperty("--wrapper-color12", this.#settings.bgColors.color12);
    }
    //#endregion

    //#region Public Methods
    /**
     * 
     * @param {BGColors} colors 
     */
    SetColors(colors)
    {
        this.#settings.bgColors=colors;
        this.#SetDefaultSettings();
        this.#UpdateBannerStyle();
    }
    /**
     * 
     * @param {String} bg 
     */
    SetBackground(bg)
    {
        this.#settings.bg=bg;
        this.#SetDefaultSettings();
        this.#UpdateBannerStyle();
    }
    //#endregion
}