// Get references to DOM elements
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');

// Music Information (this could be dynamic in a real application)
const musicDetails = {
    title: "Sample Song",
    artist: "Sample Artist"
};

// Update music information
songTitle.textContent = musicDetails.title;
artistName.textContent = musicDetails.artist;

// Add event listeners for buttons
playButton.addEventListener('click', () => {
    audioPlayer.play();
});

pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
});
