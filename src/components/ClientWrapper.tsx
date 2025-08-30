"use client";

import { useState, ReactNode } from "react";
import { PatientForm } from "@/components/PatientForm";
import { PatientTable } from "@/components/PatientTable";

type View = "table" | "form";

interface ClientWrapperProps {
  children: (props: {
    currentView: View;
    showForm: () => void;
    showTable: () => void;
    handleFormSuccess: () => void;
  }) => ReactNode;
}

export const ClientWrapper = ({ children }: ClientWrapperProps) => {
  const [currentView, setCurrentView] = useState<View>("table");

  const showForm = () => setCurrentView("form");
  const showTable = () => setCurrentView("table");

  const handleFormSuccess = () => {
    setCurrentView("table");
  };

  return (
    <>
      {children({
        currentView,
        showForm,
        showTable,
        handleFormSuccess,
      })}
    </>
  );
};

interface NavigationProps {
  currentView: View;
  showTable: () => void;
  showForm: () => void;
}

export const Navigation = ({
  currentView,
  showTable,
  showForm,
}: NavigationProps) => {
  return (
    <nav className="flex items-center space-x-2 bg-slate-100/80 backdrop-blur-sm rounded-xl p-1.5 shadow-inner">
      <button
        onClick={showTable}
        className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
          currentView === "table"
            ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105"
            : "text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:shadow-md"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <span>Daftar Pasien</span>
      </button>
      <button
        onClick={showForm}
        className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
          currentView === "form"
            ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105"
            : "text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:shadow-md"
        }`}
      >
        <svg
          className="w-4 h-4"
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
        <span>Tambah Pasien</span>
      </button>
    </nav>
  );
};

interface MainContentProps {
  currentView: View;
  showForm: () => void;
  handleFormSuccess: () => void;
  showTable: () => void;
}

export const MainContent = ({
  currentView,
  showForm,
  handleFormSuccess,
  showTable,
}: MainContentProps) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="transition-all duration-500 ease-in-out">
        {currentView === "table" && (
          <div className="animate-fadeIn">
            <PatientTable onAddPatient={showForm} />
          </div>
        )}

        {currentView === "form" && (
          <div className="animate-fadeIn">
            <PatientForm onSuccess={handleFormSuccess} onCancel={showTable} />
          </div>
        )}
      </div>
    </main>
  );
};
