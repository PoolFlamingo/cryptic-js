//#region Defines
/**
 * @typedef {(request:XMLHttpRequest)=>{}} HttpCallback
 */
//#endregion

import GlobalConstants from "../classes/global/global-const.js";

function pathJoin(base, rel)
{
    return base+rel;
}

/**
 * Convierte una ruta relativa (desde la raíz) a una ruta absoluta.
 * @param {String} path 
 * @param {Boolean} fix
 * @returns {String}
 */
export function ToAbsolutePath(path, fix=true)
{
    let pathX=pathJoin(GlobalConstants.Api.projectPath, path);
    if(fix)
        pathX=FixReverseSlash(pathX);
    return pathX;
}

/**
 * 
 * @param {String} path 
 * @param {Boolean} remove_dup 
 * @returns {String}
 */
export function FixReverseSlash(path, remove_dup=true)
{
    path=path.replace(/\\/g, '/');
    if(remove_dup)
        path=path.replace(/\/\//g, '/');
    return path;
}

/**
 * Comprueba que un objeto no sea undefined ni tampoco null
 * @param {Object} object 
 * @returns {Boolean}
 */
function IsValid(object)
{
    return typeof object!="undefined" && object!=null;
}

/**
 * An enum representing the status of a request.
 * @enum {Number}
 * @readonly
 */
const RequestStatus=Object.freeze({
    /** The request has not yet been processed. */
    None:0,
    /** The request is currently being processed. */
    Processing:1,
    /** The request has been completed. */
    Done:2
});


/**
 * Send a request to the selected url, if the request returns something, 
 * it will execute the callback. Additionally, you can pass data for 
 * the request and indicate which protocol it uses and if it is 
 * asynchronous.
 * @param {string} url Target URL for the request.
 * @param {{}} data Additional data for the request.
 * @param {HttpCallback} callback Return call when the request returns information.
 * @param {string=} method Method to choose between "POST" and "GET". @default method="POST"
 * @param {boolean=} async Choose if you want the request to be synchronous or asynchronous. @default async=true
 * @returns {XMLHttpRequest}
 */
function SendHttpRequest(url, data, callback, method="POST", async=true)
{
    const xhr=new XMLHttpRequest();
    const fd=new FormData();
    if(data!=null && data!=undefined)
    {
        const keys=Object.keys(data);
        
        keys.forEach(key => {
            fd.append(key, data[key]);
        });
    }

    xhr.open(method, url, async);
    xhr.send(fd);
    if(async)
        xhr.addEventListener("load", function(){
            if(xhr.status!=200) return;
            callback(this);
        });
    else
        return xhr;
}

/**
 * Sync loads a template with the selected path. If fails returns false.
 * @param {string} url Target URL for request the template.
 * @returns {String | false}
 */
export function LoadTemplate(url)
{
    const xhr=new XMLHttpRequest();
    const fd=new FormData();

    xhr.open("GET", ToAbsolutePath(url), false);
    xhr.send(fd);
    return xhr.status==200?xhr.responseText: false;
}

/**
 * Send a sync request to the selected url to load a JSON.
 * @param {string} url Target URL for request the JSON.
 * @returns {String | false}
 */
export function LoadJSONFile(url)
{
    const result=LoadTemplate(url);
    return JSON.parse(result);
}

/**
 * Remaps a value provided with the internal minimums and maximums to a value 
 * between the external values. Optionally you can specify if you want to use it 
 * without the internal limits.
 * @param {Number} value 
 * @param {Number} oldMin 
 * @param {Number} oldMax 
 * @param {Number} newMin 
 * @param {Number} newMax 
 * @param {boolean} clamp
 * @returns {Number}
 */
function RemapValue(value, oldMin, oldMax, newMin, newMax, clamp=true)
{
    if(clamp)
        value=Clamp(value, oldMin, oldMax);

    return ((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin;
}

/**
 * Maintains the value within specified limits.
 * @param {Number} value 
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
function Clamp(value, min=0, max=1) 
{
    return Math.min(Math.max(value, min), max);
} 
 
function none(){return;}

//EXPORTS
export {
    none,
    Clamp,
    IsValid,
    RemapValue,
    RequestStatus,
    SendHttpRequest
};