import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturedProductsComponent } from '../../components/featured-products/featured-products.component';
import { AboutPreviewComponent } from '../../components/about-preview/about-preview.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedProductsComponent,
    AboutPreviewComponent,
    TestimonialsComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-featured-products></app-featured-products>
    <app-about-preview></app-about-preview>
    <app-testimonials></app-testimonials>
  `
})
export class HomeComponent {}