import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Professional Experience</h2>
          <p class="section-subtitle">My journey in cloud engineering and DevOps</p>
        </div>
        
        <div class="timeline">
          <div *ngFor="let exp of experiences; let i = index" class="timeline-item" [class.left]="i % 2 === 0" [class.right]="i % 2 === 1">
            <div class="timeline-content">
              <div class="experience-card">
                <div class="card-header">
                  <h3>{{ exp.title }}</h3>
                  <div class="company-info">
                    <h4>{{ exp.company }}</h4>
                    <div class="meta-info">
                      <span class="period">
                        <i class="fas fa-calendar"></i>
                        {{ exp.period }}
                      </span>
                      <span class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        {{ exp.location }}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div class="card-body">
                  <p class="description">{{ exp.description }}</p>
                  
                  <div class="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      <li *ngFor="let achievement of exp.achievements">{{ achievement }}</li>
                    </ul>
                  </div>
                  
                  <div class="technologies">
                    <h5>Technologies Used:</h5>
                    <div class="tech-tags">
                      <span *ngFor="let tech of exp.technologies" class="tech-tag">{{ tech }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline-marker"></div>
          </div>
        </div>
        
        <div class="education-section">
          <h3>Education</h3>
          <div class="education-card">
            <div class="education-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="education-info">
              <h4>B.Tech in Electronics and Communication Engineering</h4>
              <p class="institution">Samrat Ashok Technological Institute, Vidisha, M.P.</p>
              <div class="education-meta">
                <span class="year">Graduated: 2022</span>
                <span class="grade">CGPA: 8.28</span>
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

    .timeline {
      position: relative;
      margin: 4rem 0;
      
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 3px;
        background: var(--gradient-primary);
        transform: translateX(-50%);
        
        @media (max-width: 768px) {
          left: 30px;
        }
      }
    }

    .timeline-item {
      position: relative;
      margin-bottom: 4rem;
      
      &.left .timeline-content {
        margin-right: 50%;
        padding-right: 3rem;
        text-align: right;
        
        @media (max-width: 768px) {
          margin-right: 0;
          margin-left: 60px;
          padding-right: 0;
          text-align: left;
        }
      }
      
      &.right .timeline-content {
        margin-left: 50%;
        padding-left: 3rem;
        
        @media (max-width: 768px) {
          margin-left: 60px;
          padding-left: 0;
        }
      }
    }

    .timeline-marker {
      position: absolute;
      left: 50%;
      top: 2rem;
      width: 20px;
      height: 20px;
      background: var(--primary-600);
      border: 4px solid var(--bg-primary);
      border-radius: 50%;
      transform: translateX(-50%);
      z-index: 2;
      
      @media (max-width: 768px) {
        left: 30px;
      }
      
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        background: rgba(59, 130, 246, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: pulse 2s infinite;
      }
    }

    .experience-card {
      background: var(--card-bg);
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 10px 30px var(--shadow-color);
      border: 1px solid var(--border-color);
      transition: all 300ms ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px var(--shadow-color);
      }
    }

    .card-header {
      margin-bottom: 1.5rem;
      
      h3 {
        color: var(--primary-600);
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
      }
      
      h4 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }
      
      .meta-info {
        display: flex;
        gap: 2rem;
        font-size: 0.9rem;
        color: var(--text-muted);
        
        @media (max-width: 480px) {
          flex-direction: column;
          gap: 0.5rem;
        }
        
        span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }

    .description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .achievements {
      margin-bottom: 1.5rem;
      
      h5 {
        color: var(--text-primary);
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }
      
      ul {
        list-style: none;
        padding: 0;
        
        li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          
          &::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--success-500);
            font-weight: bold;
          }
        }
      }
    }

    .technologies {
      h5 {
        color: var(--text-primary);
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      background: var(--bg-tertiary);
      color: var(--primary-600);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.85rem;
      font-weight: 500;
      border: 1px solid var(--border-color);
    }

    .education-section {
      margin-top: 4rem;
      
      h3 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }

    .education-card {
      display: flex;
      align-items: center;
      gap: 2rem;
      background: var(--card-bg);
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid var(--border-color);
      box-shadow: 0 10px 30px var(--shadow-color);
      max-width: 600px;
      margin: 0 auto;
      
      @media (max-width: 480px) {
        flex-direction: column;
        text-align: center;
      }
    }

    .education-icon {
      width: 80px;
      height: 80px;
      background: var(--gradient-secondary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      
      i {
        font-size: 2rem;
        color: white;
      }
    }

    .education-info {
      h4 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
      }
      
      .institution {
        color: var(--text-secondary);
        margin-bottom: 1rem;
      }
      
      .education-meta {
        display: flex;
        gap: 2rem;
        font-size: 0.9rem;
        color: var(--text-muted);
        
        @media (max-width: 480px) {
          justify-content: center;
        }
      }
    }

    @keyframes pulse {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
    }
  `]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Cloud Engineer',
      company: 'Digitate - A Tata Consultancy Services Venture',
      period: 'June 2022 - Present',
      location: 'Pune, Maharashtra',
      description: 'Leading cloud infrastructure design and implementation for AI-powered SaaS products serving 100+ enterprise customers.',
      achievements: [
        'Engineered Kubernetes clusters on Azure (AKS) and AWS (EKS) for scalable AI workloads',
        'Designed automated CI/CD pipelines using Azure DevOps and Logic Apps',
        'Led cross-cloud migrations from Azure to AWS with minimal downtime',
        'Built health monitoring and self-healing systems for 99.9% uptime',
        'Automated customer onboarding/offboarding for zero-touch deployments',
        'Implemented AWS networking solutions using Transit Gateway',
        'Ensured SOC2 compliance and CSPM standards across all environments'
      ],
      technologies: [
        'Azure', 'AWS', 'Kubernetes', 'Docker', 'Terraform', 'Azure DevOps', 
        'Logic Apps', 'Bash', 'RabbitMQ', 'ARM Templates'
      ]
    }
  ];
}