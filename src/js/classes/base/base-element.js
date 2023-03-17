/**
 * @class
 * @abstract
 */
export default class BaseJSElement
{
    /**
     * @type {HTMLElement}
     * @protected
     */
    _root;

    /**
     * 
     * @param {HTMLElement|String} root 
     */
    constructor(root)
    {
        if (this.constructor === BaseJSElement) 
            throw new Error("Abstract classes can't be instantiated.");

        if(typeof root == "string")
            this._root=document.getElementById(root);
        else if(root instanceof HTMLElement)
            this._root=root;
        else if(root==null)
            return;
        else
            throw new Error("The parameter 'root' must be a string (id) or an instance of HTMLElement");
    }

    //#region Getters
    get _root()
    {
        return this._root;
    }
    //#endregion
}