import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <div class="experience-header reveal">
          <h2 class="section-title">Professional Journey</h2>
          <p class="section-subtitle">Building the future of cloud infrastructure, one solution at a time</p>
        </div>
        
        <div class="timeline reveal">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content glass">
              <div class="timeline-header">
                <div class="company-logo">
                  <i class="fas fa-building"></i>
                </div>
                <div class="job-info">
                  <h3>Cloud Engineer</h3>
                  <h4>Digitate - A Tata Consultancy Services Venture</h4>
                  <div class="job-meta">
                    <span class="duration">June 2022 - Present</span>
                    <span class="location">Pune, Maharashtra</span>
                  </div>
                </div>
              </div>
              
              <div class="job-description">
                <p>
                  Leading cloud infrastructure design and implementation for AI-powered SaaS platforms 
                  serving 100+ enterprise customers. Architecting resilient, scalable solutions that 
                  handle millions of operations with minimal downtime deployments.
                </p>
              </div>
              
              <div class="achievements">
                <h5>Key Achievements</h5>
                <div class="achievement-grid">
                  <div class="achievement-item">
                    <div class="achievement-icon">
                      <i class="fas fa-server"></i>
                    </div>
                    <div class="achievement-text">
                      <strong>Kubernetes Infrastructure</strong>
                      <p>Engineered AKS and EKS clusters serving 100+ customers</p>
                    </div>
                  </div>
                  
                  <div class="achievement-item">
                    <div class="achievement-icon">
                      <i class="fas fa-exchange-alt"></i>
                    </div>
                    <div class="achievement-text">
                      <strong>Minimal Downtime</strong>
                      <p>Led seamless Azure→AWS migrations with minimal downtime</p>
                    </div>
                  </div>
                  
                  <div class="achievement-item">
                    <div class="achievement-icon">
                      <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="achievement-text">
                      <strong>Self-Healing Systems</strong>
                      <p>Built monitoring systems reducing downtime by 95%</p>
                    </div>
                  </div>
                  
                  <div class="achievement-item">
                    <div class="achievement-icon">
                      <i class="fas fa-rocket"></i>
                    </div>
                    <div class="achievement-text">
                      <strong>Automated Deployments</strong>
                      <p>Zero-touch customer onboarding and deployment automation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="tech-stack">
                <h5>Technologies Used</h5>
                <div class="tech-tags">
                  <span class="tech-tag">Azure</span>
                  <span class="tech-tag">AWS</span>
                  <span class="tech-tag">Kubernetes</span>
                  <span class="tech-tag">Terraform</span>
                  <span class="tech-tag">Azure DevOps</span>
                  <span class="tech-tag">Docker</span>
                  <span class="tech-tag">PowerShell</span>
                  <span class="tech-tag">Logic Apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="education-section reveal">
          <h3>Education</h3>
          <div class="education-card glass magnetic">
            <div class="education-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="education-details">
              <h4>Bachelor of Technology</h4>
              <p class="degree">Electronics and Communication Engineering</p>
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
    .section {
      background: var(--bg-primary);
    }

    .experience-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .timeline {
      position: relative;
      max-width: 900px;
      margin: 0 auto 4rem;
    }

    .timeline-item {
      position: relative;
      padding-left: 3rem;
      
      @media (max-width: 768px) {
        padding-left: 1.5rem;
      }
    }

    .timeline-marker {
      position: absolute;
      left: 0;
      top: 2rem;
      width: 20px;
      height: 20px;
      background: var(--gradient-primary);
      border: 4px solid var(--bg-primary);
      border-radius: 50%;
      z-index: 2;
      
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        background: rgba(99, 102, 241, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: pulse 2s infinite;
      }
    }

    .timeline-content {
      padding: 3rem;
      border-radius: 20px;
      margin-left: 2rem;
      
      @media (max-width: 768px) {
        margin-left: 1rem;
        padding: 2rem;
      }
    }

    .timeline-header {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 2rem;
      
      @media (max-width: 480px) {
        flex-direction: column;
        gap: 1rem;
      }
    }

    .company-logo {
      width: 60px;
      height: 60px;
      background: var(--gradient-secondary);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      
      i {
        font-size: 1.5rem;
        color: white;
      }
    }

    .job-info {
      h3 {
        font-size: 1.5rem;
        color: var(--primary-500);
        margin-bottom: 0.5rem;
      }
      
      h4 {
        font-size: 1.2rem;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }
    }

    .job-meta {
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
        
        &::before {
          content: '📅';
        }
        
        &.location::before {
          content: '📍';
        }
      }
    }

    .job-description {
      margin-bottom: 2rem;
      
      p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--text-secondary);
      }
    }

    .achievements {
      margin-bottom: 2rem;
      
      h5 {
        font-size: 1.2rem;
        color: var(--text-primary);
        margin-bottom: 1.5rem;
      }
    }

    .achievement-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .achievement-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
      background: var(--bg-secondary);
      border-radius: 12px;
      border: 1px solid var(--border);
    }

    .achievement-icon {
      width: 40px;
      height: 40px;
      background: var(--gradient-primary);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      
      i {
        font-size: 1rem;
        color: white;
      }
    }

    .achievement-text {
      strong {
        display: block;
        font-size: 0.9rem;
        color: var(--text-primary);
        margin-bottom: 0.25rem;
      }
      
      p {
        font-size: 0.8rem;
        color: var(--text-muted);
        margin: 0;
        line-height: 1.4;
      }
    }

    .tech-stack {
      h5 {
        font-size: 1.2rem;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      background: var(--gradient-primary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .education-section {
      text-align: center;
      
      h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: var(--text-primary);
      }
    }

    .education-card {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 2.5rem;
      border-radius: 20px;
      max-width: 600px;
      margin: 0 auto;
      text-align: left;
      
      @media (max-width: 480px) {
        flex-direction: column;
        text-align: center;
      }
    }

    .education-icon {
      width: 80px;
      height: 80px;
      background: var(--gradient-accent);
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

    .education-details {
      h4 {
        font-size: 1.3rem;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }
      
      .degree {
        font-size: 1.1rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
      }
      
      .institution {
        color: var(--text-muted);
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
export class ExperienceComponent {}