/**
 * @enum {String}
 */
export const SideNavColors=Object.freeze({
    Trans: "bg-transparent",
    White: "bg-white",
    Dark: "bg-gradient-dark"
});

export function SidebarType(color) 
{  
    var sidebar = document.querySelector('.sidenav');
  
    let colors=Object.values(SideNavColors);

    for (var i = 0; i < colors.length; i++)
      sidebar.classList.remove(colors[i]);
  
    sidebar.classList.add(SideNavColors[color]);
  
  
    // Remove text-white/text-dark classes
    if (color == 'bg-transparent' || color == 'bg-white') 
    {
        var textWhites = document.querySelectorAll('.sidenav .text-white');
        for (let i = 0; i < textWhites.length; i++) 
        {
            textWhites[i].classList.remove('text-white');
            textWhites[i].classList.add('text-dark');
        }
    } 
    else 
    {
        var textDarks = document.querySelectorAll('.sidenav .text-dark');
        for (let i = 0; i < textDarks.length; i++) 
        {
            textDarks[i].classList.add('text-white');
            textDarks[i].classList.remove('text-dark');
        }
    }
  
    if (color == 'bg-transparent' && bodyDark) 
    {
        var textDarks = document.querySelectorAll('.navbar-brand .text-dark');
        for (let i = 0; i < textDarks.length; i++) 
        {
            textDarks[i].classList.add('text-white');
            textDarks[i].classList.remove('text-dark');
        }
    }
  
    // Remove logo-white/logo-dark
  
    if ((color == 'bg-transparent' || color == 'bg-white') && bodyWhite) 
    {
        var navbarBrand = document.querySelector('.navbar-brand-img');
        var navbarBrandImg = navbarBrand.src;
    
        if (navbarBrandImg.includes('logo-ct.png')) {
            var navbarBrandImgNew = navbarBrandImg.replace("logo-ct", "logo-ct-dark");
            navbarBrand.src = navbarBrandImgNew;
        }
    } 
    else 
    {
        var navbarBrand = document.querySelector('.navbar-brand-img');
        if(navbarBrand instanceof HTMLImageElement)
        {
            var navbarBrandImg = navbarBrand.src;
            if (navbarBrandImg.includes('logo-ct-dark.png')) 
            {
                var navbarBrandImgNew = navbarBrandImg.replace("logo-ct-dark", "logo-ct");
                navbarBrand.src = navbarBrandImgNew;
            }
        }
    }
  
    if (color == 'bg-white' && bodyDark) 
    {
        var navbarBrand = document.querySelector('.navbar-brand-img');
        var navbarBrandImg = navbarBrand.src;
    
        if (navbarBrandImg.includes('logo-ct.png')) 
        {
            var navbarBrandImgNew = navbarBrandImg.replace("logo-ct", "logo-ct-dark");
            navbarBrand.src = navbarBrandImgNew;
        }
    }
}

