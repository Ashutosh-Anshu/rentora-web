interface PropertyListItem {
    id: string;
    propertyId: string;
    name: string;
    image: string | null;
    type: 'Multifamily' | 'Commercial' | 'Villa' | 'Studio' | 'PG';
    city: string;
    state: string;
    units: number;
    occupancyPercent: number;
    status: 'Active' | 'Maintenance' | 'Inactive';
    addedDate: string;
}