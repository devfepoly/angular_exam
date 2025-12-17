import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    imports: [FormsModule, CommonModule],
    template: `
    <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <!-- Header -->
      <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold mb-2">Contact Us</h1>
          <p class="text-purple-100">We'd love to hear from you</p>
        </div>
      </div>

      <div class="container mx-auto px-4 py-12">
        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            @if (submitted()) {
              <div class="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-green-800 font-semibold">Message sent successfully!</p>
                </div>
              </div>
            }

            <form (ngSubmit)="handleSubmit()" #contactForm="ngForm">
              <div class="mb-5">
                <label class="block text-gray-700 font-semibold mb-2" for="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>

              <div class="mb-5">
                <label class="block text-gray-700 font-semibold mb-2" for="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>

              <div class="mb-5">
                <label class="block text-gray-700 font-semibold mb-2" for="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="How can we help?"
                />
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 font-semibold mb-2" for="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              <button
                type="submit"
                [disabled]="!contactForm.valid"
                class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-6">
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800 mb-1">Address</h3>
                    <p class="text-gray-600">Trieu Khuc, Thanh Xuan, Ha Noi</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800 mb-1">Email</h3>
                    <p class="text-gray-600">contact@newsportal.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p class="text-gray-600">+84 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-8">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Office Hours</h2>
              <div class="space-y-2 text-gray-600">
                <div class="flex justify-between">
                  <span class="font-semibold">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="font-semibold">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: ``
})
export class ContactComponent {
    formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    submitted = signal(false);

    handleSubmit() {
        console.log('Form submitted:', this.formData);
        this.submitted.set(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            this.formData = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
            this.submitted.set(false);
        }, 3000);
    }
}
