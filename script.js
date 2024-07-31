//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
    const buttonsDiv = document.getElementById('buttons');
    let currentAudio = null;

    // Create buttons for each sound
    sounds.forEach(sound => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = sound;
        button.addEventListener('click', () => playSound(sound));
        buttonsDiv.appendChild(button);
    });

    // Add stop button
    const stopButton = document.createElement('button');
    stopButton.classList.add('btn');
    stopButton.textContent = 'stop';
    stopButton.addEventListener('click', stopSound);
    buttonsDiv.appendChild(stopButton);

    // Function to play sound
    function playSound(sound) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    }

    // Function to stop sound
    function stopSound() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
    }
});
