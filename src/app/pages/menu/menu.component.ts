import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../models/menu-item.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="menu-page">
      <div class="page-banner">
        <h1>Nuestros Productos</h1>
      </div>
      <div class="container section">
        <div class="category-tabs">
          <button 
            class="category-tab" 
            [class.active]="activeCategory === 'all'"
            (click)="setActiveCategory('all')">
            Todos
          </button>
          <button 
            *ngFor="let category of categories" 
            class="category-tab" 
            [class.active]="activeCategory === category"
            (click)="setActiveCategory(category)">
            {{ category }}
          </button>
        </div>

        <div class="products-grid">
          <div class="product-card" *ngFor="let item of filteredItems">
            <div class="product-image">
              <img [src]="item.image" [alt]="item.name">
            </div>
            <div class="product-info">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
              <div class="product-footer">
                <span class="price">{{ item.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .menu-page {
      padding-top: 80px;
    }

    .page-banner {
      background-image: url('https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      background-size: cover;
      background-position: center;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .page-banner::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .page-banner h1 {
      color: white;
      font-size: 3rem;
      position: relative;
      z-index: 1;
    }

    .category-tabs {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .category-tab {
      padding: 0.8rem 1.5rem;
      background-color: transparent;
      border: 1px solid var(--primary);
      color: var(--primary);
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .category-tab.active,
    .category-tab:hover {
      background-color: var(--primary);
      color: white;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }

    .product-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .product-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }

    .product-image {
      height: 200px;
      overflow: hidden;
    }

    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .product-card:hover .product-image img {
      transform: scale(1.1);
    }

    .product-info {
      padding: 1.5rem;
    }

    .product-info h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }

    .product-info p {
      color: var(--gray);
      margin-bottom: 1rem;
    }

    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price {
      font-weight: 600;
      font-size: 1.2rem;
      color: var(--primary);
    }

    @media (max-width: 768px) {
      .page-banner h1 {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 576px) {
      .products-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  filteredItems: MenuItem[] = [];
  categories: string[] = [];
  activeCategory: string = 'all';

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe(items => {
      this.menuItems = items;
      this.filteredItems = [...this.menuItems];
    });

    this.menuService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
    
    if (category === 'all') {
      this.filteredItems = [...this.menuItems];
    } else {
      this.filteredItems = this.menuItems.filter(item => item.category === category);
    }
  }
}