const imageArea = document.querySelector('.image-area');
const audio = document.querySelector('#audio');
const playButton = document.querySelector('.play-button');
const stopButton = document.querySelector('.stop-button');
const audioDescription = document.querySelector('.audio-description');

const images = [
  './image/image1.jpg',
  './image/image2.jpg',
  './image/image3.jpg',
  './image/image4.jpg',
  './image/image5.jpg',
  './image/image6.jpg',
  './image/image7.jpg',
  './image/image8.jpg',
  './image/image9.jpg',
  './image/image10.jpg',
  './image/image11.jpg',
  './image/image12.jpg'
];

const descriptions = [
  '一緒にドキドキして仲直り',
  '一緒にZして仲直り',
  'ﾀﾞﾝ!ﾀﾞﾝ!ﾀﾞﾀﾞﾝ!で仲直り',
  '降臨に感謝して仲直り',
  '一緒に生き埋めで仲直り',
  '一緒に叫んで仲直り',
  'ごめん！許す！で仲直り',
  '一緒に揺らされて仲直り',
  '一緒にクラップして仲直り',
  '一緒に沸いて仲直り',
  '一緒にブチ上がって仲直り',
  '私とあなたにされて仲直り'
];
/*
function getRandomIndex() {
  return Math.floor(Math.random() * images.length);
}
*/
function getRandomIndex() {
    const lastPlayedIndex = parseInt(localStorage.getItem('lastPlayedIndex'));
    let randomIndex = Math.floor(Math.random() * images.length);
  
    while (randomIndex === lastPlayedIndex) {
      randomIndex = Math.floor(Math.random() * images.length);
    }
  
    localStorage.setItem('lastPlayedIndex', randomIndex);
    return randomIndex;
}

function playAudio() {
  const index = getRandomIndex();
  const imagePath = images[index];
  const description = descriptions[index];

  audio.src = `./audio/audio${index + 1}.mp3`;
  imageArea.style.backgroundImage = `url(${imagePath})`;
  audioDescription.textContent = description;

  audio.play();
  playButton.classList.add('playing');
  stopButton.classList.remove('stopped');
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
  playButton.classList.remove('playing');
  stopButton.classList.add('stopped');
}

playButton.addEventListener('click', playAudio);
stopButton.addEventListener('click', stopAudio);
