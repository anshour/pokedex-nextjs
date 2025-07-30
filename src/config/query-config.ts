import displayErrorToast from "@/utils/display-error-toast";
import { QueryClientConfig } from "@tanstack/react-query";

export const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      networkMode: "online",
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      throwOnError: (error: Error) => {
        displayErrorToast(error);
        return false;
      },
      retry: 1,
    },
    mutations: {
      networkMode: "online",
      retry: 1,
    },
  },
};
