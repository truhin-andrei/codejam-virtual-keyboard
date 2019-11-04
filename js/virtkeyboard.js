
let container = document.createElement('div');
container.className = "container";
container.innerHTML = '<textarea id="textarea" class="textarea" name="text" id="" cols="30" rows="10" focused></textarea>';


document.body.append(container);

let textarea = document.getElementById('textarea');
textarea.focus();


const keys = {'Backquote':'`', 'Digit1': '1', "Digit2": '2', "Digit3": '3', "Digit4": '4', "Digit5": '5', "Digit6": '6', "Digit7": '7', "Digit8": '8', "Digit9": '9' , "Digit0": '0', 'Minus': '-', 'Equal': '=', 'Backspace': 'Backspace',
'Tab': 'Tab', 'KeyQ': 'q', 'KeyW': 'w', 'KeyE': 'e', 'KeyR': 'r', 'KeyT': 't' , 'KeyY': 'y', 'KeyU': 'u', 'KeyI': 'i', 'KeyO': 'o', 'KeyP': 'p', 'BracketLeft': '[' , 'BracketRight': ']', 'Backslash': '\\',
'CapsLock': 'CapsLock', 'KeyA': 'a', 'KeyS': 's', 'KeyD': 'd', 'KeyF': 'f', 'KeyG': 'g', 'KeyH': 'h', 'KeyJ': 'j', 'KeyK': 'k', 'KeyL': 'l', 'Semicolon': ';', 'Quote': '\'', 'Enter': 'Enter',
'ShiftLeft': 'Shift', 'KeyZ': 'z', 'KeyX': 'x', 'KeyC': 'c', 'KeyV': 'v', 'KeyB': 'b', 'KeyN': 'n', 'KeyM': 'm', 'Comma': ',', 'Period': '.', 'Slash': '/', 'ArrowUp': 'ArrowUp', 'ShiftRight': 'Shift',
'ControlLeft': 'Ctrl', 'Lang': 'En', 'AltLeft': 'Alt', "Space": ' ', 'AltRight': 'Alt', 'ControlRight': 'Ctrl', 'ArrowLeft': 'ArrowL', 'ArrowDown': 'ArrowD', 'ArrowRight': 'ArrowR', 'Delete': 'Delete'}
//const keys2 = {"Digit1": "1", "Digit2": "2", "Digit3":"3", "Digit4":"4", "Digit5":"5","Digit6": "6","Digit7": "7", "Digit8":"8", "Digit9":"9"};
const keysShiftOn =  {'Backquote':'~', 'Digit1': '!', "Digit2": '@', "Digit3": '#', "Digit4": '$', "Digit5": '%', "Digit6": '^', "Digit7": '&', "Digit8": '*', "Digit9": '(' , "Digit0": ')', 'Minus': '_', 'Equal': '+',}
const keysShiftOff =  {'Backquote':'`', 'Digit1': '1', "Digit2": '2', "Digit3": '3', "Digit4": '4', "Digit5": '5', "Digit6": '6', "Digit7": '7', "Digit8": '8', "Digit9": '9' , "Digit0": '0', 'Minus': '-', 'Equal': '=',}

const replacerRu = {
  "KeyQ":"й", "KeyW":"ц"  , "KeyE":"у" , "KeyR":"к" , "KeyT":"е", "KeyY":"н", "KeyU":"г", 
  "KeyI":"ш", "KeyO":"щ", "KeyP":"з" , "BracketLeft":"х" , "BracketRight":"ъ", "KeyA":"ф", "KeyS":"ы", 
  "KeyD":"в" , "KeyF":"а"  , "KeyG":"п" , "KeyH":"р" , "KeyJ":"о", "KeyK":"л", "KeyL":"д", 
  "Semicolon":"ж" , "Quote":"э"  , "KeyZ":"я", "KeyX":"ч", "KeyC":"с", "KeyV":"м", "KeyB":"и", 
  "KeyN":"т" , "KeyM":"ь"  , "Comma":"б" , "Period":"ю" , "Slash":".", 'Lang': 'Ру'
}; 
const replacerEn = {
  "KeyQ":"q", "KeyW":"w"  , "KeyE":"e" , "KeyR":"r" , "KeyT":"t", "KeyY":"y", "KeyU":"u", 
  "KeyI":"i", "KeyO":"o", "KeyP":"p" , "BracketLeft":"[" , "BracketRight":"]", "KeyA":"a", "KeyS":"s", 
  "KeyD":"d" , "KeyF":"f"  , "KeyG":"g" , "KeyH":"h" , "KeyJ":"j", "KeyK":"k", "KeyL":"l", 
  "Semicolon":";" , "Quote":"'"  , "KeyZ":"z", "KeyX":"x", "KeyC":"c", "KeyV":"v", "KeyB":"b", 
  "KeyN":"n" , "KeyM":"m"  , "Comma":"," , "Period":"." , "Slash":"/", 'Lang': 'En'
}; 


