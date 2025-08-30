import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <span class="gradient-text">ST</span>
          </div>
          
          <ul class="nav-links" [class.active]="isMobileMenuOpen">
            <li><a href="#home" (click)="closeMenu()">Home</a></li>
            <li><a href="#about" (click)="closeMenu()">About</a></li>
            <li><a href="#skills" (click)="closeMenu()">Skills</a></li>
            <li><a href="#experience" (click)="closeMenu()">Experience</a></li>
            <li><a href="#projects" (click)="closeMenu()">Projects</a></li>
            <li><a href="#contact" (click)="closeMenu()">Contact</a></li>
          </ul>
          
          <div class="nav-actions">
            <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="'Switch to ' + (isDarkMode ? 'light' : 'dark') + ' mode'">
              <i [class]="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
            </button>
            
            <button class="mobile-menu-toggle" (click)="toggleMobileMenu()" [attr.aria-label]="'Toggle mobile menu'">
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
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(10px);
      transition: all 300ms ease;
      
      &.scrolled {
        background: rgba(15, 23, 42, 0.95);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      
      @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: -100%;
        width: 300px;
        height: 100vh;
        background: var(--bg-secondary);
        flex-direction: column;
        padding: 5rem 2rem 2rem;
        transition: right 300ms ease;
        box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
        
        &.active {
          right: 0;
        }
      }
      
      a {
        color: var(--text-primary);
        text-decoration: none;
        font-weight: 500;
        transition: color 300ms ease;
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          transition: width 300ms ease;
        }
        
        &:hover {
          color: var(--primary-600);
          
          &::after {
            width: 100%;
          }
        }
      }
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .theme-toggle {
      background: none;
      border: none;
      color: var(--text-primary);
      font-size: 1.2rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: all 300ms ease;
      
      &:hover {
        background: var(--bg-tertiary);
        transform: scale(1.1);
      }
    }

    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      gap: 4px;
      
      @media (max-width: 768px) {
        display: flex;
      }
      
      span {
        width: 25px;
        height: 3px;
        background: var(--text-primary);
        transition: all 300ms ease;
        
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
  isDarkMode = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}