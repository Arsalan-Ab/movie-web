import GlobalLayout from "@/layouts/GlobalLayout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalLayout>
                <Component {...pageProps} />
            </GlobalLayout>
        </QueryClientProvider>
    );
}
