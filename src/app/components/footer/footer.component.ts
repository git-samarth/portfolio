import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-brand">
              <h3 class="gradient-text">Samarth Tiwari</h3>
              <p>Cloud Engineer & DevOps Specialist</p>
            </div>
            <p class="footer-description">
              Passionate about building scalable, secure, and efficient cloud infrastructure. 
              Always learning and exploring new technologies in the cloud computing space.
            </p>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Technologies</h4>
            <ul class="footer-links">
              <li>Microsoft Azure</li>
              <li>Amazon Web Services</li>
              <li>Kubernetes & Docker</li>
              <li>Terraform & IaC</li>
              <li>CI/CD & DevOps</li>
              <li>Cloud Migration</li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Connect With Me</h4>
            <div class="social-links">
              <a href="mailto:wrk.samarth@gmail.com" class="social-link" aria-label="Email">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="https://linkedin.com/in/samarthtiwari" target="_blank" class="social-link" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="tel:+918962220812" class="social-link" aria-label="Phone">
                <i class="fas fa-phone"></i>
              </a>
            </div>
            
            <div class="contact-info">
              <p>
                <i class="fas fa-envelope"></i>
                wrk.samarth&#64;gmail.com
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i>
                Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="footer-bottom-content">
            <p>&copy; {{ currentYear }} Samarth Tiwari. All rights reserved.</p>
            <p class="footer-note">
              Built with <i class="fas fa-heart"></i> using Angular & deployed on Cloudflare Pages
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--bg-secondary);
      border-top: 1px solid var(--border-color);
      padding: 3rem 0 1rem;
      margin-top: 4rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
      margin-bottom: 2rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .footer-section {
      h4 {
        color: var(--text-primary);
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }
    }

    .footer-brand {
      margin-bottom: 1rem;
      
      h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      
      p {
        color: var(--text-muted);
        margin: 0;
      }
    }

    .footer-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        margin-bottom: 0.5rem;
        
        a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 300ms ease;
          
          &:hover {
            color: var(--primary-600);
          }
        }
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .social-link {
      width: 45px;
      height: 45px;
      background: var(--bg-tertiary);
      border: 1px solid var(--border-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      text-decoration: none;
      transition: all 300ms ease;
      
      &:hover {
        background: var(--primary-600);
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
      }
      
      i {
        font-size: 1.1rem;
      }
    }

    .contact-info {
      p {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        color: var(--text-muted);
        font-size: 0.9rem;
        
        i {
          width: 16px;
          color: var(--primary-600);
        }
      }
    }

    .footer-divider {
      height: 1px;
      background: var(--border-color);
      margin: 2rem 0 1rem;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
      }
      
      p {
        margin: 0;
        color: var(--text-muted);
        font-size: 0.9rem;
      }
      
      .footer-note {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
        i {
          color: #ef4444;
          animation: pulse 2s infinite;
        }
      }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}