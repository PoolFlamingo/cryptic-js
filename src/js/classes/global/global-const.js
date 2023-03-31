import { IsValid } from "../../libs/general.js";

class GlobalConstants
{
    /**
     * @type {import("electron").IpcRenderer}
     * @private
     * @static
     */
    static _ipcRenderer=null;
    /**
     * @type {import("../../scripts/load-delayed-scripts.js").Api}
     * @private
     * @static
     */
    static _api=null;

    //#region Public Static Methods
    /**
     * 
     * @param {{app:import("../../scripts/load-delayed-scripts.js").Api}} api 
     */
    static initialize(api)
    {
        this._ipcRenderer=window.App.ipcRenderer;
        this._api=api.app;
    }
    //#endregion

    //#region Getters
    static get ipcRenderer()
    {
        return this._ipcRenderer;
    }

    static get Api()
    {
        return this._api;
    }
    //#endregion
}

export default GlobalConstants;