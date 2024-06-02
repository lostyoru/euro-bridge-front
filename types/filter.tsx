import { chatProfile } from "./chatProfile";

// types/filter.ts
export interface Internship {
    id: number;
    title: string;
    location: string;
    image: string;
    user: chatProfile;
    type: string;
    field: string;
    duration: string;
    place: string; // Add this line
  }
  
  export interface SelectedFilters {
    [key: string]: string[];
  }
  
  export interface FilterOptions {
    [key: string]: string[];
  }
  