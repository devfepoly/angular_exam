import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [RouterLink],
    template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="container mx-auto px-4 py-16">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-gray-800 mb-4">
            Welcome to News Portal
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted source for the latest news and updates from around the world
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Latest News</h3>
            <p class="text-gray-600 mb-6">
              Stay updated with the most recent news articles from various categories
            </p>
            <a routerLink="/blog" 
               class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Read News
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Add News</h3>
            <p class="text-gray-600 mb-6">
              Contribute to our platform by submitting your own news articles
            </p>
            <a routerLink="/addNews" 
               class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Create Article
            </a>
          </div>

          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Contact Us</h3>
            <p class="text-gray-600 mb-6">
              Get in touch with our team for any questions or feedback
            </p>
            <a routerLink="/contact" 
               class="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Contact Now
            </a>
          </div>
        </div>

        <div class="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Why Choose Us?</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-1">Real-time Updates</h4>
                <p class="text-gray-600">Get the latest news as it happens</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-1">Verified Sources</h4>
                <p class="text-gray-600">All news from trusted sources</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-1">Multiple Categories</h4>
                <p class="text-gray-600">Browse news by your interests</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-1">Easy to Use</h4>
                <p class="text-gray-600">Simple and intuitive interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: ``
})
export class HomeComponent { }
