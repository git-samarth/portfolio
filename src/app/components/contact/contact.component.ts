import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Let's discuss opportunities and collaborate on exciting projects</p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in new opportunities and exciting projects. Whether you're looking for a cloud engineer or want to discuss technology, feel free to reach out!</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="method-info">
                  <h4>Email</h4>
                  <a href="mailto:wrk.samarth@gmail.com">wrk.samarth&#64;gmail.com</a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="method-info">
                  <h4>Phone</h4>
                  <a href="tel:+918962220812">+91 8962220812</a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fab fa-linkedin"></i>
                </div>
                <div class="method-info">
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/samarthtiwari" target="_blank">linkedin.com/in/samarthtiwari</a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="method-info">
                  <h4>Location</h4>
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  #name="ngModel"
                  [class.error]="name.invalid && name.touched"
                  placeholder="Your full name">
                <div class="error-message" *ngIf="name.invalid && name.touched">
                  Name is required
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  email
                  #email="ngModel"
                  [class.error]="email.invalid && email.touched"
                  placeholder="your.email@example.com">
                <div class="error-message" *ngIf="email.invalid && email.touched">
                  <span *ngIf="email.errors?.['required']">Email is required</span>
                  <span *ngIf="email.errors?.['email']">Please enter a valid email</span>
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
                  #subject="ngModel"
                  [class.error]="subject.invalid && subject.touched"
                  placeholder="What's this about?">
                <div class="error-message" *ngIf="subject.invalid && subject.touched">
                  Subject is required
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  #message="ngModel"
                  [class.error]="message.invalid && message.touched"
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."></textarea>
                <div class="error-message" *ngIf="message.invalid && message.touched">
                  Message is required
                </div>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary submit-btn"
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
            </form>
            
            <div class="form-status" *ngIf="submitStatus">
              <div class="status-message" [class.success]="submitStatus === 'success'" [class.error]="submitStatus === 'error'">
                <i [class]="submitStatus === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
                <span *ngIf="submitStatus === 'success'">Message sent successfully! I'll get back to you soon.</span>
                <span *ngIf="submitStatus === 'error'">Sorry, there was an error sending your message. Please try again or contact me directly.</span>
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

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .contact-info {
      h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--primary-600);
      }
      
      p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
      }
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: var(--card-bg);
      border-radius: 0.75rem;
      border: 1px solid var(--border-color);
      transition: all 300ms ease;
      
      &:hover {
        transform: translateX(10px);
        box-shadow: 0 5px 20px var(--shadow-color);
      }
    }

    .method-icon {
      width: 50px;
      height: 50px;
      background: var(--gradient-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      
      i {
        font-size: 1.2rem;
        color: white;
      }
    }

    .method-info {
      h4 {
        margin-bottom: 0.25rem;
        font-size: 1.1rem;
      }
      
      a, span {
        color: var(--text-muted);
        text-decoration: none;
        
        &:hover {
          color: var(--primary-600);
        }
      }
    }

    .contact-form-container {
      background: var(--card-bg);
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid var(--border-color);
      box-shadow: 0 10px 30px var(--shadow-color);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      
      label {
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: var(--text-primary);
      }
      
      input, textarea {
        padding: 0.75rem 1rem;
        border: 2px solid var(--border-color);
        border-radius: 0.5rem;
        background: var(--bg-primary);
        color: var(--text-primary);
        font-size: 1rem;
        transition: all 300ms ease;
        
        &:focus {
          outline: none;
          border-color: var(--primary-600);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        &.error {
          border-color: #ef4444;
        }
        
        &::placeholder {
          color: var(--text-muted);
        }
      }
      
      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }

    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .submit-btn {
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
      border-radius: 0.5rem;
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
  `]
})
export class ContactComponent {
  formData: ContactForm = {
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
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', this.formData);
      
      // Simulate success (you can change this to test error state)
      const success = Math.random() > 0.2; // 80% success rate for demo
      
      if (success) {
        this.submitStatus = 'success';
        this.resetForm();
      } else {
        this.submitStatus = 'error';
      }
      
      this.isSubmitting = false;
      
      // Clear status after 5 seconds
      setTimeout(() => {
        this.submitStatus = null;
      }, 5000);
    }, 2000);
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}