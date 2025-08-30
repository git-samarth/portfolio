import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <div class="contact-header reveal">
          <h2 class="section-title">Let's Build Something Amazing</h2>
          <p class="section-subtitle">Ready to discuss your next cloud project? I'm here to help.</p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info reveal">
            <div class="info-card glass">
              <h3>Get In Touch</h3>
              <p>
                Whether you're looking to scale your infrastructure, migrate to the cloud, 
                or build resilient systems, I'm excited to collaborate and bring your vision to life.
              </p>
              
              <div class="contact-methods">
                <a href="mailto:wrk.samarth@gmail.com?subject=Portfolio Inquiry" class="contact-method magnetic">
                  <div class="method-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="method-info">
                    <h4>Email</h4>
                    <p>wrk.samarth&#64;gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+918962220812" class="contact-method magnetic">
                  <div class="method-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="method-info">
                    <h4>Call Now</h4>
                    <p>+91 8962220812</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/samarthtiwari" target="_blank" rel="noopener noreferrer" class="contact-method magnetic">
                  <div class="method-icon">
                    <i class="fab fa-linkedin"></i>
                  </div>
                  <div class="method-info">
                    <h4>LinkedIn</h4>
                    <p>Connect professionally</p>
                  </div>
                </a>
                
                <div class="contact-method">
                  <div class="method-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="method-info">
                    <h4>Location</h4>
                    <p>Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              
              <div class="availability-status">
                <div class="status-indicator"></div>
                <span>Available for new opportunities</span>
              </div>
            </div>
          </div>
          
          <div class="contact-form-section reveal">
            <form class="contact-form glass" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <h3>Send a Message</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    [(ngModel)]="formData.name"
                    required
                    placeholder="Your name">
                </div>
                
                <div class="form-group">
                  <label for="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    placeholder="your.email@example.com">
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  placeholder="What's this about?">
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."></textarea>
              </div>
              
              <button 
                type="submit" 
                class="submit-btn btn btn-primary"
                [disabled]="contactForm.invalid || isSubmitting">
                <span *ngIf="!isSubmitting">
                  <i class="fas fa-paper-plane"></i>
                  Send Message
                </span>
                <span *ngIf="isSubmitting">
                  <i class="fas fa-spinner fa-spin"></i>
                  Sending...
                </span>
              </button>
              
              <div class="form-status" *ngIf="submitStatus">
                <div class="status-message" [class.success]="submitStatus === 'success'" [class.error]="submitStatus === 'error'">
                  <i [class]="submitStatus === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
                  <span *ngIf="submitStatus === 'success'">Message sent! I'll get back to you soon.</span>
                  <span *ngIf="submitStatus === 'error'">Something went wrong. Please try again.</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      background: var(--bg-primary);
    }

    .contact-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .info-card {
      padding: 3rem;
      border-radius: 24px;
      height: fit-content;
      
      h3 {
        font-size: 1.8rem;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }
      
      p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-secondary);
        margin-bottom: 2rem;
      }
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 16px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      min-height: 60px;
      touch-action: manipulation;
      
      &:hover, &:active {
        transform: translateX(10px);
        background: var(--gradient-primary);
        color: white;
        
        .method-icon {
          background: rgba(255, 255, 255, 0.2);
        }
      }
      
      @media (max-width: 768px) {
        padding: 1.25rem;
        min-height: 70px;
        
        &:hover {
          transform: translateX(5px);
        }
      }
    }

    .method-icon {
      width: 50px;
      height: 50px;
      background: var(--gradient-primary);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.3s ease;
      
      i {
        font-size: 1.2rem;
        color: white;
      }
    }

    .method-info {
      h4 {
        font-size: 1rem;
        margin-bottom: 0.25rem;
        font-weight: 600;
      }
      
      p {
        font-size: 0.9rem;
        margin: 0;
        opacity: 0.8;
      }
    }

    .availability-status {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.2);
      border-radius: 12px;
      color: #10b981;
      font-weight: 500;
    }

    .status-indicator {
      width: 12px;
      height: 12px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    .contact-form {
      padding: 3rem;
      border-radius: 24px;
      
      h3 {
        font-size: 1.8rem;
        color: var(--text-primary);
        margin-bottom: 2rem;
        text-align: center;
      }
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
    }

    .form-group {
      margin-bottom: 1.5rem;
      
      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: var(--text-primary);
      }
      
      input, textarea {
        width: 100%;
        padding: 1rem;
        border: 2px solid var(--border);
        border-radius: 12px;
        background: var(--bg-primary);
        color: var(--text-primary);
        font-size: 1rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        min-height: 44px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        
        &:focus {
          outline: none;
          border-color: var(--primary-500);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
        
        &::placeholder {
          color: var(--text-muted);
        }
        
        @media (max-width: 768px) {
          padding: 1.125rem;
          font-size: 16px;
        }
      }
      
      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }

    .submit-btn {
      width: 100%;
      margin-top: 1rem;
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .form-status {
      margin-top: 1rem;
    }

    .status-message {
      padding: 1rem;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      &.success {
        background: rgba(16, 185, 129, 0.1);
        color: #10b981;
        border: 1px solid rgba(16, 185, 129, 0.2);
      }
      
      &.error {
        background: rgba(239, 68, 68, 0.1);
        color: #ef4444;
        border: 1px solid rgba(239, 68, 68, 0.2);
      }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.1); opacity: 0.7; }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.submitStatus = null;

    // Simulate form submission
    setTimeout(() => {
      this.submitStatus = 'success';
      this.isSubmitting = false;
      this.formData = { name: '', email: '', subject: '', message: '' };
      
      setTimeout(() => {
        this.submitStatus = null;
      }, 5000);
    }, 2000);
  }
}