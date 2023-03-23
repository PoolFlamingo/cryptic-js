const { contextBridge, ipcRenderer } = require("electron");
const os = require('os');
const JavaScriptObfuscator = require('javascript-obfuscator');
const path = require("path");

contextBridge.exposeInMainWorld("App", {
    platform: os.platform(),
    dev: process.env.APP_DEV ? (process.env.APP_DEV.trim() == "true") : false,
    electronVersion: process.versions.electron,
    projectRoot: path.join(__dirname, '../../../'),
    path: {
        join: (root, relpath)=>pathh.join(root, relpath)
    },
    ipcRenderer: ipcRenderer,
    //createPopper: (reference, popper, options)=>createPopper(reference, popper, options)
});

contextBridge.exposeInMainWorld("JavaScriptObfuscator", {
    obfuscate: (sourceCode, inputOptions)=>JavaScriptObfuscator.obfuscate(sourceCode, inputOptions),
    getOptionsByPreset: (optionPreset)=>JavaScriptObfuscator.getOptionsByPreset(optionPreset),
    obfuscateMultiple: (sourceCodesObject, inputOptions)=>JavaScriptObfuscator.obfuscateMultiple(sourceCodesObject, inputOptions),
    version: JavaScriptObfuscator.version
});