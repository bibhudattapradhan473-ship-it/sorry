/**
 * A LITTLE WORLD OF SORRY ❤️
 * Chapter 04: "Open When..." Letters Controller
 */

class RomanticLettersController {
  constructor(config) {
    this.letters = config.openWhenLetters || [];
    this.container = document.getElementById('open-when-list');
    this.modal = document.getElementById('letter-unfolded-modal');
    this.currentLetter = null;

    this.init();
  }

  init() {
    this.renderList();
    this.bindEvents();
  }

  renderList() {
    if (!this.container) return;
    this.container.innerHTML = '';

    const icons = {
      'angry': '🌿',
      'sad': '🫂',
      'miss-me': '🌙',
      'need-smile': '☀️',
      'feel-loved': '❤️'
    };

    this.letters.forEach((letter) => {
      const item = document.createElement('div');
      item.className = 'open-when-envelope-item';
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', letter.title);

      const icon = icons[letter.id] || '💌';

      item.innerHTML = `
        <div class="letter-item-left">
          <div class="letter-mini-icon">${icon}</div>
          <div>
            <h4 class="letter-item-title">${letter.title}</h4>
            <p class="letter-item-summary">${letter.summary}</p>
          </div>
        </div>
        <div class="letter-item-arrow">➔</div>
      `;

      const handleOpen = () => this.openLetter(letter, item);
      item.addEventListener('click', handleOpen);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });

      this.container.appendChild(item);
    });
  }

  openLetter(letter, itemElement) {
    this.currentLetter = letter;

    // Chime & particle effects
    if (window.romanticChimes) {
      window.romanticChimes.playLoveChime();
    }
    if (window.particleEngine) {
      const rect = itemElement ? itemElement.getBoundingClientRect() : null;
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      window.particleEngine.burstHearts(x, y, 20);
    }

    const badgeEl = document.getElementById('unfolded-letter-badge');
    const titleEl = document.getElementById('unfolded-letter-title');
    const contentEl = document.getElementById('unfolded-letter-content');
    const cardEl = document.getElementById('unfolded-letter-card');

    if (badgeEl) badgeEl.textContent = letter.badge || 'Open When Letter';
    if (titleEl) titleEl.textContent = letter.title;
    if (contentEl) contentEl.textContent = letter.content;
    if (cardEl) {
      cardEl.style.animation = 'none';
      void cardEl.offsetWidth;
      cardEl.style.animation = 'paperUnfold 0.6s var(--ease-spring)';
    }

    if (this.modal) {
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeLetter() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  bindEvents() {
    const closeBtn = document.getElementById('btn-close-letter-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeLetter());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeLetter();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.closeLetter();
      }
    });
  }
}

window.lettersController = null;
