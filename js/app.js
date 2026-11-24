/**
 * A LITTLE WORLD OF SORRY ❤️
 * Main Application Orchestrator
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Subsystems
  window.musicController = new RomanticMusicController(CONFIG);
  window.notesController = new RomanticNotesController(CONFIG);
  window.lettersController = new RomanticLettersController(CONFIG);
  window.galleryController = new RomanticGalleryController(CONFIG);
  window.navController = new RomanticNavigationController();

  // 2. Populate Dynamic Copy from CONFIG
  populateTextContent();

  // 3. Setup Chapter 01 (Magical Welcome Envelope)
  setupWelcomeEnvelope();

  // 4. Setup Chapter 02 (Big Sorry Button)
  setupBigSorry();

  // 5. Setup Chapter 06 (Wax Sealed Heart Letter)
  setupHeartLetter();

  // 6. Setup Chapter 07 (Final Surprise & Options)
  setupFinalSurprise();
});

/**
 * Injects editable strings from CONFIG into the DOM
 */
function populateTextContent() {
  // Title & Names
  document.title = CONFIG.websiteTitle || "A Little World of Sorry ❤️";

  const brandTitles = document.querySelectorAll('.brand-title');
  brandTitles.forEach(el => el.textContent = CONFIG.websiteTitle);

  // Chapter 01
  const welcomeHeading = document.getElementById('welcome-heading');
  const welcomeSubheading = document.getElementById('welcome-subheading');
  const welcomeMsg = document.getElementById('welcome-supporting-msg');
  const welcomeBtn = document.getElementById('btn-open-welcome');

  if (welcomeHeading) welcomeHeading.textContent = CONFIG.welcome.heading;
  if (welcomeSubheading) welcomeSubheading.textContent = CONFIG.welcome.subheading;
  if (welcomeMsg) welcomeMsg.textContent = CONFIG.welcome.supportingMessage;
  if (welcomeBtn) welcomeBtn.textContent = CONFIG.welcome.buttonText;

  // Chapter 02
  const sorryHeading = document.getElementById('big-sorry-heading');
  const sorryBadge = document.getElementById('big-sorry-badge');
  const sorryBtn = document.getElementById('btn-to-notes');
  const sorryParagraphsWrap = document.getElementById('big-sorry-paragraphs');

  if (sorryHeading) sorryHeading.textContent = CONFIG.bigSorry.heading;
  if (sorryBadge) sorryBadge.textContent = CONFIG.bigSorry.badge || "Straight From My Heart";
  if (sorryBtn) sorryBtn.textContent = CONFIG.bigSorry.buttonText;

  if (sorryParagraphsWrap && CONFIG.bigSorry.messageParagraphs) {
    sorryParagraphsWrap.innerHTML = '';
    CONFIG.bigSorry.messageParagraphs.forEach(pText => {
      const p = document.createElement('p');
      p.className = 'apology-p';
      p.textContent = pText;
      sorryParagraphsWrap.appendChild(p);
    });
  }

  // Chapter 03 Notes Heading
  const notesHeading = document.getElementById('notes-section-heading');
  const notesSubheading = document.getElementById('notes-section-subheading');
  if (notesHeading) notesHeading.textContent = CONFIG.notesSection.heading;
  if (notesSubheading) notesSubheading.textContent = CONFIG.notesSection.subheading;

  // Chapter 05 Gallery Heading
  const galleryHeading = document.getElementById('gallery-section-heading');
  const gallerySubheading = document.getElementById('gallery-section-subheading');
  if (galleryHeading) galleryHeading.textContent = CONFIG.gallerySection.heading;
  if (gallerySubheading) gallerySubheading.textContent = CONFIG.gallerySection.subheading;

  // Chapter 06 Heart Letter
  const letterHeading = document.getElementById('heart-letter-heading');
  const letterSalutation = document.getElementById('heart-letter-salutation');
  const letterClosing = document.getElementById('heart-letter-closing');
  const letterSignature = document.getElementById('heart-letter-signature');
  const letterBodyWrap = document.getElementById('heart-letter-paragraphs');

  if (letterHeading) letterHeading.textContent = CONFIG.heartLetter.heading;
  if (letterSalutation) letterSalutation.textContent = CONFIG.heartLetter.salutation;
  if (letterClosing) letterClosing.textContent = CONFIG.heartLetter.closing;
  if (letterSignature) letterSignature.textContent = CONFIG.heartLetter.signature;

  if (letterBodyWrap && CONFIG.heartLetter.paragraphs) {
    letterBodyWrap.innerHTML = '';
    CONFIG.heartLetter.paragraphs.forEach(pText => {
      const p = document.createElement('p');
      p.textContent = pText;
      letterBodyWrap.appendChild(p);
    });
  }

  // Chapter 07 Final Surprise
  const finalHeading = document.getElementById('final-heading');
  const finalMessage = document.getElementById('final-message');
  const finalQuestion = document.getElementById('final-question');
  const btnYes = document.getElementById('btn-option-yes');
  const btnTime = document.getElementById('btn-option-time');
  const btnReplay = document.getElementById('btn-replay-experience');

  if (finalHeading) finalHeading.textContent = CONFIG.finalSurprise.heading;
  if (finalMessage) finalMessage.textContent = CONFIG.finalSurprise.message;
  if (finalQuestion) finalQuestion.textContent = CONFIG.finalSurprise.question;
  if (btnYes) btnYes.textContent = CONFIG.finalSurprise.options.yes.text;
  if (btnTime) btnTime.textContent = CONFIG.finalSurprise.options.time.text;
  if (btnReplay) btnReplay.textContent = CONFIG.finalSurprise.replayText || "Replay Our Little Story ↺";
}

