import { PatientFormData, FormErrors } from "@/types/patient";

export const validatePatientForm = (data: PatientFormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim()) {
    errors.name = "Nama pasien wajib diisi";
  } else if (data.name.trim().length < 2) {
    errors.name = "Nama pasien minimal 2 karakter";
  }
  if (!data.nik.trim()) {
    errors.nik = "NIK wajib diisi";
  } else if (!/^\d{16}$/.test(data.nik)) {
    errors.nik = "NIK harus berupa 16 digit angka";
  }
  if (!data.diagnosis.trim()) {
    errors.diagnosis = "Diagnosa masuk wajib diisi";
  } else if (data.diagnosis.trim().length < 5) {
    errors.diagnosis = "Diagnosa masuk minimal 5 karakter";
  }
  if (!data.admissionDate) {
    errors.admissionDate = "Tanggal masuk wajib diisi";
  } else {
    const admissionDate = new Date(data.admissionDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (admissionDate > today) {
      errors.admissionDate = "Tanggal masuk tidak boleh di masa depan";
    }
  }
  if (!data.doctor.trim()) {
    errors.doctor = "Dokter penanggung jawab wajib diisi";
  } else if (data.doctor.trim().length < 3) {
    errors.doctor = "Nama dokter minimal 3 karakter";
  }
  if (!data.room.trim()) {
    errors.room = "Ruangan wajib diisi";
  }

  return errors;
};

export const isFormValid = (errors: FormErrors): boolean => {
  return Object.keys(errors).length === 0;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const formatDateForInput = (date: Date): string => {
  return date.toISOString().split("T")[0];
};
