import GlobalConstants from "../classes/global/global-const.js";

/**@type {import("electron").IpcRenderer} */
const ipcRenderer=window.App.ipcRenderer;

/**@type {Api} */
GlobalConstants.initialize(ipcRenderer.sendSync("App.Initialize"));