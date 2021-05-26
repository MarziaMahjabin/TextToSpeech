let button =document.querySelector(".button")

button.addEventListener('click', say);

function say() {
  let input = document.querySelector(".input").value;
  var speech = new SpeechSynthesisUtterance(input);
  voices = window.speechSynthesis.getVoices()
  speech.lang= 'en-US';
  speech.text= input;
  speech.volume= 5;
  speech.rate= 1;
  speech.pitch= 1;

  window.speechSynthesis.speak(speech)
  console.log(speech);
}
