const emojiFace = document.getElementById("emoji");
const generate = document.getElementById("btn");
const emo = ["😘", "🌭", "😒", "🥗", "😉", "🍔", "😍" ,"🌮"];
const displayEmo = () => {
    var a = Math.floor(Math.random() * emo.length);   
    let display = emo[a];
    emojiFace.innerHTML = display;
}
generate.addEventListener("click" , displayEmo);
