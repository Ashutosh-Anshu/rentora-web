import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { SelectModule } from "primeng/select";
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChipModule } from 'primeng/chip';
import { ScrollerModule } from 'primeng/scroller';
@Component({
  selector: 'app-property-add',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    ToggleSwitchModule,
    ButtonModule,
    InputNumberModule,
    ChipModule,
    ScrollerModule
  ],
  templateUrl: './property-add.html',
  styleUrl: './property-add.scss',
})
export class PropertyAdd {
  propertyTypes = [
    { label: 'Apartment', value: 'Apartment' },
    { label: 'Villa', value: 'Villa' },
    { label: 'Independent House', value: 'IndependentHouse' },
    { label: 'Studio', value: 'Studio' },
    { label: 'Commercial', value: 'Commercial' },
    { label: 'PG', value: 'PG' },
  ];

  statusTypes = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
    { label: 'Draft', value: 'Draft' },
    { label: 'Sold', value: 'Sold' },
    { label: 'Rented', value: 'Rented' },
  ];

  unitTypes = [
    { label: '1 BHK', value: '1BHK' },
    { label: '2 BHK', value: '2BHK' },
    { label: '3 BHK', value: '3BHK' },
    { label: 'Studio', value: 'Studio' },
  ];

  imagePreviews = signal<string[]>([]);
  amenityOptions = ['Pool', 'Gym', 'Laundry', 'Elevator', 'Pet Friendly', 'Parking', 'Security', 'Power Backup'];
  selectedAmenities = signal<string[]>(['Pool', 'Gym']);

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      propertyType: [null, Validators.required],
      statusType: [null, Validators.required],
      description: [''],

      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: [null, Validators.required],
      zipCode: ['', Validators.required],

      units: this.fb.array([this.createUnit(), this.createUnit()]),

      totalUnits: [null],
      floors: [null],
      totalSqFt: [null],
      includesParking: [false],
    });
  }

  get units(): FormArray {
    return this.form.get('units') as FormArray;
  }

  createUnit(): FormGroup {
    return this.fb.group({
      unitNo: [''],
      floor: [''],
      type: [null],
      baseRent: [null],
    });
  }

  addUnit(): void {
    this.units.push(this.createUnit());
  }

  removeUnit(index: number): void {
    this.units.removeAt(index);
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    Array.from(input.files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviews.update((list) => [...list, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  }

  toggleAmenity(amenity: string): void {
    this.selectedAmenities.update((list) =>
      list.includes(amenity) ? list.filter((a) => a !== amenity) : [...list, amenity]
    );
  }

  onCancel(): void {
    this.router.navigate(['/properties']);
  }

  onSave(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = {
      ...this.form.value,
      amenities: this.selectedAmenities(),
    };
    console.log('Saving property', payload);
    // TODO: call PropertyService.create(payload)
  }
}