//#region Defines
/**
 * @typedef {(request:XMLHttpRequest)=>{}} HttpCallback
 */
//#endregion

/**
 * Convierte una ruta relativa (desde la raíz) a una ruta absoluta.
 * @param {String} pathX 
 * @param {Boolean} fix
 * @returns {String}
 */
export function ToAbsolutePath(pathX, fix=true)
{
    let path=window.App.path.join(window.App.projectRoot, pathX);
    if(fix)
        path=path.replace(/\\/g, '/');
    return path;
}

/**
 * Comprueba que un objeto no sea undefined ni tampoco null
 * @param {Object} object 
 * @returns {Boolean}
 */
export function IsValid(object)
{
    return typeof object!="undefined" && object!=null;
}

/**
 * An enum representing the status of a request.
 * @enum {Number}
 * @readonly
 */
export const RequestStatus=Object.freeze({
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
export function SendHttpRequest(url, data, callback, method="POST", async=true)
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
 * Send a request to the selected url to load a template.
 * @param {string} url Target URL for request the template.
 * @returns {String | false}
 */
export function LoadTemplate(url)
{
    const xhr=new XMLHttpRequest();
    const fd=new FormData();

    xhr.open("GET", url, false);
    xhr.send(fd);
    return xhr.status==200?xhr.responseText: false;
}

export function none(){return;}