import { useMemo } from "react";
import {
  DOCTORS,
  ROOMS,
  getDoctorOptions,
  getRoomOptions,
  getDoctorsByDepartment,
  getRoomsByType,
  getRoomsByFloor,
  DoctorOption,
  RoomOption,
} from "@/data/hospitalData";
export const useDoctors = () => {
  return useMemo(
    () => ({
      doctors: DOCTORS,
      options: getDoctorOptions(),
      getByDepartment: getDoctorsByDepartment,
    }),
    []
  );
};
export const useRooms = () => {
  return useMemo(
    () => ({
      rooms: ROOMS,
      options: getRoomOptions(),
      getByType: getRoomsByType,
      getByFloor: getRoomsByFloor,
    }),
    []
  );
};
export const useFormOptions = () => {
  const { options: doctorOptions } = useDoctors();
  const { options: roomOptions } = useRooms();

  return useMemo(
    () => ({
      doctorOptions,
      roomOptions,
    }),
    [doctorOptions, roomOptions]
  );
};
export const useHospitalStats = () => {
  return useMemo(() => {
    const totalDoctors = DOCTORS.length;
    const totalRooms = ROOMS.length;

    const roomsByType = ROOMS.reduce((acc, room) => {
      acc[room.type] = (acc[room.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const doctorsByDepartment = DOCTORS.reduce((acc, doctor) => {
      acc[doctor.department] = (acc[doctor.department] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalDoctors,
      totalRooms,
      roomsByType,
      doctorsByDepartment,
      vipRooms: roomsByType["VIP"] || 0,
      icuRooms: roomsByType["ICU"] || 0,
      regularRooms:
        (roomsByType["Kelas-1"] || 0) + (roomsByType["Kelas-2"] || 0),
    };
  }, []);
};
export const useHospitalValidation = () => {
  return useMemo(
    () => ({
      isValidDoctor: (doctorName: string) =>
        DOCTORS.some((doctor) => doctor.value === doctorName),

      isValidRoom: (roomName: string) =>
        ROOMS.some((room) => room.value === roomName),

      getRoomInfo: (roomName: string) =>
        ROOMS.find((room) => room.value === roomName),

      getDoctorInfo: (doctorName: string) =>
        DOCTORS.find((doctor) => doctor.value === doctorName),
    }),
    []
  );
};
