const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("App", {
    dev: process.env.APP_DEV ? (process.env.APP_DEV.trim() == "true") : false,
    ipcRenderer: require("electron").ipcRenderer
});