let keyboard = document.createElement('div');
keyboard.className = "keyboard";

for (item in keys) {
  let key = document.createElement('div');
  key.className = "key";
  if (item == "Backspace" || item == "Tab" || item == "ShiftLeft" || item == "ShiftRight" || item == "CapsLock" || item == "Enter" ){
    key.classList.add('key--wide');
  }
  if (item == "Space"){
    key.classList.add('key--space');
  }
  key.innerHTML =keys[item] ;
  key.dataset.key = item;
  keyboard.append(key);
};

function changeKeys(obj){
  for (item in obj) {
    let elem = document.querySelector('[data-key='+item+']');
    elem.innerHTML = obj[item];
  }
}

function changeKeyCase(up){
  
    for (item in keys) {
      if (up){
        
        if (item.includes('Key') || item == "Period" || item == "Comma" || item == 'BracketLeft' ||  item == 'BracketRight' || item == 'Semicolon' ||  item == 'Quote'){
          let elem = document.querySelector('[data-key='+item+']');
      elem.innerHTML = elem.innerHTML.toUpperCase();
      }
    }else {
      if (item.includes('Key') || item == "Period" || item == "Comma" || item == 'BracketLeft' ||  item == 'BracketRight' || item == 'Semicolon' ||  item == 'Quote'){
        let elem = document.querySelector('[data-key='+item+']');
        elem.innerHTML = elem.innerHTML.toLowerCase();
        }
    }
  }
}

function changeShift(shiftOn){
if (shiftOn){
  changeKeys(keysShiftOn);
  changeKeyCase(1);
  
}else {
  changeKeys(keysShiftOff);
  changeKeyCase(0);
  document.querySelector('[data-key=ShiftLeft]').classList.remove('shift');
  document.querySelector('[data-key=ShiftRight]').classList.remove('shift');
}
}

function changeLang(){
  if ( document.querySelector('[data-key=Lang]').innerHTML === "En"){
    changeKeys(replacerRu);
   } else  {
    changeKeys(replacerEn);
   }
}

function resetSpecialKey(){
    changeShift(0);
    document.querySelector('[data-key=ControlLeft]').classList.remove('ctrl');
  document.querySelector('[data-key=ControlRight]').classList.remove('ctrl');
  document.querySelector('[data-key=AltLeft]').classList.remove('alt');
  document.querySelector('[data-key=AltRight]').classList.remove('alt');
  
}


container.append(keyboard);


let capsLock = document.querySelector('[data-key=CapsLock]');


