# A Little World of Sorry ❤️

A premium, interactive, romantic apology website designed especially for **Itu** by **Bubu**.

Built with pure **HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no dependencies, no backend, no build steps required. Runs locally, on Android, iPhone, desktop browsers, and is ready for one-click deployment to GitHub Pages.

---

## 🌟 Features Overview

- **7 Full-Screen Chapters**:
  1. **Magical Welcome**: Full-screen dreamy atmosphere with floating hearts, twinkling stars, and a central interactive 3D envelope with a wax seal that opens on hover/tap.
  2. **The Big Sorry**: An adorable animated teddy bear holding a glowing heart, paired with sincere, romantic apology messages.
  3. **50 Little Sorry Notes**: Exactly 50 unique, heartfelt, non-repetitive apology notes with interactive card flipping, category filters, progress bar, opened counter, and random note picker.
  4. **Open When... Letters**: An illustrated glowing memory jar with 5 special envelopes (*Open When You're Angry, Sad, Miss Me, Need A Smile, Want To Feel Loved*).
  5. **Our Little Memories**: A romantic scrapbook gallery featuring Polaroid-style photo frames, washi tape, handwritten captions, and a responsive lightbox with zoom controls.
  6. **A Letter From My Heart**: A large vintage envelope with a wax seal stamped "B + I" that slides open to reveal an emotional letter with an animated handwritten signature.
  7. **The Final Surprise**: A glowing heart, emotional reflection, and two interactive choices (*"Yes, Let's Talk ❤️"* with celebratory confetti and heart explosions, or *"I Need A Little Time 🌷"* with gentle respect for her boundaries and space), plus a Replay button.

- **6 Distinct Cinematic Transitions**:
  - Chapter 1 → 2: Glowing heart portal emerges from envelope and expands.
  - Chapter 2 → 3: Screen folds into an origami paper sheet that unfolds into the 50 notes.
  - Chapter 3 → 4: Small paper notes float upwards in a vortex into the memory jar.
  - Chapter 4 → 5: Rose petal curtain sweeps across the screen to reveal the scrapbook.
  - Chapter 5 → 6: Polaroid photos drift away as a wax-sealed envelope centers.
  - Chapter 6 → 7: Envelope releases a radiant glowing heart expanding into full-screen cinematic reveal.

- **Background Music & Web Audio Chimes**:
  - Seamless background music player with rotating vinyl disc, equalizer bars, play/pause controls, and volume persistence.
  - Graceful fallback: Built-in romantic Web Audio API synthesizer chimes when clicking notes, seals, and buttons.

- **Centralized Configuration (`js/config.js`)**:
  - Easily change nicknames, all 50 notes, 5 open-when letters, personal letter, photo paths, and music in one file.

---

## 🚀 How to Run Locally

### Option 1: Direct File Opening
Double click `index.html` in your file explorer to open it directly in Google Chrome, Microsoft Edge, Safari, or Firefox.

### Option 2: Local HTTP Server (Python)
If you have Python installed, run:
```bash
python -m http.server 8000
```
Then open your browser at:
`http://localhost:8000`

---

## 🎵 How to Add Background Music

1. Place your romantic song in the `assets/audio/` directory named `background-music.mp3`:
   ```text
   assets/audio/background-music.mp3
   ```
2. You can also customize the track title in `js/config.js`:
   ```javascript
   music: {
     path: "assets/audio/background-music.mp3",
     title: "Your Song Title",
     defaultVolume: 0.5
   }
   ```
*If no MP3 is added, the site automatically uses sweet ambient musical chimes.*

---

## 📷 How to Add Your Real Photographs

1. Place your pictures in the `assets/images/` folder (e.g. `photo1.jpg`, `photo2.jpg`, etc.).
2. Open `js/config.js` and update the `memories` array:
   ```javascript
   memories: [
     {
       id: 1,
       title: "Our First Date",
       date: "May 14",
       caption: "The day I fell in love with your smile.",
       image: "assets/images/photo1.jpg",
       rotation: -3
     },
     // ...
   ]
   ```
*(High-quality illustrated SVG placeholders are pre-installed so the gallery looks finished even before adding photos.)*

---

## ✍️ How to Edit Personal Messages

Open `js/config.js`:
- Edit `recipientName` and `senderName`.
- Customize any of the **50 Little Notes** in `CONFIG.notes`.
- Customize any of the **5 Open When Letters** in `CONFIG.openWhenLetters`.
- Customize the personal letter in `CONFIG.heartLetter`.
- Customize the final question and responses in `CONFIG.finalSurprise`.

---

## 🌐 Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. In your repository on GitHub, go to **Settings** → **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**.
5. Within 1–2 minutes, your website will be live at `https://<username>.github.io/<repo-name>/`!

---

## 📱 Mobile Responsiveness
Designed mobile-first and tested for:
- 360px, 375px, 390px, 414px, 430px (iPhone & Android devices)
- 768px (iPads & Tablets)
- 1024px & 1440px (Laptops & Desktops)
- Includes safe-area inset support for modern smartphone displays with notches.
