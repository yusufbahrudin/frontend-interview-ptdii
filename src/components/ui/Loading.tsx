import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

export const Loading = ({ size = "md", className, text }: LoadingProps) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center space-y-2",
        className
      )}
    >
      <div className={cn("animate-spin", sizes[size])}>
        <svg
          className="w-full h-full text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      {text && <p className="text-sm text-slate-600 font-medium">{text}</p>}
    </div>
  );
};

export const TableLoading = () => {
  return (
    <div className="animate-pulse space-y-4 p-8">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex space-x-4">
          <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg w-1/4"></div>
          <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg w-1/6"></div>
          <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg w-1/3"></div>
          <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg w-1/6"></div>
          <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg w-1/4"></div>
        </div>
      ))}
    </div>
  );
};
