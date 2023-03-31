//#region Defines
/**
 * @typedef {Object} TabNavSettings
 * @property {string} tabRole
 * @property {HTMLTemplateElement} tabNavMenuTemplate
 * @property {HTMLTemplateElement} tabNavMenuElementTemplate
 * @property {HTMLTemplateElement} tabNavPanelTemplate
 * @property {HTMLTemplateElement} tabNavPanelElementTemplate
 */
/**
 * @typedef {Object} TabNavOption
 * @property {string|number} value
 * @property {TabOptionData} data
 * @property {Element} tabElement
 * @property {Element} panelElement
 */
/**
 * @typedef {Object} TabOptionData
 * @property {Element} appendedElement
 * @property {string} header;
 */
//#endregion

import { TabNav } from "../base/tab-nav.min.js";

/**
 * @class
 */
export class TabNavMenu extends TabNav
{
    /**
     * 
     * @param {string|Element} tabContainer 
     * @param {string|Element} panelContainer 
     * @param {TabNavSettings} settings 
     * @param {TabNavOption[]} options 
     */
    constructor(tabContainer, panelContainer, settings, options)
    {
        super(tabContainer, panelContainer, settings, options);
    }

    /**
     * 
     * @param {TabNavOption} option 
     */
    _CreateTabOption(option)
    {
        const tab=super._CreateTabOption(option);
        tab.querySelector('a[id="tab-button"]').appendChild(document.createTextNode(option.data.header));
        return tab;
    }
}