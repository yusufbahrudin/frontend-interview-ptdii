export interface DoctorOption {
  value: string;
  label: string;
  specialization: string;
  department: string;
}

export interface RoomOption {
  value: string;
  label: string;
  type: "VIP" | "Kelas-1" | "Kelas-2" | "ICU";
  floor: number;
  capacity: number;
  facilities: string[];
}

export const DOCTORS: DoctorOption[] = [
  {
    value: "Dr. Sarah Wijaya, Sp.PD",
    label: "Dr. Sarah Wijaya, Sp.PD",
    specialization: "Penyakit Dalam",
    department: "Internal Medicine",
  },
  {
    value: "Dr. Budi Santoso, Sp.JP",
    label: "Dr. Budi Santoso, Sp.JP",
    specialization: "Jantung dan Pembuluh Darah",
    department: "Cardiology",
  },
  {
    value: "Dr. Andi Pratama, Sp.P",
    label: "Dr. Andi Pratama, Sp.P",
    specialization: "Paru-paru",
    department: "Pulmonology",
  },
  {
    value: "Dr. Indira Sari, Sp.B",
    label: "Dr. Indira Sari, Sp.B",
    specialization: "Bedah Umum",
    department: "General Surgery",
  },
  {
    value: "Dr. Hendra Gunawan, Sp.S",
    label: "Dr. Hendra Gunawan, Sp.S",
    specialization: "Saraf",
    department: "Neurology",
  },
  {
    value: "Dr. Maya Sari, Sp.A",
    label: "Dr. Maya Sari, Sp.A",
    specialization: "Anak",
    department: "Pediatrics",
  },
  {
    value: "Dr. Rahmat Hidayat, Sp.OG",
    label: "Dr. Rahmat Hidayat, Sp.OG",
    specialization: "Obstetri dan Ginekologi",
    department: "Obstetrics & Gynecology",
  },
  {
    value: "Dr. Lisa Andriani, Sp.M",
    label: "Dr. Lisa Andriani, Sp.M",
    specialization: "Mata",
    department: "Ophthalmology",
  },
  {
    value: "Dr. Rudi Hermawan, Sp.THT",
    label: "Dr. Rudi Hermawan, Sp.THT",
    specialization: "Telinga Hidung Tenggorokan",
    department: "ENT",
  },
  {
    value: "Dr. Sinta Dewi, Sp.KJ",
    label: "Dr. Sinta Dewi, Sp.KJ",
    specialization: "Kedokteran Jiwa",
    department: "Psychiatry",
  },
];

