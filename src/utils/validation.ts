import { PatientFormData, FormErrors } from "@/types/patient";

export const validatePatientForm = (data: PatientFormData): FormErrors => {
  const errors: FormErrors = {};

  // Validasi Nama Pasien
  if (!data.name || !data.name.trim()) {
    errors.name = "Nama pasien wajib diisi";
  } else if (data.name.trim().length < 2) {
    errors.name = "Nama pasien minimal 2 karakter";
  } else if (data.name.trim().length > 100) {
    errors.name = "Nama pasien maksimal 100 karakter";
  } else if (!/^[a-zA-Z\s.,']+$/.test(data.name.trim())) {
    errors.name =
      "Nama pasien hanya boleh mengandung huruf, spasi, dan tanda baca umum";
  }

  // Validasi NIK
  if (!data.nik || !data.nik.trim()) {
    errors.nik = "NIK wajib diisi";
  } else if (!/^\d{16}$/.test(data.nik.trim())) {
    errors.nik = "NIK harus berupa 16 digit angka";
  }

  // Validasi Diagnosis
  if (!data.diagnosis || !data.diagnosis.trim()) {
    errors.diagnosis = "Diagnosa masuk wajib diisi";
  } else if (data.diagnosis.trim().length < 5) {
    errors.diagnosis = "Diagnosa masuk minimal 5 karakter";
  } else if (data.diagnosis.trim().length > 500) {
    errors.diagnosis = "Diagnosa masuk maksimal 500 karakter";
  }

  // Validasi Tanggal Masuk
  if (!data.admissionDate || !data.admissionDate.trim()) {
    errors.admissionDate = "Tanggal masuk wajib diisi";
  } else {
    const admissionDate = new Date(data.admissionDate);
    const today = new Date();
    const oneYearAgo = new Date();
    today.setHours(0, 0, 0, 0);
    oneYearAgo.setFullYear(today.getFullYear() - 1);
    oneYearAgo.setHours(0, 0, 0, 0);

    if (isNaN(admissionDate.getTime())) {
      errors.admissionDate = "Format tanggal tidak valid";
    } else if (admissionDate > today) {
      errors.admissionDate = "Tanggal masuk tidak boleh di masa depan";
    } else if (admissionDate < oneYearAgo) {
      errors.admissionDate =
        "Tanggal masuk tidak boleh lebih dari 1 tahun yang lalu";
    }
  }

  // Validasi Dokter
  if (!data.doctor || !data.doctor.trim()) {
    errors.doctor = "Dokter penanggung jawab wajib diisi";
  }

  // Validasi Ruangan
  if (!data.room || !data.room.trim()) {
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