keyboard.addEventListener("mousedown", function () {
 if(event.target.dataset.key){
    
    let a = document.querySelector('[data-key='+event.target.dataset.key+']');
    let flag;// = false;
    a.classList.add('keydown');
   
   if(event.target.innerHTML === "Backspace"){
    
    textarea.value=textarea.value.substring(0,textarea.value.length -1);
    resetSpecialKey()
   }else if (event.target.innerHTML === "Tab"){
    
    event.preventDefault();
    textarea.value += '    ';
    resetSpecialKey()
   }else if (event.target.innerHTML === "Enter"){
    textarea.value += '\n';
    resetSpecialKey()
  }else if (event.target.innerHTML === "CapsLock"){
  
    a.classList.toggle('capslock');
    resetSpecialKey()
   }else if (event.target.innerHTML === "Shift"){
    if (document.querySelector('[data-key=ControlLeft]').classList.contains('ctrl') || document.querySelector('[data-key=ControlRight]').classList.contains('ctrl')
    || document.querySelector('[data-key=AltLeft]').classList.contains('alt') || document.querySelector('[data-key=AltRight]').classList.contains('alt')){
      resetSpecialKey();
    } else {
    a.classList.toggle('shift');
    changeShift(a.classList.contains('shift'));}
   }else if (event.target.innerHTML === "En"){
    changeKeys(replacerRu);
    resetSpecialKey()
   }else if (event.target.innerHTML === "Ру"){
    changeKeys(replacerEn);
    resetSpecialKey()
   }else if (event.target.innerHTML === "Alt"){
    if (document.querySelector('[data-key=ShiftLeft]').classList.contains('shift') || document.querySelector('[data-key=ShiftRight]').classList.contains('shift')){
      resetSpecialKey();
    } else if (document.querySelector('[data-key=ControlLeft]').classList.contains('ctrl') || document.querySelector('[data-key=ControlRight]').classList.contains('ctrl')){
      changeLang();
      resetSpecialKey();
    } else{
      a.classList.toggle('alt');
    }
    //a.classList.toggle('alt');
   // resetSpecialKey()
   }
   else if (event.target.innerHTML === "Ctrl"){

    if (document.querySelector('[data-key=ShiftLeft]').classList.contains('shift') || document.querySelector('[data-key=ShiftRight]').classList.contains('shift')){
      resetSpecialKey();
    } else if (document.querySelector('[data-key=AltLeft]').classList.contains('alt') || document.querySelector('[data-key=AltRight]').classList.contains('alt')){
      changeLang();
      resetSpecialKey();
    } else{
      a.classList.toggle('ctrl');
    }
 
    //a.classList.toggle('ctrl');
    //resetSpecialKey()
   }else
   
   if(capsLock.classList.contains('capslock')){
    textarea.value += event.target.innerHTML.toUpperCase();
    resetSpecialKey()
   }else{
  textarea.value += event.target.innerHTML;
  resetSpecialKey()
  }}
});


keyboard.addEventListener("mouseup", function () {
  if(event.target.dataset.key){
  let a = document.querySelector('[data-key='+event.target.dataset.key+']');
    a.classList.remove('keydown');
   textarea.focus();

     }

});

document.addEventListener('keydown', function() {
  
  if (event.code  ) {
    textarea.focus();
    let a = document.querySelector('[data-key='+event.code+']');
    //console.log(event.code);
    a.classList.add('keydown');
    if (event.code == "Tab"){
      event.preventDefault();
      textarea.value += '    ';
     }else if (event.code == "CapsLock"){
      a.classList.toggle('capslock');
     }else if (event.code == "ShiftLeft" || event.code == "ShiftRight"){
      changeShift(1);
     }
// substituting hardware Capslock to virtual one
let newKey =event.key;
     console.log(newKey);

     if (event.key != 'Enter'){
     if(capsLock.classList.contains('capslock')){
     
      if (event.code != "Backspace" && event.code != "Tab" && event.code != "CapsLock" && event.code != 'Enter' && event.code != "Space"){  
        
        textarea.addEventListener('input', function() {
         // console.log(newKey == 'Enter');
          //textarea.value=textarea.value.substring(0,textarea.value.length -1)+newKey.toUpperCase();
          
       });
      }
     }else{
      
     if (event.code != "Backspace" && event.code != "Tab" && event.code != "CapsLock" && event.code != 'Enter' && event.code != "Space"){  
     
     textarea.addEventListener('input', function() {
    //  debugger;
   console.log(newKey);
   // console.log(event.code);
 
      //textarea.value = textarea.value.substring(0,textarea.value.length -1)+newKey.toLowerCase();
      delete newKey;
    });
  }
  }
  }
}
});

document.addEventListener('keyup', function(event) {
  if (event.code ) {
    let a = document.querySelector('[data-key='+event.code+']');
    a.classList.remove('keydown');
    if (event.code == "ShiftLeft" || event.code == "ShiftRight"){
      changeShift(0);
     }
  }
});


