// Types for the Hospital Inpatient Module

export interface Patient {
  id: string;
  name: string;
  nik: string;
  diagnosis: string;
  admissionDate: string;
  doctor: string;
  room: string;
  createdAt: Date;
}

export interface PatientFormData {
  name: string;
  nik: string;
  diagnosis: string;
  admissionDate: string;
  doctor: string;
  room: string;
}

export interface PatientStore {
  patients: Patient[];
  isLoading: boolean;
  error: string | null;

  // Actions
  addPatient: (patient: PatientFormData) => void;
  fetchPatients: () => Promise<void>;
  searchPatients: (query: string) => Patient[];
  sortPatients: (field: keyof Patient, direction: "asc" | "desc") => void;
}

export interface FormErrors {
  name?: string;
  nik?: string;
  diagnosis?: string;
  admissionDate?: string;
  doctor?: string;
  room?: string;
}

export type SortDirection = "asc" | "desc";

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
