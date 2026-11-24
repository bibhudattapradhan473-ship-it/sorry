/**
 * A LITTLE WORLD OF SORRY ❤️
 * Animations & Particle System Engine
 */

class RomanticParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.confettiParticles = [];
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.animationFrameId = null;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });

    if (!this.isReducedMotion) {
      this.createAmbientParticles();
      this.animate();
    }
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createAmbientParticles() {
    // Determine particle count based on screen size (mobile friendly)
    const count = this.width < 768 ? 24 : 45;
    this.particles = [];

    const types = ['heart', 'sparkle', 'petal'];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 12 + 6,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: (Math.random() - 0.5) * 0.6,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.03,
        opacity: Math.random() * 0.5 + 0.25,
        type: types[Math.floor(Math.random() * types.length)],
        color: ['#FF6584', '#EFA7C0', '#F472B6', '#E11D48', '#FDA4AF'][Math.floor(Math.random() * 5)]
      });
    }
  }

  drawHeart(x, y, size, color, opacity, rotation) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);
    this.ctx.globalAlpha = opacity;
    this.ctx.fillStyle = color;

    this.ctx.beginPath();
    const topCurveHeight = size * 0.3;
    this.ctx.moveTo(0, topCurveHeight);
    // Top left curve
    this.ctx.bezierCurveTo(-size / 2, -topCurveHeight, -size, size / 3, 0, size);
    // Top right curve
    this.ctx.bezierCurveTo(size, size / 3, size / 2, -topCurveHeight, 0, topCurveHeight);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.restore();
  }

  drawSparkle(x, y, size, opacity) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.globalAlpha = opacity;
    this.ctx.fillStyle = '#FFFBEB';
    this.ctx.shadowColor = '#FDE047';
    this.ctx.shadowBlur = 8;

    this.ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      this.ctx.rotate(Math.PI / 2);
      this.ctx.lineTo(size, 0);
      this.ctx.lineTo(size * 0.2, size * 0.2);
    }
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.restore();
  }

  drawPetal(x, y, size, color, opacity, rotation) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);
    this.ctx.globalAlpha = opacity;
    this.ctx.fillStyle = color;

    this.ctx.beginPath();
    this.ctx.ellipse(0, 0, size * 0.8, size * 0.45, 0, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.restore();
  }

  // Burst explosion of hearts from a specific coordinate
  burstHearts(x, y, count = 25) {
    if (this.isReducedMotion) return;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 7 + 2;
      this.confettiParticles.push({
        x: x || this.width / 2,
        y: y || this.height / 2,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 2,
        size: Math.random() * 16 + 8,
        color: ['#FF2E63', '#E11D48', '#FF6584', '#DB2777', '#FDA4AF', '#F43F5E'][Math.floor(Math.random() * 6)],
        opacity: 1,
        life: 1,
        decay: Math.random() * 0.02 + 0.012,
        rotation: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.1,
        type: 'heart'
      });
    }
  }

  // Celebratory Confetti Rain (for Option A in Chapter 7)
  celebrateConfetti() {
    if (this.isReducedMotion) return;
    const count = this.width < 768 ? 60 : 120;
    for (let i = 0; i < count; i++) {
      this.confettiParticles.push({
        x: Math.random() * this.width,
        y: -20 - Math.random() * 200,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 4 + 3,
        size: Math.random() * 10 + 6,
        color: ['#FF6584', '#FFD166', '#06D6A0', '#118AB2', '#EF476F', '#EFA7C0', '#8E365A'][Math.floor(Math.random() * 7)],
        opacity: 1,
        life: 1,
        decay: Math.random() * 0.008 + 0.005,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.15,
        type: Math.random() > 0.4 ? 'heart' : 'petal'
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Ambient Background Particles
    for (const p of this.particles) {
      p.y -= p.speedY;
      p.x += Math.sin(p.y * 0.01) * p.speedX;
      p.rotation += p.rotSpeed;

      // Wrap around screen edges
      if (p.y < -30) {
        p.y = this.height + 20;
        p.x = Math.random() * this.width;
      }
      if (p.x < -30) p.x = this.width + 20;
      if (p.x > this.width + 30) p.x = -20;

      if (p.type === 'heart') {
        this.drawHeart(p.x, p.y, p.size, p.color, p.opacity, p.rotation);
      } else if (p.type === 'sparkle') {
        this.drawSparkle(p.x, p.y, p.size * 0.6, p.opacity);
      } else {
        this.drawPetal(p.x, p.y, p.size, p.color, p.opacity, p.rotation);
      }
    }

    // 2. Confetti & Burst Particles
    for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
      const c = this.confettiParticles[i];
      c.x += c.vx;
      c.y += c.vy;
      c.vy += 0.08; // gravity
      c.vx *= 0.98; // air drag
      c.rotation += c.rotSpeed;
      c.life -= c.decay;

      if (c.life <= 0 || c.y > this.height + 40) {
        this.confettiParticles.splice(i, 1);
        continue;
      }

      if (c.type === 'heart') {
        this.drawHeart(c.x, c.y, c.size, c.color, c.life, c.rotation);
      } else {
        this.drawPetal(c.x, c.y, c.size, c.color, c.life, c.rotation);
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}

/**
 * Romantic Audio Chime Synthesizer
 * Uses native Web Audio API to create gentle, sweet musical tones
 * when clicking buttons, cards, or wax seals.
 */
class RomanticChimes {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playGentleChime(frequencies = [523.25, 659.25, 783.99]) { // C5, E5, G5 sweet major chord
    if (this.isMuted) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      frequencies.forEach((freq, index) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        // Gentle envelope: fast soft attack, smooth decay
        gain.gain.setValueAtTime(0, now + index * 0.08);
        gain.gain.linearRampToValueAtTime(0.08, now + index * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 0.7);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 0.75);
      });
    } catch (e) {
      // Audio autoplay or web audio policy catch
    }
  }

  playLoveChime() {
    // A sweet 4-note ascending romantic chime (F5, A5, C6, E6)
    this.playGentleChime([698.46, 880.00, 1046.50, 1318.51]);
  }

  playSoftTap() {
    this.playGentleChime([587.33]); // D5
  }
}

// Global particle and chime instances
window.particleEngine = null;
window.romanticChimes = new RomanticChimes();

document.addEventListener('DOMContentLoaded', () => {
  window.particleEngine = new RomanticParticleEngine('particle-canvas');
});
