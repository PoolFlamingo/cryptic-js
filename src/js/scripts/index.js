import { WindowButtons } from "../classes/elements/window-buttons.js";
import { ObfuscatorForm } from "../classes/forms/obfuscator-form.js";
import Translate from "../classes/global/translation.js";

await Translate.init();

const windowButtons=new WindowButtons("window-buttons");

const obfuscatorForm=new ObfuscatorForm("obfuscator-container");