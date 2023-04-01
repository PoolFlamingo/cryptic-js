/**@type {typeof import("choices.js").default} */
const Choices_js=Choices;

var choices = document.getElementsByClassName("choices");

for (let i = 0; i < choices.length; i++) 
{
    const choice = choices.item(i);
    new Choices_js(choice, {searchEnabled:false, shouldSort: false})
}