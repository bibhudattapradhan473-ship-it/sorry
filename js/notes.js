/**
 * A LITTLE WORLD OF SORRY ❤️
 * 50 Little Sorry Notes Controller
 */

class RomanticNotesController {
  constructor(config) {
    this.notes = config.notes || [];
    this.currentNoteIndex = 0;
    this.openedNotes = new Set();
    this.activeFilter = 'All';

    // DOM containers
    this.grid = document.getElementById('notes-grid');
    this.statsCounter = document.getElementById('notes-opened-counter');
    this.progressBar = document.getElementById('notes-progress-fill');
    this.modal = document.getElementById('note-modal');
    this.randomBtn = document.getElementById('btn-random-note');
    this.filterContainer = document.getElementById('notes-tag-filters');

    this.init();
  }

  init() {
    this.renderFilters();
    this.renderGrid();
    this.bindModalEvents();

    if (this.randomBtn) {
      this.randomBtn.addEventListener('click', () => {
        this.openRandomNote();
      });
    }

    // Keyboard support for note modal
    document.addEventListener('keydown', (e) => {
      if (!this.modal || !this.modal.classList.contains('active')) return;
      if (e.key === 'Escape') this.closeModal();
      if (e.key === 'ArrowRight') this.nextNote();
      if (e.key === 'ArrowLeft') this.prevNote();
    });
  }

  renderFilters() {
    if (!this.filterContainer) return;
    const tags = ['All', 'Understanding', 'Regret', 'Affection', 'Patience', 'Promises'];

    this.filterContainer.innerHTML = '';
    tags.forEach((tag) => {
      const btn = document.createElement('button');
      btn.className = `tag-filter-btn ${tag === this.activeFilter ? 'active' : ''}`;
      btn.textContent = tag;
      btn.addEventListener('click', () => {
        this.activeFilter = tag;
        document.querySelectorAll('.tag-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderGrid();
      });
      this.filterContainer.appendChild(btn);
    });
  }

  renderGrid() {
    if (!this.grid) return;
    this.grid.innerHTML = '';

    const filtered = this.activeFilter === 'All'
      ? this.notes
      : this.notes.filter(n => n.tag.toLowerCase() === this.activeFilter.toLowerCase());

    filtered.forEach((note) => {
      const card = document.createElement('article');
      card.className = `note-card-item ${this.openedNotes.has(note.id) ? 'opened' : ''}`;
      card.style.backgroundColor = note.color || '#FFFDF8';
      card.style.transform = `rotate(${note.rotation || 0}deg)`;
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Note ${note.id}: ${note.title}`);

      card.innerHTML = `
        <div class="note-card-corner-tape"></div>
        <div class="note-card-top">
          <span class="note-card-num">#${String(note.id).padStart(2, '0')}</span>
          <span class="note-card-tag">${note.tag}</span>
        </div>
        <h4 class="note-card-title">${note.title}</h4>
        <p class="note-card-excerpt">${note.excerpt}</p>
      `;

      const handleOpen = () => {
        const fullIndex = this.notes.findIndex(n => n.id === note.id);
        this.openNote(fullIndex, card);
      };

      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });

      this.grid.appendChild(card);
    });

    this.updateStats();
  }

  openNote(index, cardElement) {
    if (index < 0 || index >= this.notes.length) return;
    this.currentNoteIndex = index;
    const note = this.notes[index];

    // Mark as opened
    this.openedNotes.add(note.id);
    this.updateStats();

    // Trigger romantic sound chime and particles
    if (window.romanticChimes) {
      window.romanticChimes.playLoveChime();
    }
    if (window.particleEngine) {
      const rect = cardElement ? cardElement.getBoundingClientRect() : null;
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      window.particleEngine.burstHearts(x, y, 16);
    }

    if (cardElement) {
      cardElement.classList.add('opened');
    }

    this.populateModal(note);
    if (this.modal) {
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  populateModal(note) {
    const idEl = document.getElementById('modal-note-num');
    const tagEl = document.getElementById('modal-note-tag');
    const titleEl = document.getElementById('modal-note-title');
    const bodyEl = document.getElementById('modal-note-body');
    const cardEl = document.getElementById('modal-card-inner');

    if (idEl) idEl.textContent = `Note #${String(note.id).padStart(2, '0')} of 50`;
    if (tagEl) tagEl.textContent = note.tag;
    if (titleEl) titleEl.textContent = note.title;
    if (bodyEl) bodyEl.textContent = note.content;
    if (cardEl) {
      cardEl.style.backgroundColor = note.color || '#FFFDF9';
      // Trigger smooth 3D flip animation
      cardEl.style.animation = 'none';
      void cardEl.offsetWidth; // trigger reflow
      cardEl.style.animation = 'cardFlipIn 0.5s var(--ease-spring)';
    }
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  nextNote() {
    const nextIdx = (this.currentNoteIndex + 1) % this.notes.length;
    this.openNote(nextIdx);
  }

  prevNote() {
    const prevIdx = (this.currentNoteIndex - 1 + this.notes.length) % this.notes.length;
    this.openNote(prevIdx);
  }

  openRandomNote() {
    const randomIdx = Math.floor(Math.random() * this.notes.length);
    this.openNote(randomIdx);
  }

  updateStats() {
    const count = this.openedNotes.size;
    const total = this.notes.length;
    if (this.statsCounter) {
      this.statsCounter.textContent = `Opened ${count} of ${total} notes`;
    }
    if (this.progressBar) {
      const percentage = (count / total) * 100;
      this.progressBar.style.width = `${percentage}%`;
    }
  }

  bindModalEvents() {
    const closeBtn = document.getElementById('btn-close-note-modal');
    const nextBtn = document.getElementById('btn-modal-next-note');
    const prevBtn = document.getElementById('btn-modal-prev-note');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextNote());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevNote());

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeModal();
      });
    }
  }
}

window.notesController = null;
