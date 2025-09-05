import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Master';
  icon: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <div class="skills-header reveal">
          <h2 class="section-title gradient-text">Technical Skills</h2>
          <p class="section-subtitle">Technologies I use to build scalable, reliable cloud solutions</p>
        </div>
        
        <div class="skills-categories reveal">
          <div class="category-filters">
            <button 
              *ngFor="let category of categories" 
              class="filter-btn"
              [class.active]="activeCategory === category"
              (click)="setActiveCategory(category)">
              {{ category }}
            </button>
          </div>
        </div>
        
        <div class="skills-cloud reveal">
          <div 
            *ngFor="let skill of getFilteredSkills(); let i = index" 
            class="skill-bubble magnetic"
            [class]="'level-' + skill.level.toLowerCase()"
            [style.animation-delay]="i * 100 + 'ms'"
            [title]="skill.description">
            
            <div class="skill-icon">
              <i [class]="skill.icon"></i>
            </div>
            
            <div class="skill-info">
              <h4>{{ skill.name }}</h4>
              <div class="skill-level" [class]="'level-' + skill.level.toLowerCase()">
                {{ skill.level }}
              </div>
            </div>
            
            <div class="skill-glow"></div>
          </div>
        </div>
        
        <div class="expertise-summary reveal">
          <div class="summary-grid">
            <div class="summary-card glass">
              <div class="summary-icon">
                <i class="fas fa-cloud"></i>
              </div>
              <h3>Multi-Cloud Architecture</h3>
              <p>Expert in designing and implementing solutions across Azure and AWS platforms with seamless integration.</p>
            </div>
            
            <div class="summary-card glass">
              <div class="summary-icon">
                <i class="fas fa-cogs"></i>
              </div>
              <h3>DevOps & Automation</h3>
              <p>Proficient in CI/CD pipelines, Infrastructure as Code, and automated deployment strategies.</p>
            </div>
            
            <div class="summary-card glass">
              <div class="summary-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3>Security & Compliance</h3>
              <p>Experienced in implementing SOC2 compliance, security best practices, and governance frameworks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      background: var(--bg-secondary);
      position: relative;
    }

    .skills-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .category-filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 4rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.75rem 1.5rem;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 50px;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(20px);
      font-weight: 500;
      
      &:hover, &.active {
        background: var(--gradient-primary);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px var(--glow);
      }
    }

    .skills-cloud {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-bottom: 3rem;
      }
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }

    .skill-bubble {
      position: relative;
      padding: 2rem;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 20px;
      backdrop-filter: blur(20px);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      overflow: hidden;
      
      &:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 20px 40px var(--shadow);
        
        .skill-glow {
          opacity: 1;
        }
      }
      
      &.level-expert, &.level-master {
        border-color: var(--primary-500);
        
        .skill-glow {
          background: var(--gradient-primary);
        }
      }
      
      &.level-advanced {
        border-color: var(--cyan-500);
        
        .skill-glow {
          background: var(--gradient-secondary);
        }
      }
    }

    .skill-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: var(--gradient-accent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .skill-icon {
      width: 60px;
      height: 60px;
      background: var(--gradient-primary);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      
      i {
        font-size: 1.5rem;
        color: white;
      }
    }

    .skill-info {
      h4 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
      }
    }

    .skill-level {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      
      &.level-master {
        background: rgba(139, 92, 246, 0.1);
        color: #8b5cf6;
        border: 1px solid rgba(139, 92, 246, 0.2);
      }
      
      &.level-expert {
        background: rgba(99, 102, 241, 0.1);
        color: #6366f1;
        border: 1px solid rgba(99, 102, 241, 0.2);
      }
      
      &.level-advanced {
        background: rgba(6, 182, 212, 0.1);
        color: #06b6d4;
        border: 1px solid rgba(6, 182, 212, 0.2);
      }
      
      &.level-intermediate {
        background: rgba(16, 185, 129, 0.1);
        color: #10b981;
        border: 1px solid rgba(16, 185, 129, 0.2);
      }
    }

    .expertise-summary {
      margin-top: 4rem;
    }

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }

    .summary-card {
      padding: 2.5rem;
      border-radius: 20px;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &:hover {
        transform: translateY(-5px);
      }
    }

    .summary-icon {
      width: 80px;
      height: 80px;
      background: var(--gradient-secondary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      
      i {
        font-size: 2rem;
        color: white;
      }
    }

    .summary-card h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .summary-card p {
      color: var(--text-secondary);
      line-height: 1.6;
    }
  `]
})
export class SkillsComponent implements OnInit {
  activeCategory = 'All';
  categories = ['All', 'Cloud Platforms', 'DevOps & CI/CD', 'Infrastructure', 'Development'];
  
  skills: Skill[] = [
    {
      name: 'Microsoft Azure',
      level: 'Advanced',
      icon: 'fab fa-microsoft',
      category: 'Cloud Platforms',
      description: 'AKS, Logic Apps, Azure DevOps, and resource management'
    },
    {
      name: 'Amazon Web Services',
      level: 'Intermediate',
      icon: 'fab fa-aws',
      category: 'Cloud Platforms',
      description: 'EKS, EC2, S3, networking, and migration strategies'
    },
    {
      name: 'Kubernetes',
      level: 'Advanced',
      icon: 'fas fa-dharmachakra',
      category: 'DevOps & CI/CD',
      description: 'Container orchestration, cluster management, and scaling'
    },
    {
      name: 'Docker',
      level: 'Advanced',
      icon: 'fab fa-docker',
      category: 'DevOps & CI/CD',
      description: 'Containerization, optimization, and deployment strategies'
    },
    {
      name: 'Terraform',
      level: 'Intermediate',
      icon: 'fas fa-layer-group',
      category: 'Infrastructure',
      description: 'Infrastructure as Code and automated provisioning'
    },
    {
      name: 'Azure DevOps',
      level: 'Advanced',
      icon: 'fas fa-code-branch',
      category: 'DevOps & CI/CD',
      description: 'CI/CD pipelines, release management, and automation'
    },
    {
      name: 'Bash',
      level: 'Advanced',
      icon: 'fas fa-terminal',
      category: 'Development',
      description: 'Shell scripting and Linux system automation'
    },
    {
      name: 'RabbitMQ',
      level: 'Intermediate',
      icon: 'fas fa-exchange-alt',
      category: 'Infrastructure',
      description: 'Message queuing and distributed system communication'
    }
  ];

  ngOnInit() {
    // Animation setup handled by intersection observer
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
}