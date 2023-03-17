import { IsValid } from "./general.js";

/**
 * 
 * @param {HTMLElement} element 
 */
export function EnableRippleEffect(element)
{
    element.addEventListener("click", (event)=>{
        let ele = event.target, effect = ele.querySelector(".ripple");
        if(!IsValid(effect))
        {
            effect = document.createElement("span");
            effect.classList.add("ripple");
        }
        effect.style.width = effect.style.height = Math.max(ele.offsetWidth, ele.offsetHeight) + "px";
        ele.appendChild(effect);
        effect.style.left = event.offsetX - effect.offsetWidth / 2 + "px";
        effect.style.top = event.offsetY - effect.offsetHeight / 2 + "px";
        effect.classList.add("ripple");
        setTimeout(()=>{
            if(IsValid(effect) && IsValid(effect.parentElement))
                effect.parentElement.removeChild(effect);
        }, 600);
    });
}