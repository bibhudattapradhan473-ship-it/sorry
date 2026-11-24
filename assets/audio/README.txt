==================================================
BACKGROUND MUSIC INSTRUCTIONS
==================================================

To add your favorite romantic song:

1. Copy your MP3 file into this directory:
   assets/audio/background-music.mp3

2. The website will automatically detect and play your song seamlessly across all chapters!

3. You can change the song title or path in `js/config.js` under the `music` section:
   music: {
     path: "assets/audio/background-music.mp3",
     title: "A Gentle Melody For Itu",
     defaultVolume: 0.5
   }

Note: If no audio file is provided, the website gracefully falls back to sweet ambient synthesizer chimes without any errors.