export function DarkMode(value) 
{
    const body = document.body;//document.getElementById('body');
    const hr = document.querySelectorAll('div:not(.sidenav) > hr');
    const hr_card = document.querySelectorAll('div:not(.bg-gradient-dark) hr');
    const text_btn = document.querySelectorAll('button:not(.btn) > .text-dark');
    const text_span = document.querySelectorAll('span.text-dark, .breadcrumb .text-dark');
    const text_span_white = document.querySelectorAll('span.text-white, .breadcrumb .text-white');
    const text_strong = document.querySelectorAll('strong.text-dark');
    const text_strong_white = document.querySelectorAll('strong.text-white');
    const text_nav_link = document.querySelectorAll('a.nav-link.text-dark');
    const text_nav_link_white = document.querySelectorAll('a.nav-link.text-white');
    const secondary = document.querySelectorAll('.text-secondary');
    const bg_gray_100 = document.querySelectorAll('.bg-gray-100');
    const bg_gray_600 = document.querySelectorAll('.bg-gray-600');
    const btn_text_dark = document.querySelectorAll('.btn.btn-link.text-dark, .material-icons.text-dark');
    const btn_text_white = document.querySelectorAll('.btn.btn-link.text-white, .material-icons.text-white');
    const card_border = document.querySelectorAll('.card.border');
    const card_border_dark = document.querySelectorAll('.card.border.border-dark');
    const mainContent_blur = document.querySelectorAll('.main-content .container-fluid .card');
    const svg = document.querySelectorAll('g');
  
    if (value) 
    {
      body.classList.add('dark-version');
      for (var i = 0; i < hr.length; i++) 
      {
        if (hr[i].classList.contains('dark')) 
        {
          hr[i].classList.remove('dark');
          hr[i].classList.add('light');
        }
      }
      for (var i = 0; i < mainContent_blur.length; i++) 
      {
        if (mainContent_blur[i].classList.contains('blur'))
            mainContent_blur[i].classList.remove('blur', 'shadow-blur');
      }
      for (var i = 0; i < hr_card.length; i++) {
        if (hr_card[i].classList.contains('dark')) {
        hr_card[i].classList.remove('dark');
        hr_card[i].classList.add('light');
        }
      }
      for (var i = 0; i < text_btn.length; i++) {
        if (text_btn[i].classList.contains('text-dark')) {
          text_btn[i].classList.remove('text-dark');
          text_btn[i].classList.add('text-white');
        }
      }
      for (var i = 0; i < text_span.length; i++) {
        if (text_span[i].classList.contains('text-dark')) {
          text_span[i].classList.remove('text-dark');
          text_span[i].classList.add('text-white');
        }
      }
      for (var i = 0; i < text_strong.length; i++) {
        if (text_strong[i].classList.contains('text-dark')) {
          text_strong[i].classList.remove('text-dark');
          text_strong[i].classList.add('text-white');
        }
      }
      for (var i = 0; i < text_nav_link.length; i++) {
        if (text_nav_link[i].classList.contains('text-dark')) {
          text_nav_link[i].classList.remove('text-dark');
          text_nav_link[i].classList.add('text-white');
        }
      }
      for (var i = 0; i < secondary.length; i++) {
        if (secondary[i].classList.contains('text-secondary')) {
          secondary[i].classList.remove('text-secondary');
          secondary[i].classList.add('text-white');
          secondary[i].classList.add('opacity-8');
        }
      }
      for (var i = 0; i < bg_gray_100.length; i++) {
        if (bg_gray_100[i].classList.contains('bg-gray-100')) {
          bg_gray_100[i].classList.remove('bg-gray-100');
          bg_gray_100[i].classList.add('bg-gray-600');
        }
      }
      for (var i = 0; i < btn_text_dark.length; i++) {
        btn_text_dark[i].classList.remove('text-dark');
        btn_text_dark[i].classList.add('text-white');
      }
      for (var i = 0; i < svg.length; i++) {
        if (svg[i].hasAttribute('fill')) {
          svg[i].setAttribute('fill', '#fff');
        }
      }
      for (var i = 0; i < card_border.length; i++) {
        card_border[i].classList.add('border-dark');
      }
      
    } 
    else 
    {
      body.classList.remove('dark-version');
      for (var i = 0; i < hr.length; i++) {
        if (hr[i].classList.contains('light')) {
          hr[i].classList.add('dark');
          hr[i].classList.remove('light');
        }
      }
      for (var i = 0; i < hr_card.length; i++) {
        if (hr_card[i].classList.contains('light')) {
          hr_card[i].classList.add('dark');
          hr_card[i].classList.remove('light');
        }
      }
      for (var i = 0; i < mainContent_blur.length; i++) {
        mainContent_blur[i].classList.add('blur', 'shadow-blur');
      }
      for (var i = 0; i < text_btn.length; i++) {
        if (text_btn[i].classList.contains('text-white')) {
          text_btn[i].classList.remove('text-white');
          text_btn[i].classList.add('text-dark');
        }
      }
      for (var i = 0; i < text_span_white.length; i++) {
        if (text_span_white[i].classList.contains('text-white') && !text_span_white[i].closest('.sidenav') && !text_span_white[i].closest('.card.bg-gradient-dark')) {
          text_span_white[i].classList.remove('text-white');
          text_span_white[i].classList.add('text-dark');
        }
      }
      for (var i = 0; i < text_strong_white.length; i++) {
        if (text_strong_white[i].classList.contains('text-white')) {
          text_strong_white[i].classList.remove('text-white');
          text_strong_white[i].classList.add('text-dark');
        }
      }
      for (var i = 0; i < text_nav_link_white.length; i++) {
        if (text_nav_link_white[i].classList.contains('text-white') && !text_nav_link_white[i].closest('.sidenav')) {
          text_nav_link_white[i].classList.remove('text-white');
          text_nav_link_white[i].classList.add('text-dark');
        }
      }
      for (var i = 0; i < secondary.length; i++) {
        if (secondary[i].classList.contains('text-white')) {
          secondary[i].classList.remove('text-white');
          secondary[i].classList.remove('opacity-8');
          secondary[i].classList.add('text-dark');
        }
      }
      for (var i = 0; i < bg_gray_600.length; i++) {
        if (bg_gray_600[i].classList.contains('bg-gray-600')) {
          bg_gray_600[i].classList.remove('bg-gray-600');
          bg_gray_600[i].classList.add('bg-gray-100');
        }
      }
      for (var i = 0; i < svg.length; i++) {
        if (svg[i].hasAttribute('fill')) {
          svg[i].setAttribute('fill', '#252f40');
        }
      }
      for (var i = 0; i < btn_text_white.length; i++) {
        if (!btn_text_white[i].closest('.card.bg-gradient-dark')) {
          btn_text_white[i].classList.remove('text-white');
          btn_text_white[i].classList.add('text-dark');
        }
      }
      for (var i = 0; i < card_border_dark.length; i++) {
        card_border_dark[i].classList.remove('border-dark');
      }
    }
}