/**
 * Chapter 01: Welcome Envelope Interaction
 */
function setupWelcomeEnvelope() {
  const envelopeWrap = document.getElementById('welcome-envelope-wrapper');
  const envelope3D = document.getElementById('welcome-envelope-3d');
  const openBtn = document.getElementById('btn-open-welcome');

  let isOpen = false;

  const triggerEnvelopeOpen = () => {
    if (!isOpen) {
      isOpen = true;
      if (envelope3D) envelope3D.classList.add('open');

      if (window.romanticChimes) {
        window.romanticChimes.playLoveChime();
      }
      if (window.particleEngine) {
        const rect = envelopeWrap ? envelopeWrap.getBoundingClientRect() : null;
        const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
        const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
        window.particleEngine.burstHearts(x, y, 24);
      }
    }
  };

  if (envelopeWrap) {
    envelopeWrap.addEventListener('click', triggerEnvelopeOpen);
  }

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      triggerEnvelopeOpen();
      // Smoothly transition to Chapter 02 after flap opens
      setTimeout(() => {
        if (window.navController) {
          window.navController.goToChapter(2);
        }
      }, 550);
    });
  }
}

/**
 * Chapter 02: Big Sorry Button
 */
function setupBigSorry() {
  const btn = document.getElementById('btn-to-notes');
  if (btn) {
    btn.addEventListener('click', () => {
      if (window.navController) {
        window.navController.goToChapter(3);
      }
    });
  }
}

/**
 * Chapter 06: Wax-Sealed Heart Letter Unfolding
 */
function setupHeartLetter() {
  const envelope = document.getElementById('big-heart-envelope');
  const paper = document.getElementById('heart-letter-paper');
  const nextBtn = document.getElementById('btn-to-final-surprise');

  if (envelope && paper) {
    envelope.addEventListener('click', () => {
      if (window.romanticChimes) {
        window.romanticChimes.playLoveChime();
      }
      if (window.particleEngine) {
        const rect = envelope.getBoundingClientRect();
        window.particleEngine.burstHearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 28);
      }

      envelope.style.transform = 'scale(0.8) translateY(-30px)';
      envelope.style.opacity = '0';

      setTimeout(() => {
        envelope.style.display = 'none';
        paper.classList.add('revealed');
        // Scroll smoothly to letter
        paper.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 450);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (window.navController) {
        window.navController.goToChapter(7);
      }
    });
  }
}

/**
 * Chapter 07: Final Options and Replay
 */
function setupFinalSurprise() {
  const btnYes = document.getElementById('btn-option-yes');
  const btnTime = document.getElementById('btn-option-time');
  const outcomeBox = document.getElementById('final-outcome-box');
  const outcomeBadge = document.getElementById('outcome-badge');
  const outcomeHeading = document.getElementById('outcome-heading');
  const outcomeMessage = document.getElementById('outcome-message');
  const optionsRow = document.querySelector('.final-options-row');
  const btnReplay = document.getElementById('btn-replay-experience');

  if (btnYes) {
    btnYes.addEventListener('click', () => {
      const data = CONFIG.finalSurprise.options.yes;
      if (outcomeBadge) outcomeBadge.textContent = data.badge;
      if (outcomeHeading) outcomeHeading.textContent = data.celebrationHeading;
      if (outcomeMessage) outcomeMessage.textContent = data.celebrationMessage;

      if (optionsRow) optionsRow.style.display = 'none';
      if (outcomeBox) outcomeBox.classList.add('active');

      if (window.romanticChimes) {
        window.romanticChimes.playLoveChime();
      }
      if (window.particleEngine) {
        window.particleEngine.celebrateConfetti();
        window.particleEngine.burstHearts(window.innerWidth / 2, window.innerHeight / 2, 40);
      }
    });
  }

  if (btnTime) {
    btnTime.addEventListener('click', () => {
      const data = CONFIG.finalSurprise.options.time;
      if (outcomeBadge) outcomeBadge.textContent = data.badge;
      if (outcomeHeading) outcomeHeading.textContent = data.respectHeading;
      if (outcomeMessage) outcomeMessage.textContent = data.respectMessage;

      if (optionsRow) optionsRow.style.display = 'none';
      if (outcomeBox) outcomeBox.classList.add('active');

      if (window.romanticChimes) {
        window.romanticChimes.playSoftTap();
      }
    });
  }

  if (btnReplay) {
    btnReplay.addEventListener('click', () => {
      // Reset outcome UI
      if (outcomeBox) outcomeBox.classList.remove('active');
      if (optionsRow) optionsRow.style.display = 'flex';

      // Reset Chapter 6 envelope if opened
      const env6 = document.getElementById('big-heart-envelope');
      const paper6 = document.getElementById('heart-letter-paper');
      if (env6) {
        env6.style.display = 'flex';
        env6.style.transform = '';
        env6.style.opacity = '1';
      }
      if (paper6) {
        paper6.classList.remove('revealed');
      }

      // Smoothly navigate back to Chapter 1
      if (window.navController) {
        window.navController.goToChapter(1);
      }
    });
  }
}
