import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  highlights: string[];
  icon: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <div class="projects-header reveal">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Transforming ideas into scalable cloud solutions</p>
        </div>
        
        <div class="projects-grid">
          <div *ngFor="let project of projects; let i = index" 
               class="project-card glass magnetic reveal"
               [style.animation-delay]="i * 200 + 'ms'">
            
            <div class="project-header">
              <div class="project-icon">
                <i [class]="project.icon"></i>
              </div>
              <div class="project-category">{{ project.category }}</div>
            </div>
            
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-impact">
                <div class="impact-label">Impact</div>
                <div class="impact-text">{{ project.impact }}</div>
              </div>
              
              <div class="project-highlights">
                <h5>Key Highlights</h5>
                <ul>
                  <li *ngFor="let highlight of project.highlights">{{ highlight }}</li>
                </ul>
              </div>
              
              <div class="project-tech">
                <div class="tech-stack">
                  <span *ngFor="let tech of project.technologies" class="tech-badge">{{ tech }}</span>
                </div>
              </div>
            </div>
            
            <div class="project-footer">
              <button class="project-btn">
                <i class="fas fa-external-link-alt"></i>
                View Details
              </button>
            </div>
          </div>
        </div>
        
        <div class="projects-cta reveal">
          <div class="cta-card glass">
            <h3>Interested in My Work?</h3>
            <p>Let's discuss how I can help architect your next cloud solution</p>
            <a href="#contact" class="btn btn-primary">
              <i class="fas fa-rocket"></i>
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      background: var(--bg-secondary);
    }

    .projects-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
    }

    .project-card {
      padding: 0;
      border-radius: 24px;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      
      &:hover {
        transform: translateY(-15px) scale(1.02);
        box-shadow: 0 25px 50px var(--shadow);
      }
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--gradient-primary);
      }
    }

    .project-header {
      padding: 2rem 2rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .project-icon {
      width: 60px;
      height: 60px;
      background: var(--gradient-primary);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      i {
        font-size: 1.5rem;
        color: white;
      }
    }

    .project-category {
      background: var(--bg-primary);
      color: var(--primary-500);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      border: 1px solid var(--border);
    }

    .project-content {
      padding: 0 2rem 1rem;
      
      h3 {
        font-size: 1.4rem;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }
      
      .project-description {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }
    }

    .project-impact {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.2);
      border-radius: 12px;
      padding: 1rem;
      margin-bottom: 1.5rem;
      
      .impact-label {
        font-size: 0.8rem;
        font-weight: 600;
        color: #10b981;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .impact-text {
        color: var(--text-primary);
        font-weight: 500;
      }
    }

    .project-highlights {
      margin-bottom: 1.5rem;
      
      h5 {
        font-size: 1rem;
        color: var(--text-primary);
        margin-bottom: 0.75rem;
      }
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          
          &::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--primary-500);
            font-weight: bold;
          }
        }
      }
    }

    .project-tech {
      margin-bottom: 1.5rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-badge {
      background: var(--gradient-secondary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 16px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .project-footer {
      padding: 0 2rem 2rem;
    }

    .project-btn {
      width: 100%;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      color: var(--text-primary);
      padding: 0.75rem 1rem;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(20px);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-weight: 500;
      
      &:hover {
        background: var(--gradient-primary);
        color: white;
        transform: translateY(-2px);
      }
    }

    .projects-cta {
      text-align: center;
    }

    .cta-card {
      padding: 3rem;
      border-radius: 24px;
      max-width: 600px;
      margin: 0 auto;
      
      h3 {
        font-size: 2rem;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }
      
      p {
        font-size: 1.1rem;
        color: var(--text-secondary);
        margin-bottom: 2rem;
      }
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Platform Reliability Engine',
      description: 'Comprehensive automation solution for cloud infrastructure management, monitoring, and self-healing capabilities.',
      impact: '95% reduction in manual interventions and 99.9% uptime achievement',
      category: 'Infrastructure',
      icon: 'fas fa-cogs',
      technologies: ['Terraform', 'Azure DevOps', 'Bash', 'ARM Templates', 'Logic Apps'],
      highlights: [
        'Automated Terraform workflows reducing deployment time by 70%',
        'Built comprehensive monitoring dashboards for real-time insights',
        'Implemented cost optimization strategies saving 30% on cloud spend',
        'Created self-healing infrastructure with automated recovery'
      ]
    },
    {
      title: 'Cross-Cloud Migration Platform',
      description: 'Large-scale migration solution enabling seamless workload transitions between Azure and AWS with minimal downtime.',
      impact: 'Successfully migrated 50+ workloads with zero data loss',
      category: 'Migration',
      icon: 'fas fa-exchange-alt',
      technologies: ['AWS DMS', 'Azure Migrate', 'Striim', 'CloudFormation', 'Bash'],
      highlights: [
        'Achieved minimal downtime migration using blue-green deployment',
        'Implemented automated rollback mechanisms for risk mitigation',
        'Conducted comprehensive performance analysis and optimization',
        'Reduced migration costs by 40% through strategic planning'
      ]
    },
    {
      title: 'Zero-Touch Deployment System',
      description: 'Fully automated customer onboarding and deployment pipeline eliminating manual processes and human errors.',
      impact: 'Automated 100% of customer deployments, reducing time from days to hours',
      category: 'Automation',
      icon: 'fas fa-rocket',
      technologies: ['Logic Apps', 'Bash', 'Kubernetes', 'Azure DevOps', 'ARM Templates'],
      highlights: [
        'Eliminated manual deployment processes entirely',
        'Reduced customer onboarding time by 90%',
        'Implemented comprehensive validation and testing automation',
        'Built scalable architecture supporting 100+ concurrent deployments'
      ]
    }
  ];
}