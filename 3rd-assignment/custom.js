let magicBox = document.getElementById("randomColorBox");

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function clickMagic(){
    magicBox.style.backgroundColor = getRandomColor();
    console.log(magicBox.style.backgroundColor = getRandomColor());
}
