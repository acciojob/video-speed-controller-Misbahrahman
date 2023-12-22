const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


let ele = document.getElementById("vid");

function forward(){
    ele.currentTime += 10;
}

let e = document.getElementsByTagName("video");

function backward(){
    ele.currentTime -= 10;
}