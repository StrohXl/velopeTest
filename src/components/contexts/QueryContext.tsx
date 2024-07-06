"use client";

import { ReactNode } from "react";

// React Query Imports
import { QueryClient, QueryClientProvider } from "react-query";

// Type Imports

const queryClient = new QueryClient();

const QueryContext = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryContext;
