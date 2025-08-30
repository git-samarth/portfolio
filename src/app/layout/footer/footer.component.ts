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
          <div class="footer-brand">
            <div class="brand-logo">
              <i class="fas fa-cloud"></i>
            </div>
            <h3>Samarth Tiwari</h3>
            <p>Cloud Engineer & DevOps Specialist</p>
            <p class="brand-description">
              Building the future of cloud infrastructure, one solution at a time. 
              Passionate about creating scalable, resilient systems that empower businesses to thrive.
            </p>
          </div>
          
          <div class="footer-links">
            <div class="link-group">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div class="link-group">
              <h4>Expertise</h4>
              <ul class="expertise-list">
                <li>• Microsoft Azure</li>
                <li>• Amazon Web Services</li>
                <li>• Kubernetes & Docker</li>
                <li>• Infrastructure as Code</li>
                <li>• CI/CD & DevOps</li>
                <li>• Cloud Migration</li>
              </ul>
            </div>
            
            <div class="link-group connect-section">
              <h4>Connect</h4>
              <div class="social-links">
                <a href="mailto:wrk.samarth@gmail.com" class="social-link magnetic" title="Email">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="https://linkedin.com/in/samarthtiwari" target="_blank" class="social-link magnetic" title="LinkedIn">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="tel:+918962220812" class="social-link magnetic" title="Phone">
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
        </div>
        
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="footer-bottom-content">
            <p class="copyright">&copy; {{ currentYear }} Samarth Tiwari. All rights reserved.</p>
            <div class="footer-tech">
              <p>Built with <i class="fas fa-heart"></i> using Angular</p>
              <p>Deployed on Cloudflare Pages</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--bg-secondary);
      border-top: 1px solid var(--border);
      padding: 4rem 0 2rem;
      margin-top: 4rem;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--gradient-primary);
      }
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 4rem;
      margin-bottom: 3rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .footer-brand {
      .brand-logo {
        width: 60px;
        height: 60px;
        background: var(--gradient-primary);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        
        span {
          font-size: 1.5rem;
          font-weight: 900;
          color: white;
        }
      }
      
      h3 {
        font-size: 1.5rem;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }
      
      p {
        color: var(--text-muted);
        margin-bottom: 1rem;
        
        &.brand-description {
          line-height: 1.6;
          font-size: 0.95rem;
        }
      }
    }

    .footer-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      
      @media (max-width: 768px) {
        gap: 2rem;
      }
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
    }

    .link-group {
      h4 {
        color: var(--text-primary);
        font-size: 1.1rem;
        margin-bottom: 1.25rem;
        font-weight: 600;
      }
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
          margin-bottom: 0.75rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          
          a {
            color: var(--text-muted);
            text-decoration: none;
            transition: all 0.3s ease;
            
            &:hover {
              color: var(--primary-500);
              transform: translateX(5px);
            }
          }
        }
      }
      
      &.connect-section {
        text-align: center;
        
        @media (max-width: 480px) {
          text-align: center;
        }
      }
    }
    
    .expertise-list {
      li {
        text-align: left;
        padding-left: 0.5rem;
      }
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1.25rem;
      margin-bottom: 1.75rem;
      
      @media (max-width: 480px) {
        justify-content: center;
      }
    }

    .social-link {
      width: 45px;
      height: 45px;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(20px);
      
      &:hover {
        background: var(--gradient-primary);
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 8px 25px var(--glow);
      }
      
      i {
        font-size: 1.1rem;
      }
    }

    .contact-info {
      text-align: center;
      
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
        color: var(--text-muted);
        font-size: 0.9rem;
        
        i {
          width: 16px;
          color: var(--primary-500);
          flex-shrink: 0;
        }
        
        @media (max-width: 480px) {
          justify-content: center;
        }
      }
    }

    .footer-divider {
      height: 1px;
      background: var(--border);
      margin: 3rem 0 2rem;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
      }
    }
    
    .copyright {
      margin: 0;
      color: var(--text-muted);
      font-size: 0.9rem;
      text-align: center;
      
      @media (min-width: 769px) {
        text-align: left;
      }
    }
    
    .footer-tech {
      text-align: center;
      
      p {
        margin: 0;
        color: var(--text-muted);
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 0.25rem;
        
        &:last-child {
          margin-bottom: 0;
        }
        
        i {
          color: #ef4444;
          animation: heartbeat 2s infinite;
        }
      }
      
      @media (min-width: 769px) {
        text-align: right;
        
        p {
          justify-content: flex-end;
        }
      }
    }

    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}