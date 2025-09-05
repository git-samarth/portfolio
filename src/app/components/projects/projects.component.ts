import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  longDescription: string;
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
        <div class="section-header">
          <h2 class="section-title">Key Projects</h2>
          <p class="section-subtitle">Showcasing my expertise in cloud engineering and automation</p>
        </div>
        
        <div class="projects-grid">
          <div *ngFor="let project of projects; let i = index" class="project-card" [style.animation-delay]="i * 200 + 'ms'">
            <div class="project-icon">
              <i [class]="project.icon"></i>
            </div>
            
            <div class="project-content">
              <div class="project-header">
                <h3>{{ project.title }}</h3>
                <span class="project-category">{{ project.category }}</span>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-details" [class.expanded]="expandedProject === i">
                <div class="long-description">
                  <p>{{ project.longDescription }}</p>
                  
                  <div class="highlights">
                    <h5>Key Highlights:</h5>
                    <ul>
                      <li *ngFor="let highlight of project.highlights">{{ highlight }}</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="project-tech">
                <div class="tech-stack">
                  <span *ngFor="let tech of project.technologies" class="tech-badge">{{ tech }}</span>
                </div>
              </div>
              
              <div class="project-actions">
                <button class="btn-expand" (click)="toggleProject(i)">
                  {{ expandedProject === i ? 'Show Less' : 'Learn More' }}
                  <i [class]="expandedProject === i ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
                </button>
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
    }

    .project-card {
      background: var(--card-bg);
      border-radius: 1.5rem;
      padding: 2rem;
      border: 1px solid var(--border-color);
      transition: all 400ms ease;
      position: relative;
      overflow: hidden;
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.6s ease-out forwards;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--gradient-primary);
      }
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px var(--shadow-color);
      }
    }

    .project-icon {
      width: 70px;
      height: 70px;
      background: var(--gradient-secondary);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      
      i {
        font-size: 2rem;
        color: white;
      }
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
      
      h3 {
        font-size: 1.4rem;
        margin: 0;
        flex: 1;
      }
      
      .project-category {
        background: var(--bg-tertiary);
        color: var(--primary-600);
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 500;
        margin-left: 1rem;
      }
    }

    .project-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .project-details {
      max-height: 0;
      overflow: hidden;
      transition: max-height 400ms ease;
      
      &.expanded {
        max-height: 500px;
      }
      
      .long-description {
        padding-top: 1rem;
        border-top: 1px solid var(--border-color);
        
        p {
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }
      }
      
      .highlights {
        h5 {
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }
        
        ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1rem;
          
          li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.5rem;
            color: var(--text-secondary);
            
            &::before {
              content: '→';
              position: absolute;
              left: 0;
              color: var(--primary-600);
              font-weight: bold;
            }
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
      background: var(--gradient-primary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .project-actions {
      display: flex;
      justify-content: center;
    }

    .btn-expand {
      background: transparent;
      border: 2px solid var(--primary-600);
      color: var(--primary-600);
      padding: 0.75rem 1.5rem;
      border-radius: 2rem;
      cursor: pointer;
      font-weight: 500;
      transition: all 300ms ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      &:hover {
        background: var(--primary-600);
        color: white;
        transform: translateY(-2px);
      }
      
      i {
        transition: transform 300ms ease;
      }
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class ProjectsComponent {
  expandedProject: number | null = null;

  projects: Project[] = [
    {
      title: 'Platform Reliability & Automation',
      description: 'Comprehensive automation solution for cloud infrastructure management and monitoring.',
      longDescription: 'Developed a robust platform reliability system that automates Terraform workflows for rapid scalability and implements comprehensive monitoring solutions. The system includes cost optimization features and self-healing mechanisms.',
      category: 'Infrastructure',
      icon: 'fas fa-cogs',
      technologies: ['Terraform', 'Azure DevOps', 'Bash', 'ARM Templates', 'Logic Apps'],
      highlights: [
        'Automated Terraform workflows reducing deployment time by 70%',
        'Built comprehensive monitoring dashboards for real-time insights',
        'Implemented cost optimization strategies saving 30% on cloud spend',
        'Created self-healing infrastructure with 99.9% uptime',
        'Developed automated backup and disaster recovery solutions'
      ]
    },
    {
      title: 'Cross-Cloud Data Migration',
      description: 'Large-scale migration project from Azure to AWS with minimal downtime implementation.',
      longDescription: 'Led a complex cross-cloud migration initiative involving multiple data sources, applications, and services. Implemented comprehensive migration strategies with full automation and performance optimization.',
      category: 'Migration',
      icon: 'fas fa-exchange-alt',
      technologies: ['AWS DMS', 'Azure Migrate', 'Striim', 'CloudFormation', 'Bash'],
      highlights: [
        'Successfully migrated 100+ TB of data with zero data loss',
        'Achieved minimal downtime migration using blue-green deployment',
        'Implemented automated rollback mechanisms for risk mitigation',
        'Conducted comprehensive performance analysis and optimization',
        'Reduced migration costs by 40% through strategic planning'
      ]
    },
    {
      title: 'Kubernetes Multi-Cloud Platform',
      description: 'Scalable Kubernetes infrastructure spanning Azure AKS and AWS EKS for AI workloads.',
      longDescription: 'Designed and implemented a multi-cloud Kubernetes platform optimized for AI and machine learning workloads. The platform serves 100+ enterprise customers with high availability and auto-scaling capabilities.',
      category: 'Container Orchestration',
      icon: 'fas fa-dharmachakra',
      technologies: ['Kubernetes', 'Docker', 'AKS', 'EKS', 'Helm', 'Istio'],
      highlights: [
        'Deployed clusters serving 100+ enterprise customers',
        'Implemented auto-scaling for dynamic workload management',
        'Built comprehensive logging and monitoring with Prometheus',
        'Achieved 99.9% uptime across all environments',
        'Optimized resource utilization reducing costs by 35%'
      ]
    }
  ];

  toggleProject(index: number) {
    this.expandedProject = this.expandedProject === index ? null : index;
  }
}