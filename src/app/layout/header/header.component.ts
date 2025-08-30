import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled" [class.menu-open]="isMobileMenuOpen">
      <div class="container">
        <nav class="nav">
          <div class="logo magnetic" (click)="scrollToTop()">
            <i class="fas fa-cloud logo-icon"></i>
            <span class="logo-text">
              <span class="letter" style="animation-delay: 0ms">S</span>
              <span class="letter" style="animation-delay: 100ms">a</span>
              <span class="letter" style="animation-delay: 200ms">m</span>
              <span class="letter" style="animation-delay: 300ms">a</span>
              <span class="letter" style="animation-delay: 400ms">r</span>
              <span class="letter" style="animation-delay: 500ms">t</span>
              <span class="letter" style="animation-delay: 600ms">h</span>
              <span class="letter" style="animation-delay: 700ms"> </span>
              <span class="letter" style="animation-delay: 800ms">T</span>
              <span class="letter" style="animation-delay: 900ms">i</span>
              <span class="letter" style="animation-delay: 1000ms">w</span>
              <span class="letter" style="animation-delay: 1100ms">a</span>
              <span class="letter" style="animation-delay: 1200ms">r</span>
              <span class="letter" style="animation-delay: 1300ms">i</span>
            </span>
          </div>
          
          <ul class="nav-links" [class.active]="isMobileMenuOpen">
            <li><a href="#home" (click)="closeMenu()" class="nav-link">Home</a></li>
            <li><a href="#about" (click)="closeMenu()" class="nav-link">About</a></li>
            <li><a href="#skills" (click)="closeMenu()" class="nav-link">Skills</a></li>
            <li><a href="#experience" (click)="closeMenu()" class="nav-link">Experience</a></li>
            <li><a href="#projects" (click)="closeMenu()" class="nav-link">Projects</a></li>
            <li><a href="#contact" (click)="closeMenu()" class="nav-link">Contact</a></li>
          </ul>
          
          <div class="nav-actions">
            <button class="mobile-menu-toggle" (click)="toggleMobileMenu()" 
                    [attr.aria-label]="'Toggle mobile menu'">
              <span [class.active]="isMobileMenuOpen"></span>
              <span [class.active]="isMobileMenuOpen"></span>
              <span [class.active]="isMobileMenuOpen"></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--glass-border);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &.scrolled {
        background: var(--glass-bg);
        box-shadow: var(--glass-shadow);
      }
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 0;
      transition: padding 0.3s ease;
    }

    .scrolled .nav {
      padding: 1rem 0;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &:hover {
        transform: translateY(-2px);
        
        .logo-icon {
          color: var(--cyan-400);
          transform: scale(1.1);
        }
        
        .letter {
          color: var(--primary-500);
        }
      }
    }
    
    .logo-icon {
      font-size: 1.5rem;
      color: var(--primary-500);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .logo-text {
      font-size: 1.4rem;
      font-weight: 700;
      font-family: 'Inter', sans-serif;
      letter-spacing: -0.02em;
    }
    
    .letter {
      display: inline-block;
      opacity: 0;
      transform: translateY(20px);
      animation: letterAppear 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      color: var(--text-primary);
      transition: color 0.3s ease;
    }
    
    @keyframes letterAppear {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2.5rem;
      margin: 0;
      
      @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
        transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 9999;
        
        &.active {
          right: 0;
        }
      }
    }

    .nav-link {
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      position: relative;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &::before {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--gradient-primary);
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      &:hover {
        color: var(--primary-500);
        transform: translateY(-2px);
        
        &::before {
          width: 100%;
        }
      }
      
      @media (max-width: 768px) {
        font-size: 1.25rem;
        padding: 1rem;
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        text-align: center;
      }
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }



    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.75rem;
      gap: 4px;
      min-height: 44px;
      min-width: 44px;
      justify-content: center;
      align-items: center;
      touch-action: manipulation;
      
      @media (max-width: 768px) {
        display: flex;
      }
      
      span {
        width: 25px;
        height: 3px;
        background: var(--text-primary);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 2px;
        
        &:nth-child(1).active {
          transform: rotate(45deg) translate(6px, 6px);
        }
        
        &:nth-child(2).active {
          opacity: 0;
        }
        
        &:nth-child(3).active {
          transform: rotate(-45deg) translate(6px, -6px);
        }
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;


  constructor() {}

  ngOnInit() {
    // Component initialization
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }



  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}