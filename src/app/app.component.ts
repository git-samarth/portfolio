import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { AnimationService } from './core/services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    PreloaderComponent
  ],
  template: `
    <app-preloader></app-preloader>
    
    <div class="page-transition"></div>
    
    <app-header></app-header>
    
    <main class="main-content">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
    
    <app-footer></app-footer>
    
    <!-- Floating Background Elements -->
    <div class="bg-elements">
      <div class="floating-element element-1"></div>
      <div class="floating-element element-2"></div>
      <div class="floating-element element-3"></div>
    </div>
  `,
  styles: [`
    .main-content {
      position: relative;
      z-index: 2;
    }
    
    .page-transition {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--gradient-primary);
      transform: scaleY(0);
      transform-origin: bottom;
      z-index: 9998;
      pointer-events: none;
    }
    
    .bg-elements {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    }
    
    .floating-element {
      position: absolute;
      border-radius: 50%;
      background: var(--gradient-primary);
      opacity: 0.1;
      animation: float 8s ease-in-out infinite;
      
      &.element-1 {
        width: 300px;
        height: 300px;
        top: 10%;
        right: 10%;
        animation-delay: 0s;
      }
      
      &.element-2 {
        width: 200px;
        height: 200px;
        bottom: 20%;
        left: 5%;
        animation-delay: 2s;
      }
      
      &.element-3 {
        width: 150px;
        height: 150px;
        top: 50%;
        right: 5%;
        animation-delay: 4s;
      }
    }
    
    @keyframes float {
      0%, 100% { 
        transform: translateY(0px) translateX(0px) rotate(0deg);
      }
      33% { 
        transform: translateY(-30px) translateX(20px) rotate(5deg);
      }
      66% { 
        transform: translateY(20px) translateX(-15px) rotate(-3deg);
      }
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  
  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    // Setup scroll animations after view init
    setTimeout(() => {
      this.animationService.setupScrollAnimations();
    }, 1000);
  }

  ngOnDestroy() {
    // Cleanup if needed
  }
}