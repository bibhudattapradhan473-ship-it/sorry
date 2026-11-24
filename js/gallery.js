/**
 * A LITTLE WORLD OF SORRY ❤️
 * Chapter 05: Scrapbook Polaroid Gallery & Lightbox
 */

class RomanticGalleryController {
  constructor(config) {
    this.memories = config.memories || [];
    this.currentIndex = 0;
    this.grid = document.getElementById('gallery-grid');
    this.lightbox = document.getElementById('gallery-lightbox');
    this.lightboxImg = document.getElementById('lightbox-img');
    this.lightboxCaption = document.getElementById('lightbox-caption');
    this.lightboxTitle = document.getElementById('lightbox-title');

    this.init();
  }

  init() {
    this.renderGallery();
    this.bindLightboxEvents();
  }

  renderGallery() {
    if (!this.grid) return;
    this.grid.innerHTML = '';

    this.memories.forEach((memory, index) => {
      const card = document.createElement('div');
      card.className = 'polaroid-card';
      card.style.transform = `rotate(${memory.rotation || 0}deg)`;
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Memory: ${memory.title}`);

      card.innerHTML = `
        <div class="polaroid-washi"></div>
        <div class="polaroid-img-wrap">
          <img class="polaroid-img" src="${memory.image}" alt="${memory.title}" loading="lazy" />
        </div>
        <h4 class="polaroid-title">${memory.title}</h4>
        <p class="polaroid-caption">${memory.caption}</p>
      `;

      // Fallback if custom user photo fails to load
      const imgEl = card.querySelector('.polaroid-img');
      imgEl.addEventListener('error', function onImgError() {
        imgEl.removeEventListener('error', onImgError);
        const fallback = `assets/images/photo-placeholder-${(index % 6) + 1}.svg`;
        if (imgEl.getAttribute('src') !== fallback) {
          imgEl.src = fallback;
        }
      }, { once: true });

      const handleOpen = () => this.openLightbox(index);
      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });

      this.grid.appendChild(card);
    });
  }

  openLightbox(index) {
    if (index < 0 || index >= this.memories.length) return;
    this.currentIndex = index;
    const memory = this.memories[index];

    if (window.romanticChimes) {
      window.romanticChimes.playSoftTap();
    }

    if (this.lightboxImg) {
      this.lightboxImg.src = memory.image;
      this.lightboxImg.alt = memory.title;
      this.lightboxImg.onerror = () => {
        this.lightboxImg.onerror = null;
        const fallback = `assets/images/photo-placeholder-${(index % 6) + 1}.svg`;
        if (this.lightboxImg.getAttribute('src') !== fallback) {
          this.lightboxImg.src = fallback;
        }
      };
    }
    if (this.lightboxTitle) this.lightboxTitle.textContent = memory.title;
    if (this.lightboxCaption) this.lightboxCaption.textContent = memory.caption;

    if (this.lightbox) {
      this.lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox() {
    if (!this.lightbox) return;
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  nextPhoto() {
    const nextIdx = (this.currentIndex + 1) % this.memories.length;
    this.openLightbox(nextIdx);
  }

  prevPhoto() {
    const prevIdx = (this.currentIndex - 1 + this.memories.length) % this.memories.length;
    this.openLightbox(prevIdx);
  }

  bindLightboxEvents() {
    const closeBtn = document.getElementById('btn-close-lightbox');
    const prevBtn = document.getElementById('btn-lightbox-prev');
    const nextBtn = document.getElementById('btn-lightbox-next');

    if (closeBtn) closeBtn.addEventListener('click', () => this.closeLightbox());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevPhoto());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextPhoto());

    if (this.lightbox) {
      this.lightbox.addEventListener('click', (e) => {
        if (e.target === this.lightbox) this.closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!this.lightbox || !this.lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowRight') this.nextPhoto();
      if (e.key === 'ArrowLeft') this.prevPhoto();
    });
  }
}

window.galleryController = null;
