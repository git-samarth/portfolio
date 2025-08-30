import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section">
      <div class="container">
        <div class="about-header reveal">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Passionate about building the future of cloud infrastructure</p>
        </div>
        
        <div class="about-content">
          <div class="about-story reveal">
            <div class="story-card glass">
              <h3>My Journey</h3>
              <p>
                From a curious engineering student to a seasoned Cloud Engineer at TCS Digitate, 
                my journey has been driven by an insatiable appetite for solving complex infrastructure challenges. 
                I specialize in architecting resilient, scalable cloud solutions that empower businesses to thrive in the digital age.
              </p>
              <p>
                Based in Pune, India, I've had the privilege of working with cutting-edge technologies 
                and contributing to platforms that serve millions of users worldwide. My expertise spans 
                across multi-cloud environments, with deep knowledge in Azure, AWS, and modern DevOps practices.
              </p>
            </div>
          </div>
          
          <div class="about-details reveal">
            <div class="detail-cards">
              <div class="detail-card glass magnetic">
                <div class="card-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="card-content">
                  <h4>Location</h4>
                  <p>Pune, Maharashtra, India</p>
                </div>
              </div>
              
              <div class="detail-card glass magnetic">
                <div class="card-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="card-content">
                  <h4>Email</h4>
                  <p>wrk.samarth&#64;gmail.com</p>
                </div>
              </div>
              
              <div class="detail-card glass magnetic">
                <div class="card-icon">
                  <i class="fab fa-linkedin"></i>
                </div>
                <div class="card-content">
                  <h4>LinkedIn</h4>
                  <p>in/samarthtiwari</p>
                </div>
              </div>
              
              <div class="detail-card glass magnetic">
                <div class="card-icon">
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="card-content">
                  <h4>Education</h4>
                  <p>B.Tech ECE, CGPA: 8.28</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="certifications reveal">
          <h3>Certifications & Achievements</h3>
          <div class="cert-grid">
            <div class="cert-card glass magnetic">
              <div class="cert-badge">
                <i class="fab fa-microsoft"></i>
              </div>
              <div class="cert-info">
                <h4>Azure Fundamentals</h4>
                <p>AZ-900 Certified</p>
                <div class="cert-status verified">Verified</div>
              </div>
            </div>
            
            <div class="cert-card glass magnetic">
              <div class="cert-badge">
                <i class="fab fa-microsoft"></i>
              </div>
              <div class="cert-info">
                <h4>Azure Administrator</h4>
                <p>AZ-104 Certified</p>
                <div class="cert-status verified">Verified</div>
              </div>
            </div>
            
            <div class="cert-card glass magnetic">
              <div class="cert-badge">
                <i class="fab fa-aws"></i>
              </div>
              <div class="cert-info">
                <h4>AWS Cloud Practitioner</h4>
                <p>Certified Professional</p>
                <div class="cert-status verified">Verified</div>
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
      position: relative;
    }

    .about-header {
      text-align: center;
      margin-bottom: 4rem;
      
      .section-title {
        margin-bottom: 1rem;
      }
      
      .section-subtitle {
        font-size: 1.2rem;
        color: var(--text-muted);
      }
    }

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      margin-bottom: 4rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .story-card {
      padding: 3rem;
      border-radius: 20px;
      
      h3 {
        color: var(--primary-500);
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
      }
      
      p {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 1.5rem;
        color: var(--text-secondary);
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .detail-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
    }

    .detail-card {
      padding: 2rem;
      border-radius: 16px;
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &:hover {
        transform: translateY(-5px);
      }
    }

    .card-icon {
      width: 50px;
      height: 50px;
      background: var(--gradient-primary);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      
      i {
        font-size: 1.2rem;
        color: white;
      }
    }

    .card-content {
      h4 {
        font-size: 1rem;
        margin-bottom: 0.25rem;
        color: var(--text-primary);
      }
      
      p {
        font-size: 0.9rem;
        color: var(--text-muted);
        margin: 0;
      }
    }

    .certifications {
      text-align: center;
      
      h3 {
        font-size: 2rem;
        margin-bottom: 3rem;
        color: var(--text-primary);
      }
    }

    .cert-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .cert-card {
      padding: 2rem;
      border-radius: 16px;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &:hover {
        transform: translateY(-10px);
      }
    }

    .cert-badge {
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

    .cert-info {
      h4 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
      }
      
      p {
        color: var(--text-muted);
        margin-bottom: 1rem;
      }
    }

    .cert-status {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      
      &.verified {
        background: rgba(16, 185, 129, 0.1);
        color: #10b981;
        border: 1px solid rgba(16, 185, 129, 0.2);
      }
    }
  `]
})
export class AboutComponent {}