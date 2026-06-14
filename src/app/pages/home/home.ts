import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';


interface PropertyType {
  label: string;
  value: string;
}

interface Category {
  label: string;
  icon: string;
}

interface Property {
  title: string;
  location: string;
  price: string;
  rating: string;
  verified: boolean;
  gradient: string;
  src: string;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
  bg: string;
  color: string;
}

interface Step {
  number: number;
  title: string;
  desc: string;
}

interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
  bg: string;
  color: string;
}

interface FooterColumn {
  title: string;
  links: string[];
}


@Component({
  selector: 'app-home',
  imports: [FormsModule, ButtonModule, InputTextModule, SelectModule, TagModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  currentYear = new Date().getFullYear();
  location = '';

  propertyTypes: PropertyType[] = [
    { label: 'Any Property', value: 'any' },
    { label: 'Rooms', value: 'rooms' },
    { label: 'Apartments', value: 'apartments' },
    { label: 'Houses', value: 'houses' },
    { label: 'Commercial', value: 'commercial' }
  ];
  selectedType: PropertyType = this.propertyTypes[0];

  categories: Category[] = [
    { label: 'Rooms', icon: 'pi pi-th-large' },
    { label: 'PGs', icon: 'pi pi-users' },
    { label: 'Apartments', icon: 'pi pi-building' },
    { label: 'Houses', icon: 'pi pi-home' },
    { label: 'Commercial', icon: 'pi pi-briefcase' }
  ];

  properties: Property[] = [
    { title: 'Skyview Penthouse', location: 'Manhattan, New York', price: '$4,500', rating: '4.9 (50)', verified: true, gradient: 'from-primary/20 to-text-primary/40', src: 'skyview_penthouse.png' },
    { title: 'Nordic Studio', location: 'Brooklyn, New York', price: '$2,200', rating: '4.8 (38)', verified: true, gradient: 'from-secondary/20 to-text-primary/30', src: 'nordic_studio.png' },
    { title: 'Modern Family Villa', location: 'Greenwich, CT', price: '$6,800', rating: '4.9 (96)', verified: true, gradient: 'from-text-primary/20 to-secondary/30', src: 'modern_family_villa.png' },
    { title: 'Urban Industrial Loft', location: 'Chelsea, New York', price: '$3,800', rating: '4.6 (22)', verified: false, gradient: 'from-warning/20 to-text-primary/30', src: 'urban_industrial_loft.png' },
    { title: 'Harbor View Suite', location: 'Miami, Florida', price: '$5,200', rating: '5.0 (12)', verified: false, gradient: 'from-primary/10 to-secondary/20', src: 'harbor_view_suite.png' },
    { title: 'Executive Office Hub', location: 'Palo Alto, CA', price: '$12,000', rating: '4.9 (18)', verified: true, gradient: 'from-text-primary/10 to-primary/20', src: 'executive_office_hub.png' }
  ];

  features: Feature[] = [
    { icon: 'pi pi-shield', title: 'Verified Listings', desc: 'Every property goes through a rigorous verification process to eliminate scams and fake ads.', bg: 'bg-success/10', color: 'text-success' },
    { icon: 'pi pi-search', title: 'Smart Search', desc: 'Advanced filters and location-based searching to help you find your dream home in seconds.', bg: 'bg-primary/10', color: 'text-primary' },
    { icon: 'pi pi-comments', title: 'Direct Owner Contact', desc: 'Cut the middleman. Chat or call owners directly to negotiate and close deals faster.', bg: 'bg-warning/10', color: 'text-warning' },
    { icon: 'pi pi-lock', title: 'Secure Experience', desc: 'Your data and privacy are our top priority. We use military-grade encryption for all interactions.', bg: 'bg-danger/10', color: 'text-danger' }
  ];

  steps: Step[] = [
    { number: 1, title: 'Search Property', desc: 'Browse thousands of verified listings with smart filters.' },
    { number: 2, title: 'View Details', desc: 'Check high-quality photos, amenities, and area insights.' },
    { number: 3, title: 'Contact Owner', desc: 'Communicate directly with the owner to close deals faster.' },
    { number: 4, title: 'Move In', desc: 'Finalize the deal, sign the agreement, and get your keys.' }
  ];

  testimonials: Testimonial[] = [
    {
      text: `Rentora made my move to NYC so easy. The property was exactly as described in the photos, and I loved dealing directly with the owner.`,
      name: 'Sarah Jenkins',
      role: 'Marketing Manager',
      initials: 'SJ',
      bg: 'bg-primary/20',
      color: 'text-primary'
    },
    {
      text: `The verification process on Rentora gives me huge peace of mind. I've been scammed on other platforms, but here I feel safe and the listings are top-notch.`,
      name: 'David Chen',
      role: 'Software Engineer',
      initials: 'DC',
      bg: 'bg-secondary/20',
      color: 'text-secondary'
    },
    {
      text: `I found an incredible loft in just two days. The search interface is so intuitive. Rentora is definitely the premium choice for property hunting.`,
      name: 'Elena Rodriguez',
      role: 'Designer',
      initials: 'ER',
      bg: 'bg-warning/20',
      color: 'text-warning'
    }
  ];

  footerColumns: FooterColumn[] = [
    { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Investors'] },
    { title: 'Support', links: ['Help Center', 'Safety Tips', 'Contact Us', 'Property Rules'] },
    { title: 'Terms', links: ['Terms of Service', 'Privacy Policy', 'Trust & Safety', 'Sitemap'] }
  ];
}
