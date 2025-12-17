import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface TinTuc {
    id: number;
    tieu_de: string;
    mo_ta?: string;
    ngay?: string;
    id_loai?: number;
    ten_loai?: string;
}

interface LoaiTin {
    id: number;
    ten_loai: string;
}

@Component({
    selector: 'app-news',
    imports: [CommonModule],
    template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold mb-2">Latest News</h1>
          <p class="text-blue-100">Stay informed with the most recent updates</p>
        </div>
      </div>

      <div class="container mx-auto px-4 py-8">
        <!-- Filter by Category -->
        <div class="mb-6 bg-white rounded-lg shadow-md p-4">
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Lọc theo loại tin</h3>
          <div class="flex flex-wrap gap-2">
            <button
              (click)="selectCategory(null)"
              [class]="selectedCategory() === null 
                ? 'px-4 py-2 bg-blue-600 text-white rounded-full font-semibold transition-all' 
                : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-all'"
            >
              Tất cả
            </button>
            @for (category of categories(); track category.id) {
              <button
                (click)="selectCategory(category.id)"
                [class]="selectedCategory() === category.id 
                  ? 'px-4 py-2 bg-blue-600 text-white rounded-full font-semibold transition-all' 
                  : 'px-4 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-all'"
              >
                {{ category.ten_loai }}
              </button>
            }
          </div>
        </div>

        @if (loading()) {
          <div class="flex justify-center items-center py-20">
            <div class="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
          </div>
        } @else if (error()) {
          <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg max-w-2xl mx-auto">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 class="text-red-800 font-semibold">Error Loading News</h3>
                <p class="text-red-700">{{ error() }}</p>
              </div>
            </div>
          </div>
        } @else if (paginatedNews().length === 0) {
          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg max-w-2xl mx-auto">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-yellow-800 font-semibold">Không có tin tức nào</p>
            </div>
          </div>
        } @else {
          <!-- News Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            @for (news of paginatedNews(); track news.id) {
              <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div class="p-6">
                  <div class="flex items-center justify-between mb-3">
                    @if (news.ten_loai) {
                      <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {{ news.ten_loai }}
                      </span>
                    }
                    @if (news.ngay) {
                      <span class="text-gray-500 text-sm">
                        {{ formatDate(news.ngay) }}
                      </span>
                    }
                  </div>
                  <h3 class="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {{ news.tieu_de }}
                  </h3>
                  @if (news.mo_ta) {
                    <p class="text-gray-600 mb-4 line-clamp-3">
                      {{ news.mo_ta }}
                    </p>
                  }
                  <button class="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                    Read More 
                    <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            }
          </div>

          <!-- Pagination -->
          <div class="flex justify-center items-center space-x-2">
            <button
              (click)="goToPage(currentPage() - 1)"
              [disabled]="currentPage() === 1"
              [class]="currentPage() === 1 
                ? 'px-4 py-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed' 
                : 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            @for (page of pageNumbers(); track page) {
              <button
                (click)="goToPage(page)"
                [class]="currentPage() === page 
                  ? 'px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold' 
                  : 'px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 border border-gray-300 font-semibold'"
              >
                {{ page }}
              </button>
            }

            <button
              (click)="goToPage(currentPage() + 1)"
              [disabled]="currentPage() === totalPages()"
              [class]="currentPage() === totalPages() 
                ? 'px-4 py-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed' 
                : 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Pagination Info -->
          <div class="text-center mt-4 text-gray-600">
            Hiển thị {{ (currentPage() - 1) * itemsPerPage() + 1 }} - {{ Math.min(currentPage() * itemsPerPage(), filteredNews().length) }} 
            trong tổng số {{ filteredNews().length }} tin tức
          </div>
        }
      </div>
    </div>
  `,
    styles: ``
})
export class NewsComponent implements OnInit {
    private http = HttpClient;

    // Data signals
    newsList = signal<TinTuc[]>([]);
    categories = signal<LoaiTin[]>([]);
    loading = signal(true);
    error = signal('');

    // Pagination & Filter signals
    selectedCategory = signal<number | null>(null);
    currentPage = signal(1);
    itemsPerPage = signal(9); // 3x3 grid

    // Computed values
    filteredNews = computed(() => {
        const category = this.selectedCategory();
        const news = this.newsList();

        if (category === null) return news;
        return news.filter(n => n.id_loai === category);
    });

    totalPages = computed(() => {
        return Math.ceil(this.filteredNews().length / this.itemsPerPage());
    });

    paginatedNews = computed(() => {
        const start = (this.currentPage() - 1) * this.itemsPerPage();
        const end = start + this.itemsPerPage();
        return this.filteredNews().slice(start, end);
    });

    pageNumbers = computed(() => {
        const total = this.totalPages();
        const current = this.currentPage();
        const pages: number[] = [];

        // Show max 5 page numbers
        let startPage = Math.max(1, current - 2);
        let endPage = Math.min(total, startPage + 4);

        // Adjust if we're near the end
        if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    });

    // For template access
    Math = Math;

    ngOnInit() {
        this.loadData();
    }

    async loadData() {
        try {
            this.loading.set(true);
            this.error.set('');

            // Load categories and news in parallel
            const [categoriesRes, newsRes] = await Promise.all([
                fetch('http://localhost:3000/api/loaitin'),
                fetch('http://localhost:3000/api/tintucmoi')
            ]);

            if (!categoriesRes.ok || !newsRes.ok) {
                throw new Error('Failed to load data');
            }

            const [categoriesData, newsData] = await Promise.all([
                categoriesRes.json(),
                newsRes.json()
            ]);

            this.categories.set(categoriesData);
            this.newsList.set(newsData);
        } catch (err) {
            this.error.set(err instanceof Error ? err.message : 'Unknown error occurred');
        } finally {
            this.loading.set(false);
        }
    }

    selectCategory(categoryId: number | null) {
        this.selectedCategory.set(categoryId);
        this.currentPage.set(1); // Reset to first page when filtering
    }

    goToPage(page: number) {
        if (page >= 1 && page <= this.totalPages()) {
            this.currentPage.set(page);
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    formatDate(dateString: string): string {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('vi-VN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch {
            return dateString;
        }
    }
}
