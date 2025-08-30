"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PatientForm } from "@/components/PatientForm";
import { PatientTable } from "@/components/PatientTable";
import { FaTable, FaUserPlus } from "react-icons/fa";

type View = "table" | "form";

export const HomePage = () => {
  const [currentView, setCurrentView] = useState<View | null>(null);

  const menus = [
    {
      title: "Daftar Pasien",
      subtitle: "Rawat Inap",
      desc: "Lihat, cari, dan kelola data pasien rawat inap.",
      icon: <FaTable className="w-12 h-12 text-blue-500" />,
      action: () => setCurrentView("table"),
      color: "from-blue-700 to-blue-900",
    },
    {
      title: "Tambah Pasien",
      subtitle: "Formulir Pasien",
      desc: "Input data pasien baru ke sistem rawat inap.",
      icon: <FaUserPlus className="w-12 h-12 text-emerald-500" />,
      action: () => setCurrentView("form"),
      color: "from-emerald-700 to-teal-900",
    },
  ];

  if (currentView === "table") {
    return (
      <main className="min-h-screen bg-gray-50 p-6">
        <PatientTable onAddPatient={() => setCurrentView("form")} />
      </main>
    );
  }
  if (currentView === "form") {
    return (
      <main className="min-h-screen bg-gray-50 p-6">
        <PatientForm
          onSuccess={() => setCurrentView("table")}
          onCancel={() => setCurrentView(null)}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="w-full min-h-[550px] md:min-h-[500px] h-[500px] md:h-[500px] relative bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.png"
            alt="Doctors"
            width={1920}
            height={400}
            className="w-full h-full object-cover opacity-80"
            priority
          />
        </div>

        <div className="absolute top-16 sm:top-20 md:top-24 lg:top-4 left-1/2 transform -translate-x-1/2 z-10 px-4 sm:px-6">
          <div className="text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl bg-blue-900/70 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl backdrop-blur-md shadow-2xl">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-3xl font-bold text-white drop-shadow-2xl leading-tight sm:leading-none mb-2 sm:mb-3">
              SISTEM RAWAT INAP
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold text-yellow-300 drop-shadow-2xl leading-tight sm:leading-none mb-0">
              YUSUF HOSPITAL CARE
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col sm:flex-col md:flex-row items-stretch gap-4 sm:gap-8 px-3 sm:px-4 md:px-6 py-2 sm:py-3">
        {menus.map((menu, idx) => (
          <div
            key={idx}
            className={`flex-1 flex flex-col justify-between items-start rounded-md sm:rounded-lg shadow-md sm:shadow-lg px-3 sm:px-4 md:px-5 py-3 sm:py-4 bg-gradient-to-br ${menu.color} cursor-pointer transition duration-200 hover:scale-105 min-h-[140px] sm:min-h-[160px] md:min-h-[180px]`}
            onClick={menu.action}
          >
            <div className="mb-1">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center">
                {React.cloneElement(menu.icon, {
                  className: `w-full h-full ${
                    menu.icon.props.className.split(" ").slice(-1)[0]
                  }`,
                })}
              </div>
            </div>
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 leading-tight">
              {menu.title}
            </h2>
            <div className="text-xs sm:text-sm md:text-base font-semibold text-white/80 mb-1">
              {menu.subtitle}
            </div>
            <p className="text-white/80 mb-1 text-xs sm:text-sm leading-tight flex-grow">
              {menu.desc}
            </p>
            <div className="w-6 sm:w-8 md:w-10 h-0.5 bg-white/30 rounded-full mt-auto" />
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
