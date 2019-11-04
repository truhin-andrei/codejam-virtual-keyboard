
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
'ControlLeft': 'Control', 'MetaLeft': 'Win', 'AltLeft': 'Alt', "Space": ' ', 'AltRight': 'Alt', 'ControlRight': 'Control', 'ArrowLeft': 'ArrowL', 'ArrowDown': 'ArrowD', 'ArrowRight': 'ArrowR', 'Delete': 'Delete'}
//const keys2 = {"Digit1": "1", "Digit2": "2", "Digit3":"3", "Digit4":"4", "Digit5":"5","Digit6": "6","Digit7": "7", "Digit8":"8", "Digit9":"9"};
const keysShift =  {'Backquote':'~', 'Digit1': '!', "Digit2": '@', "Digit3": '#', "Digit4": '$', "Digit5": '%', "Digit6": '^', "Digit7": '&', "Digit8": '*', "Digit9": '(' , "Digit0": ')', 'Minus': '_', 'Equal': '+',}
const replacerRu = {
  "KeyQ":"й", "KeyW":"ц"  , "KeyE":"у" , "KeyR":"к" , "KeyT":"е", "KeyY":"н", "KeyU":"г", 
  "KeyI":"ш", "KeyO":"щ", "KeyP":"з" , "BracketLeft":"х" , "BracketRight":"ъ", "KeyA":"ф", "KeyS":"ы", 
  "KeyD":"в" , "KeyF":"а"  , "KeyG":"п" , "KeyH":"р" , "KeyJ":"о", "KeyK":"л", "KeyL":"д", 
  "Semicolon":"ж" , "Quote":"э"  , "KeyZ":"я", "KeyX":"ч", "KeyC":"с", "KeyV":"м", "KeyB":"и", 
  "KeyN":"т" , "KeyM":"ь"  , "Comma":"б" , "Period":"ю" , "Slash":"."
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
  if (up){
    for (item in keys) {
      if (item.includes('Key')){
      let elem = document.querySelector('[data-key='+item+']');
      elem.innerHTML = elem.innerHTML.toUpperCase();
      }
    }
  }
}

function changeShift(shiftOn){
if (shiftOn){
  changeKeys(keysShift);
  changeKeyCase(1);
  
}else {
  changeKeys(keys);
  changeKeyCase(0);
  document.querySelector('[data-key=ShiftLeft]').classList.remove('shift');
  document.querySelector('[data-key=ShiftRight]').classList.remove('shift');
}
}

// function resetShift(){
//   if (document.querySelector('[data-key=Shift]').classList.contains('shift')){
//     changeShift(0);
//   }
// }


container.append(keyboard);

changeKeys(replacerRu);


let capsLock = document.querySelector('[data-key=CapsLock]');


keyboard.addEventListener("mousedown", function () {
 if(event.target.dataset.key){
    //let dataset = Number(event.target.dataset.key);
    let a = document.querySelector('[data-key='+event.target.dataset.key+']');
    a.classList.add('keydown');
   // keyPress(37);
   if(event.target.innerHTML === "Backspace"){
    
    textarea.value=textarea.value.substring(0,textarea.value.length -1);
    changeShift(0);
   }else if (event.target.innerHTML === "Tab"){
    
    event.preventDefault();
    textarea.value += '    ';
    changeShift(0);
   }else if (event.target.innerHTML === "Enter"){
    textarea.value += '\n';
    changeShift(0);
  }else if (event.target.innerHTML === "CapsLock"){
    //capsLock = !capsLock;
    a.classList.toggle('capslock');
    changeShift(0);
   }else if (event.target.innerHTML === "Shift"){
    //capsLock = !capsLock;
    a.classList.toggle('shift');
    changeShift(a.classList.contains('shift'));
   }else
   
   if(capsLock.classList.contains('capslock')){
    textarea.value += event.target.innerHTML.toUpperCase();
    changeShift(0);
   }else{
  textarea.value += event.target.innerHTML;
 changeShift(0);
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
    
  }
});


