const LABS_DONE = 1;

const buttonDiv = document.getElementById('buttonDiv1');
const labDiv = document.getElementById('labDiv');

let currentLab = null;

function buttonClicked(labId) {
  if(currentLab){
    currentLab.remove();
  }
  const lab = document.createElement('iframe');
  lab.src = `Lab${labId}.html`
  lab.style.width = "100%";
  lab.style.height = "calc(100% - 170px)"
  currentLab = lab;
  labDiv.append(lab);
}

for(let i = 1; i <= LABS_DONE; i++){
  const button = document.createElement('button');
  button.className = "button-1";
  button.innerHTML = "Лабораторна № " + i;
  button.onclick = buttonClicked.bind(null, i);
  buttonDiv.append(button);
}

buttonClicked(1);
