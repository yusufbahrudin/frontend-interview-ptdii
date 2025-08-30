import { create } from "zustand";
import { Patient, PatientFormData, PatientStore } from "@/types/patient";

const mockPatients: Patient[] = [
  {
    id: "1",
    name: "Ahmad Suryanto",
    nik: "3273010101850001",
    diagnosis: "Diabetes Mellitus Type 2",
    admissionDate: "2025-08-25",
    doctor: "Dr. Sarah Wijaya, Sp.PD",
    room: "VIP-101",
    createdAt: new Date("2025-08-25"),
  },
  {
    id: "2",
    name: "Siti Nurhaliza",
    nik: "3273010201900002",
    diagnosis: "Hipertensi Grade 2",
    admissionDate: "2025-08-26",
    doctor: "Dr. Budi Santoso, Sp.JP",
    room: "Kelas-1-201",
    createdAt: new Date("2025-08-26"),
  },
  {
    id: "3",
    name: "Muhammad Rizki",
    nik: "3273010301950003",
    diagnosis: "Pneumonia Bakterial",
    admissionDate: "2025-08-27",
    doctor: "Dr. Andi Pratama, Sp.P",
    room: "ICU-001",
    createdAt: new Date("2025-08-27"),
  },
  {
    id: "4",
    name: "Dewi Lestari",
    nik: "3273010401880004",
    diagnosis: "Post Op Appendectomy",
    admissionDate: "2025-08-28",
    doctor: "Dr. Indira Sari, Sp.B",
    room: "Kelas-2-301",
    createdAt: new Date("2025-08-28"),
  },
  {
    id: "5",
    name: "Joko Widodo",
    nik: "3273010501920005",
    diagnosis: "Stroke Iskemik Akut",
    admissionDate: "2025-08-29",
    doctor: "Dr. Hendra Gunawan, Sp.S",
    room: "ICU-002",
    createdAt: new Date("2025-08-29"),
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const usePatientStore = create<PatientStore>((set, get) => ({
  patients: mockPatients,
  isLoading: false,
  error: null,

  addPatient: (patientData: PatientFormData) => {
    const newPatient: Patient = {
      id: Date.now().toString(),
      ...patientData,
      createdAt: new Date(),
    };

    set((state) => ({
      patients: [...state.patients, newPatient],
      error: null,
    }));
  },

  fetchPatients: async () => {
    set({ isLoading: true, error: null });

    try {
      await delay(500);

      const { patients } = get();
      if (patients.length === 0) {
        set({
          patients: mockPatients,
          isLoading: false,
        });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      set({
        error: "Failed to fetch patients",
        isLoading: false,
      });
    }
  },

  searchPatients: (query: string) => {
    const { patients } = get();

    if (!query.trim()) {
      return patients;
    }

    const searchTerm = query.toLowerCase();
    return patients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchTerm) ||
        patient.nik.includes(searchTerm)
    );
  },

  sortPatients: (field: keyof Patient, direction: "asc" | "desc") => {
    set((state) => ({
      patients: [...state.patients].sort((a, b) => {
        const aValue = a[field];
        const bValue = b[field];

        if (aValue < bValue) return direction === "asc" ? -1 : 1;
        if (aValue > bValue) return direction === "asc" ? 1 : -1;
        return 0;
      }),
    }));
  },
}));
