import { RequestStatus, SendHttpRequest } from "../../libs/general.js";
import BaseJSElement from "../base/base-element.js";
import { Reactor } from "../reactor.js";

export class WindowButtons extends BaseJSElement
{
    //#region Elements
    /**
     * @type {HTMLButtonElement}
     * @protected
     */
    _closeButton;
    /**
     * @type {HTMLButtonElement}
     * @protected
     */
    _minimizeButton;
    /**
     * @type {HTMLButtonElement}
     * @protected
     */
    _maximizeButton;
    //#endregion

    //#region Static Properties
    /**
     * @type {RequestStatus}
     * @protected
     * @static
     */
    static _templateStatus=RequestStatus.None;
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
     */
    constructor(root)
    {
        super(root);

        WindowButtons._LoadTemplate();
        this._Create();
    }

    //#region Static Methods
    static _LoadTemplate()
    {
        if(this._templateStatus!=RequestStatus.None) return;
        const request = SendHttpRequest("../res/templates/window/window-buttons.html", null, null, "GET", false);
        this._templateStatus=RequestStatus.Done;
        const div=document.createElement("div");
        div.innerHTML=request.responseText;
        document.head.appendChild(div);
        this._template=div.querySelector("template");
    }
    //#endregion

    //#region Protected Methods
    _Create()
    {
        const container=this._root;
        this._root=document.importNode(WindowButtons._template.content, true).firstElementChild;
        this._closeButton=this._root.querySelector('button[id="close"]');
        this._closeButton.addEventListener("click", ()=>{
            window.App.ipcRenderer.send("close-window");
        });
        this._minimizeButton=this._root.querySelector('button[id="minimize"]');
        this._minimizeButton.addEventListener("click", ()=>{
            window.App.ipcRenderer.send("min-window");
        });
        this._maximizeButton=this._root.querySelector('button[id="maximize"]');
        this._maximizeButton.addEventListener("click", ()=>{
            window.App.ipcRenderer.send("max-window");;
        });
        container.appendChild(this._root);
    }
    //#endregion
}