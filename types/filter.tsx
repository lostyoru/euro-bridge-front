export interface Filter {
    category: string;
    subcategory: string;
  }
  
  export interface FilterOptions {
    types_of_employment: string[];
    fields_of_study: (string | { name: string; subfields: string[] })[];
    durations: string[];
  }
  
  export interface InternshipFilterSidebarProps {
    onFilterChange: (filters: Filter[]) => void;
  }