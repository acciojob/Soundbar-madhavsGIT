//your JS code here. If required.
const buttons = document.querySelectorAll('.sound-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    });
});

function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
}
