import { IsValid } from "../../libs/general.js";
import GlobalProperties from "./global-props.js";

export default
class FileSys
{
    /**
     * 
     * @param {String} path 
     * @param {String} content
     * @param {(res:Boolean)=>{}} callback
     * @returns {Promise<Boolean>}
     */
    static async SaveFile(path, content, callback)
    {
        let res=await GlobalProperties.ipcRenderer.invoke("FileSystem.SaveFile", path, content);
        if(IsValid(callback))
            callback(res);
        return res;
    }

    /**
     * 
     * @param {String} path 
     * @param {import("fs").RmOptions} options 
     * @returns {Promise<Boolean>}
     */
    static async Remove(path, options)
    {
        return await GlobalProperties.ipcRenderer.invoke("FileSystem.RemoveFile", path, options);
    }

    /**
     * 
     * @param {String} path 
     * @param {String} newName 
     * @param {Boolean} isFile
     * @returns {Promise<Boolean>}
     */
    static async Rename(path, newName, isFile=false)
    {
        return await GlobalProperties.ipcRenderer.invoke("FileSystem.RenameFile", path, newName, isFile);
    }

    /**
     * 
     * @param {String} path 
     * @param {String} name 
     * @param {import("fs").MakeDirectoryOptions} options 
     * @returns {Promise<string|undefined>}
     */
    static async MakeFolder(path, name, options)
    {
        return await GlobalProperties.ipcRenderer.invoke("FileSystem.MakeFolder", path, name, options);
    }
}