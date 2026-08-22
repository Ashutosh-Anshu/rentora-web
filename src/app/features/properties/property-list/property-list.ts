import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    SelectModule,
    MultiSelectModule,
    ButtonModule,
    RouterLink
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

}

