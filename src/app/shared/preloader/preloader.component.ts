import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="preloader" [class.fade-out]="isLoaded">
      <div class="loader-container">
        <div class="loader-text">
          <i class="fas fa-cloud loader-icon"></i>
          <span class="gradient-text">Samarth Tiwari</span>
        </div>
        <div class="loader-progress">
          <div class="progress-bar" [style.width.%]="progress"></div>
        </div>
        <div class="loader-subtitle">Loading Portfolio...</div>
      </div>
    </div>
  `,
  styles: [`
    .preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--bg-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      
      &.fade-out {
        opacity: 0;
        pointer-events: none;
      }
    }
    
    .loader-container {
      text-align: center;
      animation: pulse 2s ease-in-out infinite;
    }
    
    .loader-text {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
      letter-spacing: -0.02em;
    }
    
    .loader-icon {
      font-size: 3rem;
      color: var(--primary-500);
      animation: float 2s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    .loader-progress {
      width: 200px;
      height: 4px;
      background: var(--border);
      border-radius: 2px;
      overflow: hidden;
      margin: 0 auto 1rem;
    }
    
    .progress-bar {
      height: 100%;
      background: var(--gradient-primary);
      border-radius: 2px;
      transition: width 0.3s ease;
    }
    
    .loader-subtitle {
      color: var(--text-muted);
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  `]
})
export class PreloaderComponent implements OnInit {
  isLoaded = false;
  progress = 0;

  ngOnInit() {
    this.simulateLoading();
  }

  private simulateLoading() {
    const interval = setInterval(() => {
      this.progress += Math.random() * 15;
      
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);
        
        setTimeout(() => {
          this.isLoaded = true;
        }, 500);
      }
    }, 100);
  }
}