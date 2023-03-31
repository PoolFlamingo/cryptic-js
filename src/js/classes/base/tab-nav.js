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
 */
//#endregion

import { SetNavPill } from "../../libs/extended_libs/material-dashboard-e.js";
import { Reactor } from "../reactor.min.js";

/**
 * @class
 * @abstract
 */
export class TabNav
{
    //#region Elements
    /**
     * @type {Element}
     * @protected
     */
    _tabContainer;
    /**
     * @type {Element}
     * @protected
     */
    _panelContainer;
    /**
     * @type {Element}
     * @protected
     */
    _rootTab;
    /**
     * @type {Element}
     * @protected
     */
    _rootPanel;
    /**
     * @type {HTMLUListElement}
     * @protected
     */
    _tab_list;
    /**
     * @type {HTMLUListElement}
     * @protected
     */
    _panel_list;
    /**
     * @type {Element}
     * @protected
     */
    _movable;
    //#endregion

    //#region Properties
    /**
     * @type {TabNavSettings}
     * @protected
     */
    _settings;
    /**
     * @type {TabNavOption[]}
     * @protected
     */
    _options;
    /**
     * @type {Reactor}
     * @protected
     */
    _reactor;
    //#endregion

    /**
     * 
     * @param {string|Element} tabContainer 
     * @param {string|Element} panelContainer 
     * @param {TabNavSettings} settings 
     * @param {TabNavOption[]} options 
     */
    constructor(tabContainer, panelContainer, settings, options)
    {
        if (new.target === TabNav) 
            throw new TypeError("Cannot construct Abstract instances directly.");
        
        if(!(settings.tabNavMenuTemplate instanceof HTMLTemplateElement))
            throw new Error("The 'tabNavMenuTemplate' is 'undefined' or is not a 'HTMLTemplateElement'.");
        if(!(settings.tabNavMenuElementTemplate instanceof HTMLTemplateElement))
            throw new Error("The 'tabNavElementTemplate' is 'undefined' or is not a 'HTMLTemplateElement'.");
        if(!(settings.tabNavPanelTemplate instanceof HTMLTemplateElement))
            throw new Error("The 'tabNavPanelTemplate' is 'undefined' or is not a 'HTMLTemplateElement'.");
        if(!(settings.tabNavPanelElementTemplate instanceof HTMLTemplateElement))
            throw new Error("The 'tabNavPanelElementTemplate' is 'undefined' or is not a 'HTMLTemplateElement'.");

        if(typeof tabContainer=="string")
            this._tabContainer=document.getElementById(tabContainer);
        else if(tabContainer instanceof Element)
            this._tabContainer=tabContainer;
        else
            throw new Error("Error: 'tabContainer' is not a 'Element' or a 'string'.");

        if(typeof panelContainer=="string")
            this._panelContainer=document.getElementById(panelContainer);
        else if(panelContainer instanceof Element)
            this._panelContainer=panelContainer;
        else
            throw new Error("Error: 'panelContainer' is not a 'Element' or a 'string'.");

        this._settings=settings;
        this._reactor=new Reactor();
        this._reactor.RegisterEventByName("OnChangeTab");

        this._RenderElement();
        this._SetOptions(options);
    }

    //#region Protected Methods
    _RenderElement()
    {
        this._rootTab=document.importNode(this._settings.tabNavMenuTemplate.content, true).firstElementChild;
        this._tabContainer.appendChild(this._rootTab);
        this._tab_list=this._rootTab.querySelector('ul[id="tab-list"]');

        this._rootPanel=document.importNode(this._settings.tabNavPanelTemplate.content, true).firstElementChild;
        this._panelContainer.appendChild(this._rootPanel);
        this._panel_list=this._rootPanel;
    }

    /**
     * 
     * @param {TabNavOption[]} options 
     */
    _SetOptions(options)
    {
        this._options=options;
        this._tab_list.innerHTML=null;
        this._panel_list.innerHTML=null;
        this._options.forEach((option, i) => {
            this._options[i].tabElement=this._CreateTabOption(option);
            this._options[i].panelElement=this._CreatePanelOption(option);
            this._tab_list.appendChild(this._options[i].tabElement);
            this._panel_list.appendChild(this._options[i].panelElement);

            this._options[i]['bTab']=new bootstrap.Tab(this._options[i].tabElement);
        });
        this._movable=SetNavPill(this._tab_list);
        this._options[0]['bTab'].show();
        this._panel_list.children[0].classList.add("active");
        this._panel_list.children[0].classList.add("show");
        this._movable.querySelector("a").innerHTML="&nbsp;";
        this._PrepareTabsForUse();
    }

    _PrepareTabsForUse()
    {
        for (let i = 0; i < this._tab_list.children.length; i++) 
        {
            const t_el = this._tab_list.children[i];
            t_el.querySelector("a").classList.remove("active");
        }
        this._tab_list.children[0].querySelector("a").classList.add("active");
    }

    /**
     * 
     * @param {TabNavOption} option 
     */
    _CreateTabOption(option)
    {
        const tab=document.importNode(this._settings.tabNavMenuElementTemplate.content, true).firstElementChild;
        if(typeof this._settings.tabRole != "undefined")
            tab.setAttribute('role', this._settings.tabRole);
        
        let anchor=tab.querySelector('a[id="tab-button"]');
        anchor.addEventListener("click", (event)=>{
            event.preventDefault();
            this._reactor.DispatchEvent("OnChangeTab", option.value);
        });
        anchor.setAttribute("data-bs-target", '#'+option.value);

        return tab;
    }

    /**
     * 
     * @param {TabNavOption} option 
     */
    _CreatePanelOption(option)
    {
        const panel=document.importNode(this._settings.tabNavPanelElementTemplate.content, true).firstElementChild;
        panel.appendChild(option.data.appendedElement);
        panel.id=option.value;
        return panel;
    }
    //#endregion

    //#region Getters
    get options()
    {
        return this._options;
    }

    get tabList()
    {
        return this._tab_list;
    }

    get panelList()
    {
        return this._panel_list;
    }
    //#endregion
}