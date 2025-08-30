import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const AdBanner = () => {
  return (
    <div
      className="w-full py-1 animate-gradientBackground shadow-lg"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <Marquee speed={45} gradient={false} pauseOnHover={true}>
        <div className="text-xl font-semibold mx-8 text-white flex items-center whitespace-nowrap">
          <Link href="/contact" passHref>
            <span className="cursor-pointer hover:text-blue-200 transition-colors duration-300 flex items-center gap-3">
              Konsultasi Medis 24/7
            </span>
          </Link>
          <span className="mx-4 text-gray-200">•</span>
          <span className="font-normal text-gray-200">
            Dokter Ahli Siap Melayani
          </span>
        </div>

        <div className="text-xl font-semibold mx-8 text-white flex items-center whitespace-nowrap">
          <Link href="/contact" passHref>
            <span className="cursor-pointer hover:text-pink-200 transition-colors duration-300 flex items-center gap-3">
              Layanan Darurat
            </span>
          </Link>
          <span className="mx-4 text-gray-200">•</span>
          <span className="font-normal text-gray-200">
            Respon Cepat & Profesional
          </span>
          <span className="text-red-300 font-bold ml-4 px-3 py-1 bg-red-500/20 rounded-full text-sm">
            URGENT CARE
          </span>
        </div>

        <div className="text-xl font-semibold mx-8 text-white flex items-center whitespace-nowrap">
          <Link href="/contact" passHref>
            <span className="cursor-pointer hover:text-green-200 transition-colors duration-300 flex items-center gap-3">
              Medical Check-up
            </span>
          </Link>
          <span className="mx-4 text-gray-200">•</span>
          <span className="font-normal text-gray-200">
            Pemeriksaan Kesehatan Lengkap
          </span>
          <span className="text-green-300 font-bold ml-4 px-3 py-1 bg-green-500/20 rounded-full text-sm">
            DISKON 30%
          </span>
        </div>

        <div className="text-xl font-semibold mx-8 text-white flex items-center whitespace-nowrap">
          <Link href="/contact" passHref>
            <span className="cursor-pointer hover:text-purple-200 transition-colors duration-300 flex items-center gap-3">
              Daftar Online
            </span>
          </Link>
          <span className="mx-4 text-gray-200">•</span>
          <span className="font-normal text-gray-200">
            Mudah, Cepat & Praktis
          </span>
          <span className="text-cyan-300 font-bold ml-4 px-3 py-1 bg-cyan-500/20 rounded-full text-sm">
            TANPA ANTRI
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default AdBanner;
