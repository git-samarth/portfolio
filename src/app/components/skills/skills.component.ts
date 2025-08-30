import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Technical Skills</h2>
          <p class="section-subtitle">Technologies and tools I work with</p>
        </div>
        
        <div class="skills-categories">
          <div class="category-tabs">
            <button 
              *ngFor="let category of categories" 
              class="tab-btn"
              [class.active]="activeCategory === category"
              (click)="setActiveCategory(category)">
              {{ category }}
            </button>
          </div>
          
          <div class="skills-grid">
            <div 
              *ngFor="let skill of getFilteredSkills()" 
              class="skill-card"
              [style.animation-delay]="getAnimationDelay(skill) + 'ms'">
              <div class="skill-icon">
                <i [class]="skill.icon"></i>
              </div>
              
              <div class="skill-info">
                <h4>{{ skill.name }}</h4>
                <div class="skill-progress">
                  <div class="progress-bar">
                    <div 
                      class="progress-fill" 
                      [style.width]="skill.level + '%'"
                      [style.animation-delay]="getAnimationDelay(skill) + 500 + 'ms'">
                    </div>
                  </div>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
      
      .section-title {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      
      .section-subtitle {
        font-size: 1.1rem;
        color: var(--text-muted);
      }
    }

    .category-tabs {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .tab-btn {
      padding: 0.75rem 1.5rem;
      border: 2px solid var(--border-color);
      background: transparent;
      color: var(--text-secondary);
      border-radius: 2rem;
      cursor: pointer;
      transition: all 300ms ease;
      font-weight: 500;
      
      &:hover {
        border-color: var(--primary-600);
        color: var(--primary-600);
      }
      
      &.active {
        background: var(--gradient-primary);
        border-color: var(--primary-600);
        color: white;
      }
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .skill-card {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 2rem;
      background: var(--card-bg);
      border-radius: 1rem;
      border: 1px solid var(--border-color);
      transition: all 300ms ease;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.6s ease-out forwards;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px var(--shadow-color);
      }
    }

    .skill-icon {
      width: 60px;
      height: 60px;
      border-radius: 1rem;
      background: var(--gradient-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      
      i {
        font-size: 1.8rem;
        color: white;
      }
    }

    .skill-info {
      flex: 1;
      
      h4 {
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }
    }

    .skill-progress {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .progress-bar {
      flex: 1;
      height: 8px;
      background: var(--bg-tertiary);
      border-radius: 4px;
      overflow: hidden;
      
      .progress-fill {
        height: 100%;
        background: var(--gradient-primary);
        border-radius: 4px;
        width: 0;
        animation: fillProgress 1s ease-out forwards;
      }
    }

    .skill-percentage {
      font-weight: 600;
      color: var(--primary-600);
      min-width: 40px;
      text-align: right;
    }

    @keyframes fillProgress {
      from { width: 0; }
      to { width: var(--target-width, 0%); }
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  activeCategory = 'All';
  categories = ['All', 'Cloud Platforms', 'DevOps & CI/CD', 'Infrastructure', 'Development'];
  
  skills: Skill[] = [
    // Cloud Platforms
    { name: 'Microsoft Azure', level: 90, icon: 'fab fa-microsoft', category: 'Cloud Platforms' },
    { name: 'Amazon Web Services', level: 85, icon: 'fab fa-aws', category: 'Cloud Platforms' },
    
    // DevOps & CI/CD
    { name: 'Azure DevOps', level: 90, icon: 'fas fa-code-branch', category: 'DevOps & CI/CD' },
    { name: 'Docker', level: 85, icon: 'fab fa-docker', category: 'DevOps & CI/CD' },
    { name: 'Kubernetes', level: 80, icon: 'fas fa-dharmachakra', category: 'DevOps & CI/CD' },
    { name: 'Logic Apps', level: 75, icon: 'fas fa-project-diagram', category: 'DevOps & CI/CD' },
    
    // Infrastructure
    { name: 'Terraform', level: 85, icon: 'fas fa-layer-group', category: 'Infrastructure' },
    { name: 'ARM Templates', level: 80, icon: 'fas fa-file-code', category: 'Infrastructure' },
    { name: 'CloudFormation', level: 75, icon: 'fas fa-cloud', category: 'Infrastructure' },
    { name: 'Azure Migrate', level: 80, icon: 'fas fa-exchange-alt', category: 'Infrastructure' },
    
    // Development
    { name: 'PowerShell', level: 85, icon: 'fas fa-terminal', category: 'Development' },
    { name: 'Bash Scripting', level: 80, icon: 'fas fa-code', category: 'Development' },
    { name: 'GitHub', level: 85, icon: 'fab fa-github', category: 'Development' },
    { name: 'RabbitMQ', level: 70, icon: 'fas fa-rabbit', category: 'Development' }
  ];

  ngOnInit() {
    // Trigger animations after component loads
    setTimeout(() => {
      this.animateProgressBars();
    }, 500);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getFilteredSkills(): Skill[] {
    if (this.activeCategory === 'All') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.activeCategory);
  }

  getAnimationDelay(skill: Skill): number {
    const index = this.getFilteredSkills().indexOf(skill);
    return index * 100;
  }

  private animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar: any, index) => {
      const skill = this.getFilteredSkills()[index];
      if (skill) {
        bar.style.setProperty('--target-width', skill.level + '%');
      }
    });
  }
}