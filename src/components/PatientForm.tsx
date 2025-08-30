"use client";

import { useState, useCallback, useEffect } from "react";
import { usePatientStore } from "@/store/patientStore";
import { PatientFormData, FormErrors } from "@/types/patient";
import { validatePatientForm, isFormValid } from "@/utils/validation";
import { useFormOptions } from "@/hooks/useHospitalData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

interface PatientFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const PatientForm = ({ onSuccess, onCancel }: PatientFormProps) => {
  const addPatient = usePatientStore((state) => state.addPatient);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState<PatientFormData>({
    name: "",
    nik: "",
    diagnosis: "",
    admissionDate: "",
    doctor: "",
    room: "",
  });

  const { doctorOptions, roomOptions } = useFormOptions();

  // Debounced validation
  const validateField = useCallback((field: keyof PatientFormData, value: string) => {
    if (touched[field]) {
      const tempData = { ...formData, [field]: value };
      const validationErrors = validatePatientForm(tempData);
      
      setErrors((prev) => ({
        ...prev,
        [field]: validationErrors[field],
      }));
    }
  }, [formData, touched]);

  const handleInputChange = (field: keyof PatientFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Mark field as touched
    setTouched((prev) => ({ ...prev, [field]: true }));
    
    // Clear specific error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFieldBlur = (field: keyof PatientFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const validationErrors = validatePatientForm(formData);

    if (!isFormValid(validationErrors)) {
      setErrors(validationErrors);
      setTouched({
        name: true,
        nik: true,
        diagnosis: true,
        admissionDate: true,
        doctor: true,
        room: true,
      });

      // Count total errors
      const errorCount = Object.keys(validationErrors).length;

      // Show alert with error count
      alert(
        `Terdapat ${errorCount} field yang perlu diperbaiki. Silakan periksa kembali formulir Anda.`
      );

      // Scroll to first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.querySelector(
        `[name="${firstErrorField}"]`
      );
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
        (errorElement as HTMLElement).focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      addPatient(formData);
      onSuccess();
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Terjadi kesalahan saat menyimpan data pasien. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
      <CardHeader className="bg-gradient-to-br from-blue-50/90 via-indigo-50/70 to-purple-50/50 border-b border-slate-200/60">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <span>Formulir Pasien Masuk Rawat Inap</span>
          </div>
        </CardTitle>
        <p className="text-slate-600 mt-2">
          Silakan lengkapi data pasien untuk proses rawat inap
        </p>
      </CardHeader>
      <CardContent className="p-8 bg-gradient-to-br from-slate-50/30 to-white">
        {/* Error Summary */}
        {Object.keys(errors).length > 0 && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-red-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className="text-red-800 font-semibold">
                Terdapat {Object.keys(errors).length} field yang perlu
                diperbaiki:
              </h4>
            </div>
            <ul className="mt-2 text-sm text-red-700 list-disc list-inside space-y-1">
              {Object.entries(errors).map(([field, message]) => (
                <li key={field}>{message}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">
                Informasi Personal
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input
                  label="Nama Lengkap"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onBlur={() => handleFieldBlur("name")}
                  error={errors.name}
                  isRequired
                  placeholder="Masukkan nama lengkap pasien"
                  className="bg-white/80 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <Input
                  label="NIK"
                  name="nik"
                  value={formData.nik}
                  onChange={(e) => handleInputChange("nik", e.target.value)}
                  onBlur={() => handleFieldBlur("nik")}
                  error={errors.nik}
                  isRequired
                  placeholder="16 digit NIK"
                  maxLength={16}
                  pattern="[0-9]{16}"
                  className="bg-white/80 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm font-mono"
                />
              </div>
            </div>
          </div>

          {/* Informasi Medis */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">
                Informasi Medis
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent"></div>
            </div>

            <div className="space-y-2">
              <Input
                label="Diagnosa Masuk"
                name="diagnosis"
                value={formData.diagnosis}
                onChange={(e) => handleInputChange("diagnosis", e.target.value)}
                onBlur={() => handleFieldBlur("diagnosis")}
                error={errors.diagnosis}
                isRequired
                placeholder="Masukkan diagnosa atau keluhan utama"
                className="bg-white/80 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">
                Penugasan & Ruangan
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input
                  label="Tanggal Masuk"
                  name="admissionDate"
                  type="date"
                  value={formData.admissionDate}
                  onChange={(e) =>
                    handleInputChange("admissionDate", e.target.value)
                  }
                  onBlur={() => handleFieldBlur("admissionDate")}
                  error={errors.admissionDate}
                  isRequired
                  max={new Date().toISOString().split("T")[0]}
                  className="bg-white/80 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <Select
                  label="Dokter Penanggung Jawab"
                  name="doctor"
                  value={formData.doctor}
                  onChange={(e) => handleInputChange("doctor", e.target.value)}
                  onBlur={() => handleFieldBlur("doctor")}
                  error={errors.doctor}
                  isRequired
                  options={doctorOptions}
                  placeholder="Pilih dokter"
                  className="bg-white/80 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Select
                label="Ruangan"
                name="room"
                value={formData.room}
                onChange={(e) => handleInputChange("room", e.target.value)}
                onBlur={() => handleFieldBlur("room")}
                error={errors.room}
                isRequired
                options={roomOptions}
                placeholder="Pilih ruangan"
                className="bg-white/80 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-8 border-t border-slate-200/60">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isSubmitting}
              className="px-6 py-2.5 hover:bg-slate-100 hover:border-slate-400 transition-all duration-200 shadow-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Batal
            </Button>
            <Button
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {isSubmitting ? "Menyimpan..." : "Simpan Pasien"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
