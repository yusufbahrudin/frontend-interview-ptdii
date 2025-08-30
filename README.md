# Hospital Inpatient Module - Frontend Developer Test

A modern web application for managing hospital inpatient admissions, built with Next.js, TypeScript, TailwindCSS, and Zustand.

## 🚀 Features

### 1. **Patient Admission Form**
- Comprehensive form with validation
- Required fields: Name, NIK, Diagnosis, Admission Date, Doctor, Room
- Real-time validation with error messages
- NIK validation (16 digits)
- Date validation (no future dates)
- Responsive design

### 2. **Active Patients Table**
- Displays all admitted patients
- **Search**: Search by name or NIK
- **Sorting**: Sort by name or admission date (ascending/descending)
- **Pagination**: 5 patients per page with navigation
- Loading states with skeleton placeholders
- Empty states with helpful messages
- Responsive table design

### 3. **Navigation & State Management**
- Smooth transitions between form and table views
- Zustand for global state management
- Mock data with 500ms delay to simulate API calls
- TypeScript throughout (no `any` types)

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **UI Components**: Custom reusable components
- **Form Validation**: Custom validation utilities

## 📋 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── EmptyState.tsx
│   │   ├── Input.tsx
│   │   ├── Loading.tsx
│   │   └── Select.tsx
│   ├── PatientForm.tsx
│   └── PatientTable.tsx
├── store/
│   └── patientStore.ts
├── types/
│   └── patient.ts
├── utils/
│   └── validation.ts
└── lib/
    └── utils.ts
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## ✨ Key Features Implementation

### Form Validation
- Real-time validation with custom validation utilities
- Indonesian language error messages
- Field-level error clearing on user input
- Comprehensive validation rules

### State Management
- Zustand store for patient data
- Optimistic updates for better UX
- Mock API simulation with loading states
- Search and sort functionality

### UI/UX Features
- Loading states during data fetching
- Empty states when no data is available
- Responsive design for all screen sizes
- Accessible form controls and navigation
- Custom scrollbar styling
- Hover effects and smooth transitions

### TypeScript Implementation
- Strict TypeScript configuration
- Comprehensive type definitions
- No `any` types used
- Type-safe state management

## 🎯 Test Requirements Compliance

✅ **Formulir Pasien Masuk**: Complete form with validation  
✅ **Daftar Pasien Aktif**: Table with search, sort, and pagination  
✅ **Transisi Halaman**: Smooth navigation between views  
✅ **TypeScript**: Strict typing throughout, no `any` types  
✅ **Komponen Reusable**: Modular UI components  
✅ **useState/useEffect**: Proper React hooks usage  
✅ **Loading State**: Comprehensive loading indicators  
✅ **Empty State**: User-friendly empty states  
✅ **Mock Data**: 500ms delay simulation  

## 🔧 Development Notes

- The app uses mock data with simulated API delays
- All components are fully typed with TypeScript
- Form validation follows Indonesian UX patterns
- Responsive design works on mobile and desktop
- Accessibility considerations implemented
- Clean, maintainable code structure

## 📝 Usage

1. **View Patients**: Start on the patient list page
2. **Add Patient**: Click "Tambah Pasien" or use navigation
3. **Search**: Use the search box to find patients by name or NIK
4. **Sort**: Click column headers to sort by name or date
5. **Navigate**: Use pagination controls for large datasets

---

**Frontend Developer Test - Hospital Management System**  
Built with ❤️ using Next.js, TypeScript, and TailwindCSS
