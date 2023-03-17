const { contextBridge } = require("electron");
const os = require('os');
const JavaScriptObfuscator = require('javascript-obfuscator');

contextBridge.exposeInMainWorld("App", {
    platform: os.platform(),
    dev: process.env.NODE_ENV,
    electronVersion: process.versions.electron
});

contextBridge.exposeInMainWorld("JavaScriptObfuscator", {
    obfuscate: (sourceCode, inputOptions)=>JavaScriptObfuscator.obfuscate(sourceCode, inputOptions),
    getOptionsByPreset: (optionPreset)=>JavaScriptObfuscator.getOptionsByPreset(optionPreset),
    obfuscateMultiple: (sourceCodesObject, inputOptions)=>JavaScriptObfuscator.obfuscateMultiple(sourceCodesObject, inputOptions),
    version: JavaScriptObfuscator.version
});