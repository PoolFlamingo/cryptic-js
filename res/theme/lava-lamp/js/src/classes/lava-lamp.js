//#region Defines
/**
 * @typedef {Object} Bubble
 * @property {Number} x
 * @property {Number} y
 * @property {Number} blur
 * @property {Number} radius
 * @property {Number} initialXDirection
 * @property {Number} initialYDirection
 * @property {Number} initialBlurDirection
 * @property {String} colorOne
 * @property {String} colorTwo
 * @property {Number[]} gradient
 */
/**
 * @typedef {Object} DualColor
 * @property {String} one
 * @property {String} two
 */
/**
 * @typedef {Object} LavaLampSettings
 * @property {DualColor} backgroundColors
 * @property {DualColor[]} colors
 * @property {Number} count
 * @property {Number[]} blur
 * @property {Number[]} radius
 * @property {Number} movementSpeed
 * @property {Number} blurSpeed
 */
//#endregion

export class LavaLamp
{
    /**
     * @type {HTMLCanvasElement}
     * @private
     */
    #canvas;
    /**
     * @type {CanvasRenderingContext2D}
     */
    #ctx;
    /**
     * @type {Bubble[]}
     * @private
     */
    #items=[];
    /**
     * @type {LavaLampSettings}
     * @private
     */
    #settings;

