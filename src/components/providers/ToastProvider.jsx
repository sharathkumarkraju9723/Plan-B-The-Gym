import { createContext, useContext, useState } from "react";
import Toast from "../Ui/Toast";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({
    visible: false,
    message: "",
  });

  const showToast = (message) => {
    setToast({ visible: true, message });
  };

  const hideToast = () => {
    setToast({ visible: false, message: "" });
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toast.visible && (
        <Toast message={toast.message} onClose={hideToast} />
      )}
    </ToastContext.Provider>
  );
}

export const useToastContext = () => useContext(ToastContext);
