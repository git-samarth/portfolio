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
            Transforming business operations through intelligent cloud architecture and automation. 
            Specializing in Kubernetes, multi-cloud deployments, and DevOps excellence that drives real impact.
          </p>
          
          <div class="hero-stats hero-animate">
            <div class="stat-item">
              <div class="stat-number" data-target="3">0</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-target="100">0</div>
              <div class="stat-label">Enterprise Customers</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-target="99">0</div>
              <div class="stat-label">99% Uptime Achievement</div>
            </div>
          </div>
          
          <div class="hero-buttons hero-animate">
            <a href="#projects" class="btn btn-primary magnetic">
              <i class="fas fa-code-branch"></i>
              View Projects
            </a>
            <a href="#contact" class="btn btn-secondary magnetic">
              <i class="fas fa-paper-plane"></i>
              Contact Me
            </a>
          </div>
          
          <div class="hero-tech-stack hero-animate">
            <div class="tech-grid">
              <div class="tech-card stagger-item" data-tech="Azure" style="animation-delay: 1.5s">
                <div class="tech-icon">
                  <i class="fab fa-microsoft"></i>
                </div>
                <div class="tech-label">Azure</div>
              </div>
              
              <div class="tech-card stagger-item" data-tech="AWS" style="animation-delay: 1.6s">
                <div class="tech-icon">
                  <i class="fab fa-aws"></i>
                </div>
                <div class="tech-label">AWS</div>
              </div>
              
              <div class="tech-card stagger-item" data-tech="Kubernetes" style="animation-delay: 1.7s">
                <div class="tech-icon">
                  <i class="fas fa-dharmachakra"></i>
                </div>
                <div class="tech-label">Kubernetes</div>
              </div>
              
              <div class="tech-card stagger-item" data-tech="Docker" style="animation-delay: 1.8s">
                <div class="tech-icon">
                  <i class="fab fa-docker"></i>
                </div>
                <div class="tech-label">Docker</div>
              </div>
              
              <div class="tech-card stagger-item" data-tech="Terraform" style="animation-delay: 1.9s">
                <div class="tech-icon">
                  <i class="fas fa-layer-group"></i>
                </div>
                <div class="tech-label">Terraform</div>
              </div>
              
              <div class="tech-card stagger-item" data-tech="DevOps" style="animation-delay: 2.0s">
                <div class="tech-icon">
                  <i class="fas fa-code-branch"></i>
                </div>
                <div class="tech-label">DevOps</div>
              </div>
            </div>
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
      margin-top: 2rem;
    }
    
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      max-width: 500px;
      margin: 0 auto;
      
      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem;
        max-width: 300px;
      }
    }
    
    .tech-card {
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 16px;
      padding: 1.5rem 1rem;
      text-align: center;
      backdrop-filter: blur(20px);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      animation: float 6s ease-in-out infinite;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--gradient-primary);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
      }
      
      &:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0 15px 40px rgba(99, 102, 241, 0.3);
        animation-play-state: paused;
        
        &::before {
          opacity: 0.1;
        }
        
        .tech-icon {
          transform: scale(1.1);
          
          i {
            color: var(--cyan-400);
          }
        }
        
        .tech-label {
          color: white;
        }
      }
      
      &:nth-child(1) { animation-delay: 0s; }
      &:nth-child(2) { animation-delay: 1s; }
      &:nth-child(3) { animation-delay: 2s; }
      &:nth-child(4) { animation-delay: 3s; }
      &:nth-child(5) { animation-delay: 4s; }
      &:nth-child(6) { animation-delay: 5s; }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    .tech-card .tech-icon {
      width: 48px;
      height: 48px;
      margin: 0 auto 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      i {
        font-size: 2rem;
        color: rgba(255, 255, 255, 0.9);
      }
    }
    
    .tech-label {
      font-size: 0.85rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.8);
      transition: color 0.3s ease;
      letter-spacing: 0.5px;
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