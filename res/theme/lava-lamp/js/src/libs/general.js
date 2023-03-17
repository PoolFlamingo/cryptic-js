/**
 * Convierte una ruta relativa (desde la raíz) a una ruta absoluta.
 * @param {String} pathX 
 * @returns {String}
 */
export function ToAbsolutePath(pathX)
{
    return window.App.path.join(window.App.projectRoot, pathX).replace(/\\/g, '/');
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