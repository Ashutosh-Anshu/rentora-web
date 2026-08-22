import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [
    CommonModule,
    ProgressBarModule,
    InputTextModule,
    SelectModule,
    MultiSelectModule,
    ButtonModule,
    RouterLink,
    TableModule,
    TagModule
  ],
  templateUrl: './property-list.html',
  styleUrl: './property-list.scss',
})
export class PropertyList {

  // ==========================================================
  // STATS
  // ==========================================================

  stats = [
    {
      label: 'Total Properties',
      value: 24,
      color: 'blue'
    },
    {
      label: 'Active',
      value: 22,
      color: 'emerald'
    },
    {
      label: 'Occupied',
      value: 15,
      color: 'amber'
    },
    {
      label: 'Available Units',
      value: 45,
      color: 'cyan'
    },
    {
      label: 'Total Units',
      value: 120,
      color: 'violet'
    }
  ];



  // ==========================================================
  // STATUS
  // ==========================================================

  statuses = [
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Active',
      value: 'active'
    },
    {
      label: 'Maintenance',
      value: 'maintenance'
    },
    {
      label: 'Inactive',
      value: 'inactive'
    }
  ];

  selectedStatus = 'all';


  // ==========================================================
  // TYPE
  // ==========================================================

  types = [
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Multifamily',
      value: 'multifamily'
    },
    {
      label: 'Commercial',
      value: 'commercial'
    },
    {
      label: 'Townhouse',
      value: 'townhouse'
    }
  ];

  selectedType = 'all';


  // ==========================================================
  // CITY
  // ==========================================================

  cities = [
    {
      name: 'Chicago',
      code: 'CHI'
    },
    {
      name: 'Evanston',
      code: 'EV'
    },
    {
      name: 'Naperville',
      code: 'NAP'
    },
    {
      name: 'New York',
      code: 'NY'
    },
    {
      name: 'London',
      code: 'LDN'
    }
  ];

  selectedCities: string[] = [];

  allCitiesSelected = false;


  // ==========================================================
  // SEARCH
  // ==========================================================

  searchQuery = '';


  // ==========================================================
  // SELECT STYLING
  // ==========================================================

  selectPt = {
    root: {
      class: '!border-0 !bg-transparent !shadow-none !p-0'
    },

    label: {
      class: '!px-1 !py-0 !text-xs !text-slate-700'
    },

    dropdown: {
      class: '!w-5 !text-slate-500'
    }
  };


  // ==========================================================
  // MULTI SELECT STYLING
  // ==========================================================

  multiSelectPt = {
    root: {
      class: '!border-0 !bg-transparent !shadow-none !p-0'
    },

    labelContainer: {
      class: '!p-0'
    },

    label: {
      class: '!px-1 !py-0 !text-xs !text-slate-700'
    },

    dropdown: {
      class: '!w-5 !text-slate-500'
    }
  };


  // ==========================================================
  // STATUS CHANGE
  // ==========================================================

  onStatusChange(event: any): void {
    this.selectedStatus = event.value;

    console.log('Selected status:', this.selectedStatus);
  }


  // ==========================================================
  // TYPE CHANGE
  // ==========================================================

  onTypeChange(event: any): void {
    this.selectedType = event.value;

    console.log('Selected type:', this.selectedType);
  }


  // ==========================================================
  // CITY CHANGE
  // ==========================================================

  onCityChange(event: any): void {
    this.selectedCities = event.value ?? [];

    this.allCitiesSelected =
      this.selectedCities.length === this.cities.length;

    console.log('Selected cities:', this.selectedCities);
  }


  // ==========================================================
  // SELECT / UNSELECT ALL
  // ==========================================================

  onSelectAllChange(event: any): void {
    this.allCitiesSelected = event.checked;

    this.selectedCities = event.checked
      ? this.cities.map(city => city.code)
      : [];

    console.log(
      'All cities selected:',
      this.allCitiesSelected
    );
  }


  // ==========================================================
  // RESET
  // ==========================================================

  resetFilters(): void {
    this.searchQuery = '';
    this.selectedStatus = 'all';
    this.selectedType = 'all';
    this.selectedCities = [];
    this.allCitiesSelected = false;
  }


  // ==========================================================
  // MOBILE FILTER
  // ==========================================================

  openFilters(): void {
    console.log('Open mobile filters');
  }

  getStatStyles(stat: any) {
    return this.statStyles[
      stat.color as keyof typeof this.statStyles
    ] ?? this.statStyles.blue;
  }

  statStyles = {
    blue: {
      card: 'border-blue-100 border-l-blue-400 bg-blue-50/60',
      label: 'text-blue-700',
      value: 'text-blue-950'
    },

    emerald: {
      card: 'border-emerald-100 border-l-emerald-400 bg-emerald-50/60',
      label: 'text-emerald-700',
      value: 'text-emerald-950'
    },

    amber: {
      card: 'border-amber-100 border-l-amber-400 bg-amber-50/60',
      label: 'text-amber-700',
      value: 'text-amber-950'
    },

    cyan: {
      card: 'border-cyan-100 border-l-cyan-400 bg-cyan-50/60',
      label: 'text-cyan-700',
      value: 'text-cyan-950'
    },

    violet: {
      card: 'border-violet-100 border-l-violet-400 bg-violet-50/60',
      label: 'text-violet-700',
      value: 'text-violet-950'
    }
  };


  allProperties: PropertyListItem[] = [
    {
      id: '1',
      propertyId: 'BLV-1024',
      name: 'The Belvedere',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100&h=100&fit=crop',
      type: 'Multifamily',
      city: 'Chicago',
      state: 'IL',
      units: 42,
      occupancyPercent: 85,
      status: 'Active',
      addedDate: '2023-10-12',
    },
    {
      id: '2',
      propertyId: 'OKP-2055',
      name: 'Oakhaven Plaza',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop',
      type: 'Commercial',
      city: 'Evanston',
      state: 'IL',
      units: 12,
      occupancyPercent: 100,
      status: 'Active',
      addedDate: '2023-09-04',
    },
    {
      id: '3',
      propertyId: 'PCT-3301',
      name: 'Pinecrest Townhomes',
      image: null,
      type: 'Multifamily',
      city: 'Naperville',
      state: 'IL',
      units: 24,
      occupancyPercent: 45,
      status: 'Maintenance',
      addedDate: '2023-11-22',
    },
    {
      id: '4',
      propertyId: 'MPL-1187',
      name: 'Maple Ridge Apartments',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100&h=100&fit=crop',
      type: 'Multifamily',
      city: 'Aurora',
      state: 'IL',
      units: 36,
      occupancyPercent: 92,
      status: 'Active',
      addedDate: '2023-08-15',
    },
    {
      id: '5',
      propertyId: 'RVW-4402',
      name: 'Riverview Business Center',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop',
      type: 'Commercial',
      city: 'Peoria',
      state: 'IL',
      units: 8,
      occupancyPercent: 62,
      status: 'Active',
      addedDate: '2024-01-30',
    },
    {
      id: '6',
      propertyId: 'SNC-0921',
      name: 'Sunset Court Villas',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=100&h=100&fit=crop',
      type: 'Villa',
      city: 'Naperville',
      state: 'IL',
      units: 6,
      occupancyPercent: 33,
      status: 'Inactive',
      addedDate: '2023-07-01',
    },
    {
      id: '7',
      propertyId: 'GRV-1550',
      name: 'Grovepark Studios',
      image: null,
      type: 'Studio',
      city: 'Chicago',
      state: 'IL',
      units: 20,
      occupancyPercent: 70,
      status: 'Active',
      addedDate: '2024-02-18',
    },
    {
      id: '8',
      propertyId: 'HGT-2789',
      name: 'Heights PG Residency',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=100&h=100&fit=crop',
      type: 'PG',
      city: 'Evanston',
      state: 'IL',
      units: 15,
      occupancyPercent: 100,
      status: 'Active',
      addedDate: '2023-12-05',
    },
    {
      id: '9',
      propertyId: 'WLB-3340',
      name: 'Willowbrook Commons',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=100&h=100&fit=crop',
      type: 'Multifamily',
      city: 'Aurora',
      state: 'IL',
      units: 30,
      occupancyPercent: 18,
      status: 'Maintenance',
      addedDate: '2024-03-10',
    },
    {
      id: '10',
      propertyId: 'CDR-4471',
      name: 'Cedar Point Offices',
      image: null,
      type: 'Commercial',
      city: 'Peoria',
      state: 'IL',
      units: 10,
      occupancyPercent: 55,
      status: 'Inactive',
      addedDate: '2023-06-27',
    },
  ];

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  }

  statusSeverity(status: PropertyListItem['status']): 'success' | 'warn' | 'danger' {
    if (status === 'Active') return 'success';
    if (status === 'Maintenance') return 'warn';
    return 'danger';
  }


}

