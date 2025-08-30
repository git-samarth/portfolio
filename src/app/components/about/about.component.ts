import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Get to know more about my background and expertise</p>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <div class="about-intro">
              <h3>Cloud Engineer & DevOps Specialist</h3>
              <p>
                I'm a passionate Cloud Engineer with 3 years of hands-on experience in designing, 
                implementing, and managing scalable cloud infrastructure. My expertise spans across 
                Azure and AWS platforms, with a strong focus on automation, containerization, and 
                CI/CD practices.
              </p>
            </div>
            
            <div class="about-details">
              <div class="detail-grid">
                <div class="detail-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Location</strong>
                    <span>Pune, Maharashtra, India</span>
                  </div>
                </div>
                
                <div class="detail-item">
                  <i class="fas fa-envelope"></i>
                  <div>
                    <strong>Email</strong>
                    <span>wrk.samarth&#64;gmail.com</span>
                  </div>
                </div>
                
                <div class="detail-item">
                  <i class="fas fa-phone"></i>
                  <div>
                    <strong>Phone</strong>
                    <span>+91 8962220812</span>
                  </div>
                </div>
                
                <div class="detail-item">
                  <i class="fab fa-linkedin"></i>
                  <div>
                    <strong>LinkedIn</strong>
                    <span>in/samarthtiwari</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-stats">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">3+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              
              <div class="stat-card">
                <div class="stat-number">100+</div>
                <div class="stat-label">Customers Served</div>
              </div>
              
              <div class="stat-card">
                <div class="stat-number">5+</div>
                <div class="stat-label">Cloud Certifications</div>
              </div>
              
              <div class="stat-card">
                <div class="stat-number">50+</div>
                <div class="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="certifications">
          <h3>Certifications</h3>
          <div class="cert-grid">
            <div class="cert-card">
              <div class="cert-icon">
                <i class="fab fa-microsoft"></i>
              </div>
              <div class="cert-info">
                <h4>Azure Fundamentals</h4>
                <p>AZ-900</p>
              </div>
            </div>
            
            <div class="cert-card">
              <div class="cert-icon">
                <i class="fab fa-microsoft"></i>
              </div>
              <div class="cert-info">
                <h4>Azure Administrator</h4>
                <p>AZ-104</p>
              </div>
            </div>
            
            <div class="cert-card">
              <div class="cert-icon">
                <i class="fab fa-aws"></i>
              </div>
              <div class="cert-info">
                <h4>AWS Cloud Practitioner</h4>
                <p>Certified</p>
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
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      margin-bottom: 4rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .about-intro {
      margin-bottom: 2rem;
      
      h3 {
        color: var(--primary-600);
        margin-bottom: 1rem;
      }
      
      p {
        font-size: 1.1rem;
        line-height: 1.7;
      }
    }

    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      
      i {
        font-size: 1.2rem;
        color: var(--primary-600);
        width: 20px;
      }
      
      div {
        display: flex;
        flex-direction: column;
        
        strong {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        span {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .stat-card {
      text-align: center;
      padding: 2rem 1rem;
      background: var(--card-bg);
      border-radius: 1rem;
      border: 1px solid var(--border-color);
      transition: all 300ms ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px var(--shadow-color);
      }
      
      .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--primary-600);
        margin-bottom: 0.5rem;
      }
      
      .stat-label {
        font-size: 0.9rem;
        color: var(--text-muted);
        font-weight: 500;
      }
    }

    .certifications {
      h3 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2rem;
      }
    }

    .cert-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .cert-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: var(--card-bg);
      border-radius: 1rem;
      border: 1px solid var(--border-color);
      transition: all 300ms ease;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 25px var(--shadow-color);
      }
      
      .cert-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        
        i {
          font-size: 1.5rem;
          color: white;
        }
      }
      
      .cert-info {
        h4 {
          margin-bottom: 0.25rem;
          font-size: 1.1rem;
        }
        
        p {
          color: var(--text-muted);
          margin: 0;
          font-size: 0.9rem;
        }
      }
    }
  `]
})
export class AboutComponent {}