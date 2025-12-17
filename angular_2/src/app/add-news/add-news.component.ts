import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface LoaiTin {
    id: number;
    ten_loai: string;
}

@Component({
    selector: 'app-add-news',
    imports: [FormsModule, CommonModule],
    template: `
    <div class="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <!-- Header -->
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold mb-2">Add New Article</h1>
          <p class="text-green-100">Share your news with the world</p>
        </div>
      </div>

      <div class="container mx-auto px-4 py-12">
        <div class="max-w-3xl mx-auto">
          <!-- Categories Display -->
          @if (categories().length > 0) {
            <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 class="text-xl font-bold text-gray-800 mb-4">Available Categories</h2>
              <div class="flex flex-wrap gap-2">
                @for (category of categories(); track category.id) {
                  <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    {{ category.ten_loai }}
                  </span>
                }
              </div>
            </div>
          }

          <!-- Add News Form -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Article Details</h2>

            @if (submitted()) {
              <div class="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-green-800 font-semibold">Article published successfully!</p>
                </div>
              </div>
            }

            <form (ngSubmit)="handleSubmit()" #newsForm="ngForm">
              <div class="mb-5">
                <label class="block text-gray-700 font-semibold mb-2" for="title">
                  Article Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  [(ngModel)]="formData.title"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Enter article title"
                />
              </div>

              <div class="mb-5">
                <label class="block text-gray-700 font-semibold mb-2" for="category">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  [(ngModel)]="formData.categoryId"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                >
                  <option value="">Select a category</option>
                  @for (category of categories(); track category.id) {
                    <option [value]="category.id">{{ category.ten_loai }}</option>
                  }
                </select>
              </div>

              <div class="mb-5">
                <label class="block text-gray-700 font-semibold mb-2" for="description">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  [(ngModel)]="formData.description"
                  required
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
                  placeholder="Brief description of the article"
                ></textarea>
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 font-semibold mb-2" for="content">
                  Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  [(ngModel)]="formData.content"
                  required
                  rows="10"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
                  placeholder="Write your article content here..."
                ></textarea>
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 font-semibold mb-2" for="author">
                  Author Name
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  [(ngModel)]="formData.author"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>

              <div class="flex gap-4">
                <button
                  type="submit"
                  [disabled]="!newsForm.valid || loading()"
                  class="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  @if (loading()) {
                    <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Publishing...
                  } @else {
                    Publish Article
                  }
                </button>
                
                <button
                  type="button"
                  (click)="resetForm()"
                  class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          <!-- Tips Section -->
          <div class="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 class="text-lg font-bold text-blue-900 mb-3">Writing Tips</h3>
            <ul class="space-y-2 text-blue-800">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Keep your title clear and concise
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Choose the most appropriate category
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Proofread before publishing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: ``
})
export class AddNewsComponent implements OnInit {
    categories = signal<LoaiTin[]>([]);
    loading = signal(false);
    submitted = signal(false);

    formData = {
        title: '',
        categoryId: '',
        description: '',
        content: '',
        author: ''
    };

    ngOnInit() {
        this.loadCategories();
    }

    async loadCategories() {
        try {
            const response = await fetch('http://localhost:3000/api/loaitin');
            if (!response.ok) throw new Error('Failed to load categories');

            const data = await response.json();
            this.categories.set(data);
        } catch (err) {
            console.error('Error loading categories:', err);
        }
    }

    async handleSubmit() {
        this.loading.set(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Article submitted:', this.formData);
            this.submitted.set(true);
            this.loading.set(false);

            // Reset form after 3 seconds
            setTimeout(() => {
                this.resetForm();
                this.submitted.set(false);
            }, 3000);
        }, 1500);
    }

    resetForm() {
        this.formData = {
            title: '',
            categoryId: '',
            description: '',
            content: '',
            author: ''
        };
    }
}