const sidenavShow=document.getElementsByClassName('g-sidenav-show')[0];

export function NavbarMinimize(value) 
{
    if (value) 
    {
        sidenavShow.classList.remove('g-sidenav-pinned');
        sidenavShow.classList.add('g-sidenav-hidden');
    } 
    else 
    {
        sidenavShow.classList.remove('g-sidenav-hidden');
        sidenavShow.classList.add('g-sidenav-pinned');
    }
}

import { IsValid } from "./general.js";

/**
 * 
 * @param {HTMLElement} element 
 */
export function EnableRippleEffect(element)
{
    element.addEventListener("click", (event)=>{
        RippleEffect(event.target, event.offsetX, event.offsetY);
    });
}

/**
 * 
 * @param {HTMLElement} ele 
 * @param {Number} offsetX
 * @param {Number} offsetY
 * @param {Boolean} remove
 */
export function RippleEffect(ele, offsetX, offsetY, remove=true)
{
    /**@type {HTMLElement} */
    let effect = ele.querySelector(".ripple");
    if(!IsValid(effect))
    {
        effect = document.createElement("span");
        effect.classList.add("ripple");
    }
    effect.style.width = effect.style.height = Math.max(ele.offsetWidth, ele.offsetHeight) + "px";
    effect.style.position="absolute";
    ele.appendChild(effect);
    effect.style.left = offsetX - effect.offsetWidth / 2 + "px";
    effect.style.top = offsetY - effect.offsetHeight / 2 + "px";
    effect.classList.add("ripple");
    if(remove)
      setTimeout(()=>{
          if(IsValid(effect) && IsValid(effect.parentElement))
              effect.parentElement.removeChild(effect);
      }, 600);
}

/**
 * Add events that indicate when it is focused and when it is filled 
 * with content to all entries within a container. 
 * @param {HTMLElement} container 
 */
export function SetContainerInputAnimEvents(container)
{
    const inputs=container.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++)
        SetInputAnimEvents(inputs[i]);
}

/**
 * Add events to input that indicate when it is being focused and 
 * when it is filled with some content.
 * @param {HTMLInputElement} input Target input
 */
export function SetInputAnimEvents(input)
{
    input.addEventListener("focus", function(e){this.parentElement.classList.add("is-focused");});
    input.addEventListener("focusout", function (e) {
        "" != this.value && this.parentElement.classList.add("is-filled"), this.parentElement.classList.remove("is-focused");
    });
    input.addEventListener("keyup", function (e) {
        "" != this.value ? this.parentElement.classList.add("is-filled") : this.parentElement.classList.remove("is-filled");
    });
}