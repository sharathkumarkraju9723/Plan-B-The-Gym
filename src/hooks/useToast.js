import { useToastContext } from "../components/providers/ToastProvider";

export const useToast = () => {
  return useToastContext();
};
