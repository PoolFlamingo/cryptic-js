/**@see https://stackoverflow.com/questions/15308371/custom-events-model-without-using-dom-events-in-javascript */

export class ReactorEvent 
{
    /**@type {string} */
    name;
    /**@type {[()=>{}]} */
    callbacks=[];
    
    /**
     * Constructor for the ReactorEvent class.
     * @param {string} name The name of the event.
     */
    constructor(name) 
    {
        this.name = name;
    }

    /**
     * Registers a callback function for the event.
     * @param {()=>{}} callback The callback function to be registered.
     */
    RegisterCallback(callback)
    {
        this.callbacks.push(callback);
    }

    /**
     * Removes a callback function from the event.
     * @param {()=>{}} callback The callback function to be removed.
     */
    RemoveCallback(callback)
    {
        this.callbacks.splice(this.callbacks.indexOf(callback));
    }

    /**
     * Exists the callback function in the event.
     * @param {()=>{}} callback The callback function to find.
     * @returns {Boolean}
     */
    ExistCallback(callback)
    {
        return this.callbacks.findIndex((cal)=>cal===callback);
    }
}

export class Reactor 
{
    /**
     * @type {Reactor[]} 
     * @static
     */
    static #reactors=[];

    /**@type {ReactorEvent[]} */
    events=[];

    /**
     * Constructor for the Reactor class.
     * @param {string} name The name of the event system.
     * @param {boolean} global Whether the event system should be global or not.
     */
    constructor(name=null, global=false)
    {
        if(name==="" || name===" ")
            name=null;
        if(name!==null && global)
        {
            
            if(Reactor.#reactors[name]!=undefined && Reactor.#reactors[name]!=null)
            {
                console.error("A Reactor event system with the same name already exists in the global list. Rename or disable the \"global\" tag.");
                return null;
            }
            Reactor.#reactors[name]=this;
        }
        else if(name===null && global)
            console.warn("It seems you have enabled the \"global\" tag, but you have not chosen a suitable name for the system. Turn off the global tag or put a more specific name.");
    }

    /**
     * Gets a global Reactor event system by its name.
     * @param {string} name The name of the event system.
     * @return {Reactor} The Reactor event system with the specified name.
     */
    static GetReactorEvent(name)
    {
        return this.#reactors[name];
    }

    /**
     * Registers an event with the specified name.
     * @param {string} eventName The name of the event.
     */
    RegisterEventByName(eventName)
    {
        if(this.ExistEventByName(eventName))
        {
            console.error("An event with that name already exists in this Reactor component.");
            return;
        }
        const event = new ReactorEvent(eventName);
        const i=this.events.findIndex((eve)=>eve.name===eventName);
        if(i>-1)
            this.events[i] = event;
        else
            this.events.push(event);
    }

    /**
     * Checks if an event exists by the given name.
     * @param {string} eventName The name of the event.
     * @returns {boolean}
     */
    ExistEventByName(eventName)
    {
        return this.events.findIndex((eve)=>eve.name===eventName)>-1;
    }

    /**
     * Dispatches an event with the specified name and arguments.
     * @param {string} eventName The name of the event.
     * @param {[]} eventArgs The arguments for the event.
     */
    DispatchEvent(eventName, eventArgs)
    {
        if(this.ExistEventByName(eventName))
            this.events.find((eve)=>eve.name===eventName).callbacks.forEach(function (callback) 
            {
                callback(eventArgs);
            });
    }
    
    /**
     * Adds an event listener for the specified event.
     * @param {string} eventName The name of the event.
     * @param {()=>{}} callback The callback function for the event.
     */
    AddEventListener(eventName, callback)
    {
        if(this.ExistEventByName(eventName))
            this.events.find((eve)=>eve.name===eventName).RegisterCallback(callback);
    }

    /**
     * Removes an event listener for the specified event.
     * @param {string} eventName The name of the event.
     * @param {()=>{}} callback The callback function for the event.
     */
    RemoveEventListener(eventName, callback)
    {
        if(this.ExistEventByName(eventName))
            this.events.find((eve)=>eve.name===eventName).RemoveCallback(callback);
    }

    /**
     * Unregisters an event with the specified name.
     * @param {string} eventName The name of the event.
     */
    UnregisterEventByName(eventName)
    {
        if(this.ExistEventByName(eventName))
            this.events.splice(this.events.findIndex((eve)=>eve.name===eventName));
    }

    /**
     * Check if exists an event listener for the specified event.
     * @param {string} eventName The name of the event.
     * @param {()=>{}} callback The callback function for the event.
     */
    ExistListenerInEvent(eventName, callback)
    {
        if(this.ExistEventByName(eventName))
            this.events.find((eve)=>eve.name===eventName).ExistCallback(callback);
        else return false;
    }
}