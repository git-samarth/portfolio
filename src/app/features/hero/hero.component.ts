import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../core/services/animation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-background">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
        <div class="particles"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge hero-animate">
            <span class="badge-text">Available for Opportunities</span>
            <div class="badge-dot"></div>
          </div>
          
          <h1 class="hero-title hero-animate">
            <span class="title-line">Cloud</span>
            <span class="title-line gradient-text">Engineer</span>
          </h1>
          
          <div class="hero-subtitle hero-animate">
            <span class="typing-text">{{ currentText }}</span>
            <span class="cursor">|</span>
          </div>
          
          <p class="hero-description hero-animate">
            I architect cloud solutions that power AI-driven platforms serving 100+ enterprise customers. 
            With 3 years of hands-on experience at TCS Digitate, I've mastered the art of building 
            resilient, scalable infrastructure that handles millions of operations seamlessly.
          </p>
          
          <div class="hero-stats hero-animate">
            <div class="stat-item">
              <div class="stat-number" data-target="3">0</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-target="100">0</div>
              <div class="stat-label">Customers Served</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-target="0">0</div>
              <div class="stat-label">Downtime Migrations</div>
            </div>
          </div>
          
          <div class="hero-buttons hero-animate">
            <a href="#projects" class="btn btn-primary magnetic">
              <i class="fas fa-rocket"></i>
              View My Work
            </a>
            <a href="#contact" class="btn btn-secondary magnetic">
              <i class="fas fa-envelope"></i>
              Let's Connect
            </a>
          </div>
          
          <div class="hero-tech-stack hero-animate">
            <div class="tech-label">Expertise in:</div>
            <div class="tech-icons">
              <div class="tech-icon" title="Microsoft Azure">
                <i class="fab fa-microsoft"></i>
              </div>
              <div class="tech-icon" title="Amazon AWS">
                <i class="fab fa-aws"></i>
              </div>
              <div class="tech-icon" title="Kubernetes">
                <i class="fas fa-dharmachakra"></i>
              </div>
              <div class="tech-icon" title="Docker">
                <i class="fab fa-docker"></i>
              </div>
              <div class="tech-icon" title="Terraform">
                <i class="fas fa-layer-group"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div class="scroll-indicator">
          <div class="scroll-text">Scroll to explore</div>
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
      color: white;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }

    .gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.3;
      animation: float 8s ease-in-out infinite;
      
      &.orb-1 {
        width: 400px;
        height: 400px;
        background: var(--gradient-primary);
        top: 10%;
        right: 10%;
        animation-delay: 0s;
      }
      
      &.orb-2 {
        width: 300px;
        height: 300px;
        background: var(--gradient-secondary);
        bottom: 20%;
        left: 10%;
        animation-delay: 3s;
      }
      
      &.orb-3 {
        width: 200px;
        height: 200px;
        background: var(--gradient-accent);
        top: 50%;
        left: 50%;
        animation-delay: 6s;
      }
    }

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
      animation: particles 20s linear infinite;
    }

    @keyframes particles {
      0% { transform: translateY(0px) translateX(0px); }
      100% { transform: translateY(-100px) translateX(50px); }
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 50px;
      backdrop-filter: blur(20px);
      margin-bottom: 2rem;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .badge-dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    .hero-title {
      font-size: clamp(2.5rem, 12vw, 7rem);
      font-weight: 900;
      line-height: 0.95;
      margin-bottom: 2rem;
      letter-spacing: -0.05em;
      
      .title-line {
        display: block;
      }
      
      @media (max-width: 768px) {
        font-size: clamp(2rem, 15vw, 4rem);
        line-height: 1.1;
        margin-bottom: 1.5rem;
        text-align: center;
      }
    }

    .hero-subtitle {
      font-size: clamp(1.1rem, 4vw, 2rem);
      font-weight: 600;
      margin-bottom: 2rem;
      min-height: 3rem;
      color: rgba(255, 255, 255, 0.9);
      
      @media (max-width: 768px) {
        font-size: clamp(1rem, 5vw, 1.5rem);
        text-align: center;
        margin-bottom: 1.5rem;
        min-height: 2.5rem;
      }
    }

    .cursor {
      animation: blink 1s infinite;
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    .hero-description {
      font-size: 1.2rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 3rem;
      max-width: 600px;
      
      @media (max-width: 768px) {
        font-size: 1.1rem;
        line-height: 1.7;
        text-align: center;
        margin-bottom: 2rem;
        padding: 0 1rem;
      }
    }

    .hero-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 3rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }

    .stat-item {
      text-align: center;
      
      .stat-number {
        font-size: 2.5rem;
        font-weight: 900;
        color: var(--cyan-400);
        margin-bottom: 0.5rem;
      }
      
      .stat-label {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 500;
      }
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 4rem;
      justify-content: center;
      
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-bottom: 3rem;
        
        .btn {
          width: 100%;
          max-width: 280px;
          justify-content: center;
        }
      }
    }

    .hero-tech-stack {
      .tech-label {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 1rem;
      }
      
      .tech-icons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
      
      .tech-icon {
        width: 50px;
        height: 50px;
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(20px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        
        &:hover {
          transform: translateY(-5px);
          background: var(--gradient-primary);
          box-shadow: 0 10px 30px var(--glow);
        }
        
        i {
          font-size: 1.2rem;
        }
      }
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      
      .scroll-text {
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
      }
      
      .scroll-arrow {
        animation: bounce 2s infinite;
        
        i {
          font-size: 1.2rem;
        }
      }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }

    // Animation classes
    .hero-animate {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      
      &.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class HeroComponent implements OnInit, AfterViewInit {
  texts = [
    'Scaling Infrastructure',
    'Automating Workflows', 
    'Driving Innovation',
    'Building Resilience'
  ];
  
  currentText = '';

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    // Start typing animation
    const typingElement = document.querySelector('.typing-text') as HTMLElement;
    if (typingElement) {
      this.animationService.typeText(typingElement, this.texts, 100);
    }
  }

  ngAfterViewInit() {
    // Trigger hero animations
    setTimeout(() => {
      this.animationService.animateHero();
      this.animateCounters();
    }, 1500);
  }

  private animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach((counter: any) => {
      const target = parseInt(counter.getAttribute('data-target'));
      this.animationService.animateCounter(counter, target);
    });
  }
}