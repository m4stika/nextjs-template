"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

function QueryProviders({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: { queries: { staleTime: 60000 } },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}

export default QueryProviders;
