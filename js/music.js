/**
 * A LITTLE WORLD OF SORRY ❤️
 * Background Music Controller
 */

class RomanticMusicController {
  constructor(config) {
    this.config = config.music || {};
    this.audioPath = this.config.path || 'assets/audio/background-music.mp3';
    this.title = this.config.title || 'A Romantic Melody';
    this.defaultVolume = this.config.defaultVolume !== undefined ? this.config.defaultVolume : 0.5;

    this.audio = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.hasUserInteracted = false;
    this.audioAvailable = true;

    this.init();
  }

  init() {
    this.audio = new Audio();
    this.audio.src = this.audioPath;
    this.audio.loop = true;
    this.audio.volume = this.defaultVolume;
    this.audio.preload = 'metadata';

    // Error handling if mp3 file is not yet placed
    this.audio.addEventListener('error', (e) => {
      console.warn('Background music file not found at:', this.audioPath, '. Graceful chime fallback active.');
      this.audioAvailable = false;
      this.updateStatus('Gentle chimes active');
    });

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.updateUI(true);
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.updateUI(false);
    });

    // Bind DOM elements
    this.btnToggle = document.getElementById('music-toggle-btn');
    this.discIcon = document.getElementById('music-disc');
    this.statusText = document.getElementById('music-status-text');
    this.titleText = document.getElementById('music-title-text');
    this.equalizer = document.getElementById('music-equalizer');

    if (this.titleText) {
      this.titleText.textContent = this.title;
    }

    if (this.btnToggle) {
      this.btnToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlay();
      });
    }

    // Auto-prompt on first click anywhere if configured
    const enableAudioOnFirstTap = () => {
      if (!this.hasUserInteracted) {
        this.hasUserInteracted = true;
        if (window.romanticChimes) {
          window.romanticChimes.ensureContext();
        }
      }
      document.removeEventListener('click', enableAudioOnFirstTap);
      document.removeEventListener('touchstart', enableAudioOnFirstTap);
    };

    document.addEventListener('click', enableAudioOnFirstTap, { once: true });
    document.addEventListener('touchstart', enableAudioOnFirstTap, { once: true });
  }

  togglePlay() {
    if (!this.audioAvailable) {
      // If audio file is missing, play a sweet romantic chime and notify user
      if (window.romanticChimes) {
        window.romanticChimes.playLoveChime();
      }
      this.updateStatus('Add your MP3 file ❤️');
      setTimeout(() => this.updateStatus('Playing romantic chimes'), 3000);
      return;
    }

    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    if (!this.audio) return;
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.updateUI(true);
        })
        .catch((error) => {
          console.log('Audio playback waiting for user tap:', error);
          this.updateStatus('Tap to play');
        });
    }
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.updateUI(false);
  }

  updateStatus(text) {
    if (this.statusText) {
      this.statusText.textContent = text;
    }
  }

  updateUI(playing) {
    if (this.discIcon) {
      this.discIcon.classList.toggle('playing', playing);
    }
    if (this.equalizer) {
      this.equalizer.classList.toggle('playing', playing);
    }
    if (this.btnToggle) {
      this.btnToggle.innerHTML = playing ? '❚❚' : '▶';
      this.btnToggle.setAttribute('aria-label', playing ? 'Pause background music' : 'Play background music');
    }
    this.updateStatus(playing ? 'Playing music' : 'Paused');
  }
}

window.musicController = null;
