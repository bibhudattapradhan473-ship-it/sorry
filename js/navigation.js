/**
 * A LITTLE WORLD OF SORRY ❤️
 * Navigation Controller & Browser History Management
 */

class RomanticNavigationController {
  constructor() {
    this.currentChapter = 1;
    this.totalChapters = 7;
    this.chapterTitles = [
      "Magical Welcome",
      "The Big Sorry",
      "50 Little Notes",
      "Open When Letters",
      "Our Little Memories",
      "A Letter From My Heart",
      "The Final Surprise"
    ];

    // DOM Elements
    this.btnPrev = document.getElementById('btn-nav-prev');
    this.btnNext = document.getElementById('btn-nav-next');
    this.chapterBadge = document.getElementById('header-chapter-badge');
    this.chapterTitleDisplay = document.getElementById('header-chapter-title');
    this.progressFill = document.getElementById('header-progress-fill');
    this.dotsContainer = document.getElementById('nav-dots-container');

    // Drawer Elements
    this.btnMenuToggle = document.getElementById('btn-menu-toggle');
    this.drawer = document.getElementById('chapter-drawer');
    this.drawerOverlay = document.getElementById('drawer-overlay');
    this.btnDrawerClose = document.getElementById('btn-drawer-close');
    this.drawerList = document.getElementById('drawer-chapter-list');

    this.init();
  }

  init() {
    this.renderDots();
    this.renderDrawerList();
    this.bindEvents();
    this.handleInitialHash();
    this.updateUI(this.currentChapter);
  }

  bindEvents() {
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => this.prevChapter());
    }
    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => this.nextChapter());
    }

    // Drawer events
    if (this.btnMenuToggle) {
      this.btnMenuToggle.addEventListener('click', () => this.openDrawer());
    }
    if (this.btnDrawerClose) {
      this.btnDrawerClose.addEventListener('click', () => this.closeDrawer());
    }
    if (this.drawerOverlay) {
      this.drawerOverlay.addEventListener('click', () => this.closeDrawer());
    }

    // Hash change / browser back & forward navigation
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash;
      const match = hash.match(/#chapter-(\d+)/);
      if (match) {
        const targetChapter = parseInt(match[1], 10);
        if (targetChapter >= 1 && targetChapter <= this.totalChapters && targetChapter !== this.currentChapter) {
          this.goToChapter(targetChapter, false);
        }
      }
    });

    // Keyboard arrow keys for chapters (when no modal is open)
    document.addEventListener('keydown', (e) => {
      const activeModal = document.querySelector('.modal-overlay.active, .lightbox-modal.active');
      if (activeModal) return;

      if (e.key === 'PageDown') this.nextChapter();
      if (e.key === 'PageUp') this.prevChapter();
    });
  }

  handleInitialHash() {
    const hash = window.location.hash;
    const match = hash.match(/#chapter-(\d+)/);
    if (match) {
      const chapter = parseInt(match[1], 10);
      if (chapter >= 1 && chapter <= this.totalChapters) {
        this.currentChapter = chapter;
      }
    }
    // Set initial active chapter screen
    for (let i = 1; i <= this.totalChapters; i++) {
      const screen = document.getElementById(`chapter-${i}`);
      if (screen) {
        screen.classList.toggle('active', i === this.currentChapter);
      }
    }
  }

  renderDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = '';
    for (let i = 1; i <= this.totalChapters; i++) {
      const dot = document.createElement('button');
      dot.className = `nav-dot ${i === this.currentChapter ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to Chapter ${i}: ${this.chapterTitles[i - 1]}`);
      dot.addEventListener('click', () => this.goToChapter(i));
      this.dotsContainer.appendChild(dot);
    }
  }

  renderDrawerList() {
    if (!this.drawerList) return;
    this.drawerList.innerHTML = '';
    for (let i = 1; i <= this.totalChapters; i++) {
      const li = document.createElement('li');
      li.innerHTML = `
        <button class="drawer-item-btn ${i === this.currentChapter ? 'active' : ''}" data-chapter="${i}">
          <span class="drawer-item-num">#0${i}</span>
          <span class="drawer-item-title">${this.chapterTitles[i - 1]}</span>
        </button>
      `;
      const btn = li.querySelector('button');
      btn.addEventListener('click', () => {
        this.closeDrawer();
        this.goToChapter(i);
      });
      this.drawerList.appendChild(li);
    }
  }

  openDrawer() {
    if (this.drawer) this.drawer.classList.add('open');
    if (this.drawerOverlay) this.drawerOverlay.classList.add('active');
  }

  closeDrawer() {
    if (this.drawer) this.drawer.classList.remove('open');
    if (this.drawerOverlay) this.drawerOverlay.classList.remove('active');
  }

  goToChapter(targetChapter, updateHash = true) {
    if (window.transitionManager && window.transitionManager.isTransitioning) return;
    if (targetChapter < 1 || targetChapter > this.totalChapters) return;
    if (targetChapter === this.currentChapter) return;

    const fromChapter = this.currentChapter;
    this.currentChapter = targetChapter;

    if (updateHash) {
      window.location.hash = `#chapter-${this.currentChapter}`;
    }

    this.updateUI(this.currentChapter);

    if (window.transitionManager) {
      window.transitionManager.transition(fromChapter, targetChapter, () => {
        // Post transition hook
        if (targetChapter === 6 && window.revealHeartLetterPaper) {
          // Ready for chapter 6 interaction
        }
      });
    }
  }

  nextChapter() {
    if (this.currentChapter < this.totalChapters) {
      this.goToChapter(this.currentChapter + 1);
    }
  }

  prevChapter() {
    if (this.currentChapter > 1) {
      this.goToChapter(this.currentChapter - 1);
    }
  }

  updateUI(chapter) {
    // 1. Update header badge and title
    if (this.chapterBadge) {
      this.chapterBadge.textContent = `Chapter ${chapter} of ${this.totalChapters}`;
    }
    if (this.chapterTitleDisplay) {
      this.chapterTitleDisplay.textContent = this.chapterTitles[chapter - 1];
    }

    // 2. Update progress fill
    if (this.progressFill) {
      const percentage = (chapter / this.totalChapters) * 100;
      this.progressFill.style.width = `${percentage}%`;
    }

    // 3. Update navigation buttons
    if (this.btnPrev) {
      this.btnPrev.disabled = chapter === 1;
    }
    if (this.btnNext) {
      this.btnNext.disabled = chapter === this.totalChapters;
      if (chapter === this.totalChapters) {
        this.btnNext.style.display = 'none';
      } else {
        this.btnNext.style.display = 'inline-flex';
      }
    }

    // 4. Update dots
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index + 1 === chapter);
    });

    // 5. Update drawer active item
    const drawerBtns = document.querySelectorAll('.drawer-item-btn');
    drawerBtns.forEach((btn, index) => {
      btn.classList.toggle('active', index + 1 === chapter);
    });
  }
}

window.navController = null;
