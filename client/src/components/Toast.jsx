import { useState, useEffect } from "react";

const Toast = ({ message, type = "info", duration = 3000, onClose }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const typeStyles = {
    success: "bg-green-500 border-green-600",
    error: "bg-red-500 border-red-600",
    info: "bg-lightblue border-darkblue",
    warning: "bg-yellow-500 border-yellow-600",
  };

  const icons = {
    success: "✓",
    error: "✕",
    info: "ℹ",
    warning: "⚠",
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 min-w-80 max-w-sm p-4 rounded-lg border-l-4 text-white shadow-lg transform transition-all duration-300 ${typeStyles[type]}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-2 text-lg font-bold">{icons[type]}</span>
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-300 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info", duration = 3000) => {
    const id = Date.now();
    const newToast = { id, message, type, duration };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const ToastContainer = () => (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );

  return {
    addToast,
    ToastContainer,
    success: (message, duration) => addToast(message, "success", duration),
    error: (message, duration) => addToast(message, "error", duration),
    info: (message, duration) => addToast(message, "info", duration),
    warning: (message, duration) => addToast(message, "warning", duration),
  };
};

export { Toast, useToast };
