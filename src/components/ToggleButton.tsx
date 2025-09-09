interface ToggleButtonProps {
  isToggled?: boolean;
  onToggle?: (toggled: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isToggled = false,
  onToggle,
  label,
  disabled = false,
  size = "xs",
}) => {
  const sizeClasses = {
    xs: "w-8 h-4",
    sm: "w-10 h-5",
    md: "w-12 h-6",
    lg: "w-14 h-7",
  };

  const knobSizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const translateClasses = {
    xs: isToggled ? "translate-x-4" : "translate-x-0",
    sm: isToggled ? "translate-x-5" : "translate-x-0",
    md: isToggled ? "translate-x-6" : "translate-x-0",
    lg: isToggled ? "translate-x-7" : "translate-x-0",
  };

  const handleToggle = () => {
    if (!disabled && onToggle) {
      onToggle(!isToggled);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={`
          relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out px-0.5
          ${sizeClasses[size]}
          ${isToggled ? "bg-black" : "bg-gray-300"}
          ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer hover:bg-opacity-80"
          }
        `}
        aria-pressed={isToggled}
        aria-label={label || "Toggle button"}
      >
        <span
          className={`
            inline-block rounded-full bg-white shadow-lg transform transition-transform duration-200 ease-in-out
            ${knobSizeClasses[size]}
            ${translateClasses[size]}
          `}
        />
      </button>
      {label && (
        <span
          className={`text-sm font-medium ${
            disabled ? "text-gray-400" : "text-gray-900"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
};
