/**
 * A LITTLE WORLD OF SORRY ❤️
 * Centralized Transition Manager
 * Handles the 6 distinct cinematic chapter-to-chapter transitions
 */

class RomanticTransitionManager {
  constructor() {
    this.isTransitioning = false;
    this.overlay = document.getElementById('transition-container');
    this.duration = 850; // milliseconds
  }

  /**
   * Execute cinematic transition between fromChapter and toChapter
   * @param {number} fromIndex (1-7)
   * @param {number} toIndex (1-7)
   * @param {Function} onComplete callback when transition ends
   */
  transition(fromIndex, toIndex, onComplete) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    const fromScreen = document.getElementById(`chapter-${fromIndex}`);
    const toScreen = document.getElementById(`chapter-${toIndex}`);

    if (!fromScreen || !toScreen) {
      this.isTransitioning = false;
      if (onComplete) onComplete();
      return;
    }

    // Determine transition type based on progression
    const isForward = toIndex > fromIndex;
    const transitionNumber = isForward ? fromIndex : toIndex;

    this.runTransitionEffect(transitionNumber, isForward, fromScreen, toScreen, () => {
      this.isTransitioning = false;
      if (onComplete) onComplete();
    });
  }

  runTransitionEffect(num, isForward, fromScreen, toScreen, done) {
    // 1. Play sound chime
    if (window.romanticChimes) {
      window.romanticChimes.playSoftTap();
    }

    // Clean any prior transition classes
    this.clearAllTransitionClasses(fromScreen, toScreen);

    // Prepare next screen
    toScreen.style.display = 'flex';
    toScreen.style.visibility = 'visible';

    // Apply specific transition
    switch (num) {
      case 1:
        this.transition01(isForward, fromScreen, toScreen, done);
        break;
      case 2:
        this.transition02(isForward, fromScreen, toScreen, done);
        break;
      case 3:
        this.transition03(isForward, fromScreen, toScreen, done);
        break;
      case 4:
        this.transition04(isForward, fromScreen, toScreen, done);
        break;
      case 5:
        this.transition05(isForward, fromScreen, toScreen, done);
        break;
      case 6:
        this.transition06(isForward, fromScreen, toScreen, done);
        break;
      default:
        this.defaultTransition(fromScreen, toScreen, done);
        break;
    }
  }

  // Transition 01: Welcome -> Big Sorry (Glowing Heart Expand)
  transition01(isForward, fromScreen, toScreen, done) {
    this.overlay.className = 't1-active';
    this.overlay.innerHTML = `<div class="t1-heart-portal">♥</div>`;

    if (window.particleEngine) {
      window.particleEngine.burstHearts(window.innerWidth / 2, window.innerHeight / 2, 20);
    }

    fromScreen.classList.add('t1-out');
    toScreen.classList.add('t1-in');

    setTimeout(() => {
      this.finishTransition(fromScreen, toScreen, done);
    }, this.duration);
  }

  // Transition 02: Big Sorry -> Sorry Notes (Origami Paper Unfold)
  transition02(isForward, fromScreen, toScreen, done) {
    this.overlay.className = 't2-active';
    this.overlay.innerHTML = `
      <div class="t2-origami-paper">
        <div style="font-family: var(--font-script); font-size: 2rem; color: var(--color-burgundy);">
          Unfolding all my love & apologies for you...
        </div>
      </div>`;

    fromScreen.classList.add('t2-out');
    toScreen.classList.add('t2-in');

    setTimeout(() => {
      this.finishTransition(fromScreen, toScreen, done);
    }, this.duration);
  }

  // Transition 03: Sorry Notes -> Open When (Floating Notes Swarm)
  transition03(isForward, fromScreen, toScreen, done) {
    this.overlay.className = 't3-active';
    this.overlay.innerHTML = `
      <div class="t3-notes-swarm">
        <div class="t3-mini-note">💌</div>
        <div class="t3-mini-note">♥</div>
        <div class="t3-mini-note">✨</div>
        <div class="t3-mini-note">🌸</div>
        <div class="t3-mini-note">💖</div>
      </div>`;

    fromScreen.classList.add('t3-out');
    toScreen.classList.add('t3-in');

    setTimeout(() => {
      this.finishTransition(fromScreen, toScreen, done);
    }, this.duration);
  }

  // Transition 04: Open When -> Memories (Petal Breeze Curtain)
  transition04(isForward, fromScreen, toScreen, done) {
    this.overlay.className = 't4-active';
    this.overlay.innerHTML = `<div class="t4-petal-curtain"></div>`;

    if (window.particleEngine) {
      window.particleEngine.burstHearts(window.innerWidth / 2, window.innerHeight / 2, 15);
    }

    fromScreen.classList.add('t4-out');
    toScreen.classList.add('t4-in');

    setTimeout(() => {
      this.finishTransition(fromScreen, toScreen, done);
    }, this.duration);
  }

  // Transition 05: Memories -> Heart Letter (Photos Scatter & Wax Seal Halo)
  transition05(isForward, fromScreen, toScreen, done) {
    this.overlay.className = 't5-active';
    this.overlay.innerHTML = `<div class="t5-wax-halo"></div>`;

    fromScreen.classList.add('t5-out');
    toScreen.classList.add('t5-in');

    setTimeout(() => {
      this.finishTransition(fromScreen, toScreen, done);
    }, this.duration);
  }

  // Transition 06: Heart Letter -> Final Surprise (Cinematic Light Explosion)
  transition06(isForward, fromScreen, toScreen, done) {
    this.overlay.className = 't6-active';
    this.overlay.innerHTML = `<div class="t6-cinematic-beam"></div>`;

    if (window.particleEngine) {
      window.particleEngine.burstHearts(window.innerWidth / 2, window.innerHeight / 2, 30);
    }

    fromScreen.classList.add('t6-out');
    toScreen.classList.add('t6-in');

    setTimeout(() => {
      this.finishTransition(fromScreen, toScreen, done);
    }, 950);
  }

  defaultTransition(fromScreen, toScreen, done) {
    fromScreen.classList.add('t1-out');
    toScreen.classList.add('t1-in');
    setTimeout(() => {
      this.finishTransition(fromScreen, toScreen, done);
    }, 600);
  }

  finishTransition(fromScreen, toScreen, done) {
    fromScreen.classList.remove('active');
    toScreen.classList.add('active');

    this.clearAllTransitionClasses(fromScreen, toScreen);

    // Clear overlay
    this.overlay.className = '';
    this.overlay.innerHTML = '';

    // Scroll active screen to top
    toScreen.scrollTop = 0;
    window.scrollTo(0, 0);

    if (done) done();
  }

  clearAllTransitionClasses(fromScreen, toScreen) {
    const classes = [
      't1-out', 't1-in',
      't2-out', 't2-in',
      't3-out', 't3-in',
      't4-out', 't4-in',
      't5-out', 't5-in',
      't6-out', 't6-in'
    ];
    fromScreen.classList.remove(...classes);
    toScreen.classList.remove(...classes);
  }
}

window.transitionManager = new RomanticTransitionManager();
