"use client";

import { useState } from "react";
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
  const [formData, setFormData] = useState<PatientFormData>({
    name: "",
    nik: "",
    diagnosis: "",
    admissionDate: "",
    doctor: "",
    room: "",
  });

  const { doctorOptions, roomOptions } = useFormOptions();

  const handleInputChange = (field: keyof PatientFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validatePatientForm(formData);

    if (!isFormValid(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      addPatient(formData);
      onSuccess();
    } catch (error) {
      console.error("Error adding patient:", error);
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
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  error={errors.name}
                  required
                  placeholder="Masukkan nama lengkap pasien"
                  className="bg-white/80 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <Input
                  label="NIK"
                  value={formData.nik}
                  onChange={(e) => handleInputChange("nik", e.target.value)}
                  error={errors.nik}
                  required
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
                value={formData.diagnosis}
                onChange={(e) => handleInputChange("diagnosis", e.target.value)}
                error={errors.diagnosis}
                required
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
                  type="date"
                  value={formData.admissionDate}
                  onChange={(e) =>
                    handleInputChange("admissionDate", e.target.value)
                  }
                  error={errors.admissionDate}
                  required
                  max={new Date().toISOString().split("T")[0]}
                  className="bg-white/80 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <Select
                  label="Dokter Penanggung Jawab"
                  value={formData.doctor}
                  onChange={(e) => handleInputChange("doctor", e.target.value)}
                  error={errors.doctor}
                  required
                  options={doctorOptions}
                  placeholder="Pilih dokter"
                  className="bg-white/80 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Select
                label="Ruangan"
                value={formData.room}
                onChange={(e) => handleInputChange("room", e.target.value)}
                error={errors.room}
                required
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