    /**
     * 
     * @param {HTMLCanvasElement|String} root 
     * @param {LavaLampSettings} settings 
     */
    constructor(root, settings)
    {
        if(typeof root == "string")
            this.#canvas=document.body.querySelector(`canvas[id="${root}"]`);
        else if(root instanceof HTMLCanvasElement)
            this.#canvas=root;
        else
        {
            console.error("Parameter \"root\" must be a type of string or instance of HTMLCanvasElement.");
            return;
        }

        this.#settings=settings;
        this.#SetDefaultSettings();
        this.#canvas.width=window.innerWidth;
        this.#canvas.height=window.innerHeight;
        this.#ctx=this.#canvas.getContext('2d');

        window.addEventListener("resize", ()=>{
            this.#canvas.width = window.innerWidth;
            this.#canvas.height = window.innerHeight;
            this.#ctx = this.#canvas.getContext('2d');
            this.#ctx.globalCompositeOperation = 'lighter';
        });
        this.#ctx.clearRect( 0, 0, this.#canvas.width, this.#canvas.height );
        this.#ctx.globalCompositeOperation = 'lighter';
        let grd=this.#ctx.createLinearGradient(0, this.#canvas.height, this.#canvas.width, 0);
        grd.addColorStop(0, this.#settings.backgroundColors.one);
        grd.addColorStop(1, this.#settings.backgroundColors.two);
        this.#ctx.fillStyle = grd;
        this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#GenerateBubbles();
        window.requestAnimationFrame((t)=>this.#UpdateCanvas(t));
    }

    //#region Private Methods
    /**
     * Genera las burbujas de lava de forma aleatoria.
     * @private
     */
    #GenerateBubbles()
    {
        for (let i = 0; i < this.#settings.count; i++) 
        {
            let thisRadius = this.#Rand( this.#settings.radius[0], this.#settings.radius[1] );
            let thisBlur = this.#Rand( this.#settings.blur[0], this.#settings.blur[1] );
            let x = this.#Rand( -100, this.#canvas.width + 100 );
            let y = this.#Rand( -100, this.#canvas.height + 100 );
            let colorIndex = Math.floor(this.#Rand(0, 299) / 100);
            let colorOne = this.#settings.colors[colorIndex].one;
            let colorTwo = this.#settings.colors[colorIndex].two;
            
            this.#ctx.beginPath();
            this.#ctx.filter = `blur(${thisBlur}px)`;
            let grd = this.#ctx.createLinearGradient(x - thisRadius / 2, y - thisRadius / 2, x + thisRadius, y + thisRadius);
        
            grd.addColorStop(0, colorOne);
            grd.addColorStop(1, colorTwo);
            this.#ctx.fillStyle = grd;
            this.#ctx.fill();
            this.#ctx.arc( x, y, thisRadius, 0, Math.PI * 2 );
            this.#ctx.closePath();
            
            let directionX = Math.round(this.#Rand(-99, 99) / 100);
            let directionY = Math.round(this.#Rand(-99, 99) / 100);
        
            this.#items.push({
                x: x,
                y: y,
                blur: thisBlur,
                radius: thisRadius,
                initialXDirection: directionX,
                initialYDirection: directionY,
                initialBlurDirection: directionX,
                colorOne: colorOne,
                colorTwo: colorTwo,
                gradient: [ x - thisRadius / 2, y - thisRadius / 2, x + thisRadius, y + thisRadius ],
            });
        }
    }

    /**
     * Establece la configuración por defecto en el caso de que falte algo.
     * @private
     */
    #SetDefaultSettings()
    {
        let wasInvalid=!this.#IsValid(this.#settings);
        if(wasInvalid)
            this.#settings={};

        if(wasInvalid || !this.#IsValid(this.#settings.backgroundColors))
            this.#settings.backgroundColors={one: '#000', two: '#000'};
        if(wasInvalid || !this.#IsValid(this.#settings.blur))
            this.#settings.blur=[12, 70];
        if(wasInvalid || !this.#IsValid(this.#settings.colors))
            this.#settings.colors=[
                { one: '#002aff', two: '#009ff2' },
                { one: '#0054ff', two: '#27e49b' }, 
                { one: '#202bc5' ,two: '#873dcc' }
            ];
        if(wasInvalid || !this.#IsValid(this.#settings.count))
            this.#settings.count=70;
        if(wasInvalid || !this.#IsValid(this.#settings.radius))
            this.#settings.radius=[1, 120];
        if(wasInvalid || !this.#IsValid(this.#settings.movementSpeed))
            this.#settings.movementSpeed=1;
        if(wasInvalid || !this.#IsValid(this.#settings.blurSpeed))
            this.#settings.blurSpeed=1;
    }

    /**
     * Actualiza las burbujas de lava en el canvas.
     * @param {Number} timestamp 
     * @private
     */
    #UpdateCanvas(timestamp)
    {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        let adjX = 2;
        let adjY = 2;
        let adjBlur = 1;
        this.#items.forEach((item) => {
            
            if(item.x + (item.initialXDirection * adjX) >= this.#canvas.width && item.initialXDirection !== 0 || item.x + (item.initialXDirection * adjX) <= 0 && item.initialXDirection !== 0) {
                item.initialXDirection = item.initialXDirection * -1;
            }
            if(item.y + (item.initialYDirection * adjY) >= this.#canvas.height && item.initialYDirection !== 0 || item.y + (item.initialYDirection * adjY) <= 0 && item.initialYDirection !== 0) {
                item.initialYDirection = item.initialYDirection * -1;
            }
            
            if(item.blur + (item.initialBlurDirection * adjBlur) >= this.#settings.radius[1] && item.initialBlurDirection !== 0 || item.blur + (item.initialBlurDirection * adjBlur) <= this.#settings.radius[0] && item.initialBlurDirection !== 0) {
                item.initialBlurDirection *= -1;
            }
            
            item.x += (item.initialXDirection * adjX * this.#settings.movementSpeed);
            item.y += (item.initialYDirection * adjY * this.#settings.movementSpeed);
            item.blur += (item.initialBlurDirection * adjBlur * this.#settings.blurSpeed);
            this.#ctx.beginPath();
            this.#ctx.filter = `blur(${item.blur}px)`;
            let grd = this.#ctx.createLinearGradient(item.gradient[0], item.gradient[1], item.gradient[2], item.gradient[3]);
            grd.addColorStop(0, item.colorOne);
            grd.addColorStop(1, item.colorTwo);
            this.#ctx.fillStyle = grd;
            this.#ctx.arc( item.x, item.y, item.radius, 0, Math.PI * 2 );
            this.#ctx.fill();
            this.#ctx.closePath();
        });

        window.requestAnimationFrame((t)=>this.#UpdateCanvas(t));
    }

    /**
     * 
     * @param {Number} min 
     * @param {Number} max 
     * @returns {Number}
     */
    #Rand(min, max)
    {
        return Math.random() * ( max - min ) + min;
    }

    #IsValid(object)
    {
        return typeof object!="undefined" && object!=null;
    }
    //#endregion

    //#region Public Methods
    /**
     * Establece los colores aleatorios de las burbujas de lava.
     * @param {DualColor[]} colorArray 
     * @public
     */
    SetColors(colorArray)
    {
        this.#settings.colors=colorArray;
        for (let i = 0; i < this.#items.length; i++) 
        {
            let colorIndex = Math.floor(this.#Rand(0, 299) / 100);
            let colorOne = this.#settings.colors[colorIndex].one;
            let colorTwo = this.#settings.colors[colorIndex].two;
            this.#items[i].colorOne=colorOne;
            this.#items[i].colorTwo=colorTwo;
        }
    }
    //#endregion

    //#region Getters
    get settings()
    {
        return this.#settings;
    }
    //#endregion
}