export const ROOMS: RoomOption[] = [
  {
    value: "VIP-101",
    label: "VIP-101",
    type: "VIP",
    floor: 1,
    capacity: 1,
    facilities: [
      "AC",
      'TV LCD 42"',
      "Kulkas Mini",
      "Sofa Bed",
      "Kamar Mandi Pribadi",
      "Wi-Fi",
    ],
  },
  {
    value: "VIP-102",
    label: "VIP-102",
    type: "VIP",
    floor: 1,
    capacity: 1,
    facilities: [
      "AC",
      'TV LCD 42"',
      "Kulkas Mini",
      "Sofa Bed",
      "Kamar Mandi Pribadi",
      "Wi-Fi",
    ],
  },
  {
    value: "VIP-103",
    label: "VIP-103",
    type: "VIP",
    floor: 1,
    capacity: 1,
    facilities: [
      "AC",
      'TV LCD 42"',
      "Kulkas Mini",
      "Sofa Bed",
      "Kamar Mandi Pribadi",
      "Wi-Fi",
    ],
  },

  {
    value: "Kelas-1-201",
    label: "Kelas 1 - 201",
    type: "Kelas-1",
    floor: 2,
    capacity: 2,
    facilities: ["AC", 'TV LCD 32"', "Kamar Mandi Pribadi", "Wi-Fi"],
  },
  {
    value: "Kelas-1-202",
    label: "Kelas 1 - 202",
    type: "Kelas-1",
    floor: 2,
    capacity: 2,
    facilities: ["AC", 'TV LCD 32"', "Kamar Mandi Pribadi", "Wi-Fi"],
  },
  {
    value: "Kelas-1-203",
    label: "Kelas 1 - 203",
    type: "Kelas-1",
    floor: 2,
    capacity: 2,
    facilities: ["AC", 'TV LCD 32"', "Kamar Mandi Pribadi", "Wi-Fi"],
  },
  {
    value: "Kelas-1-204",
    label: "Kelas 1 - 204",
    type: "Kelas-1",
    floor: 2,
    capacity: 2,
    facilities: ["AC", 'TV LCD 32"', "Kamar Mandi Pribadi", "Wi-Fi"],
  },
  {
    value: "Kelas-2-301",
    label: "Kelas 2 - 301",
    type: "Kelas-2",
    floor: 3,
    capacity: 4,
    facilities: ["AC", 'TV LCD 24"', "Kamar Mandi Bersama", "Wi-Fi"],
  },
  {
    value: "Kelas-2-302",
    label: "Kelas 2 - 302",
    type: "Kelas-2",
    floor: 3,
    capacity: 4,
    facilities: ["AC", 'TV LCD 24"', "Kamar Mandi Bersama", "Wi-Fi"],
  },
  {
    value: "Kelas-2-303",
    label: "Kelas 2 - 303",
    type: "Kelas-2",
    floor: 3,
    capacity: 4,
    facilities: ["AC", 'TV LCD 24"', "Kamar Mandi Bersama", "Wi-Fi"],
  },
  {
    value: "Kelas-2-304",
    label: "Kelas 2 - 304",
    type: "Kelas-2",
    floor: 3,
    capacity: 4,
    facilities: ["AC", 'TV LCD 24"', "Kamar Mandi Bersama", "Wi-Fi"],
  },
  {
    value: "ICU-001",
    label: "ICU-001",
    type: "ICU",
    floor: 4,
    capacity: 1,
    facilities: [
      "Ventilator",
      "Monitor Vital Signs",
      "Defibrillator",
      "Infusion Pump",
      "Central Monitoring",
    ],
  },
  {
    value: "ICU-002",
    label: "ICU-002",
    type: "ICU",
    floor: 4,
    capacity: 1,
    facilities: [
      "Ventilator",
      "Monitor Vital Signs",
      "Defibrillator",
      "Infusion Pump",
      "Central Monitoring",
    ],
  },
  {
    value: "ICU-003",
    label: "ICU-003",
    type: "ICU",
    floor: 4,
    capacity: 1,
    facilities: [
      "Ventilator",
      "Monitor Vital Signs",
      "Defibrillator",
      "Infusion Pump",
      "Central Monitoring",
    ],
  },
  {
    value: "ICU-004",
    label: "ICU-004",
    type: "ICU",
    floor: 4,
    capacity: 1,
    facilities: [
      "Ventilator",
      "Monitor Vital Signs",
      "Defibrillator",
      "Infusion Pump",
      "Central Monitoring",
    ],
  },
];
export const getDoctorOptions = () =>
  DOCTORS.map((doctor) => ({
    value: doctor.value,
    label: doctor.label,
  }));

export const getRoomOptions = () =>
  ROOMS.map((room) => ({
    value: room.value,
    label: room.label,
  }));
export const getDoctorsByDepartment = (department: string) =>
  DOCTORS.filter((doctor) => doctor.department === department);

export const getRoomsByType = (type: RoomOption["type"]) =>
  ROOMS.filter((room) => room.type === type);

export const getRoomsByFloor = (floor: number) =>
  ROOMS.filter((room) => room.floor === floor);

export const getAvailableRooms = () => ROOMS; 
export const DEPARTMENTS = [
  "Internal Medicine",
  "Cardiology",
  "Pulmonology",
  "General Surgery",
  "Neurology",
  "Pediatrics",
  "Obstetrics & Gynecology",
  "Ophthalmology",
  "ENT",
  "Psychiatry",
];
export const ROOM_TYPES = ["VIP", "Kelas-1", "Kelas-2", "ICU"] as const;
