import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-background">
        <div class="particles"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title animate-fadeInUp">
              Hi, I'm <span class="gradient-text">Samarth Tiwari</span>
            </h1>
            
            <div class="typing-container animate-fadeInUp" style="animation-delay: 0.3s">
              <span class="typing-text">{{ currentText }}</span>
              <span class="cursor" [class.blink]="showCursor">|</span>
            </div>
            
            <p class="hero-description animate-fadeInUp" style="animation-delay: 0.6s">
              Results-driven Cloud Engineer with 3+ years of experience designing, implementing, 
              and managing scalable, secure, and highly available cloud infrastructure on Azure and AWS.
            </p>
            
            <div class="hero-actions animate-fadeInUp" style="animation-delay: 0.9s">
              <a href="#projects" class="btn btn-primary">
                <i class="fas fa-rocket"></i>
                View My Work
              </a>
              <a href="#contact" class="btn btn-secondary">
                <i class="fas fa-envelope"></i>
                Contact Me
              </a>
            </div>
          </div>
          
          <div class="hero-image animate-fadeIn" style="animation-delay: 1.2s">
            <div class="image-placeholder">
              <i class="fas fa-user-circle"></i>
            </div>
          </div>
        </div>
        
        <div class="scroll-indicator animate-fadeIn" style="animation-delay: 1.5s">
          <div class="scroll-arrow">
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      background: var(--gradient-hero);
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      
      .particles {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
          radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
          radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.2), transparent),
          radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.4), transparent);
        background-repeat: repeat;
        background-size: 200px 100px;
        animation: float 20s infinite linear;
      }
    }

    @keyframes float {
      0% { transform: translateY(0px) translateX(0px); }
      33% { transform: translateY(-10px) translateX(10px); }
      66% { transform: translateY(5px) translateX(-5px); }
      100% { transform: translateY(0px) translateX(0px); }
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 2;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: white;
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    .typing-container {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 0.9);
      min-height: 2rem;
      
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    .cursor {
      &.blink {
        animation: blink 1s infinite;
      }
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    .hero-description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 0.8);
      max-width: 500px;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      
      @media (max-width: 480px) {
        flex-direction: column;
      }
    }

    .hero-image {
      display: flex;
      justify-content: center;
      
      .image-placeholder {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid rgba(255, 255, 255, 0.2);
        
        i {
          font-size: 8rem;
          color: rgba(255, 255, 255, 0.7);
        }
        
        @media (max-width: 768px) {
          width: 200px;
          height: 200px;
          
          i {
            font-size: 5rem;
          }
        }
      }
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      
      .scroll-arrow {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.5rem;
        animation: bounce 2s infinite;
      }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }
  `]
})
export class HeroComponent implements OnInit {
  texts = [
    'Cloud Engineer',
    'DevOps Specialist', 
    'Azure & AWS Expert',
    'Kubernetes Enthusiast'
  ];
  
  currentText = '';
  currentIndex = 0;
  charIndex = 0;
  isDeleting = false;
  showCursor = true;

  ngOnInit() {
    this.typeText();
    this.startCursorBlink();
  }

  typeText() {
    const current = this.texts[this.currentIndex];
    
    if (this.isDeleting) {
      this.currentText = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentText = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === current.length) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.typeText(), typeSpeed);
  }

  startCursorBlink() {
    setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 500);
  }
}