

const video = document.querySelector('.player__video.viewer');

const buttons = document.querySelectorAll('.player__button');
const progress = document.querySelector('.progress__filled')
const playButton = buttons[0];

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.innerText = '❚❚'
    } else {
        video.pause();
        playButton.innerText = '►'
    }
})
video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.flexBasis = `${percent}%`;
})

video.onplay = () => {
    console.log(video.currentTime);
}

playButton.addEventListener('click', () => {
    if (!video) return;
    const currentState = playButton.innerText;
    if (currentState === '►') {
        video.play();
        playButton.innerText = '❚❚'
    } else {
        video.pause();
        playButton.innerText = '►'
        console.log(video);
    }
})
const sliders = document.querySelectorAll('.player__slider')
const volumeSlider = sliders[0];
const playSpeedSlider = sliders[1];
console.log(volumeSlider);
console.log(playSpeedSlider);
console.log(video);
volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value;
})

playSpeedSlider.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
})


const backButton = buttons[1];
backButton.addEventListener('click', () => {
    video.currentTime += Number(backButton.dataset.skip);
})
const afterButton = buttons[2];
afterButton.addEventListener('click', () => {
    video.currentTime += Number(afterButton.dataset.skip);
})