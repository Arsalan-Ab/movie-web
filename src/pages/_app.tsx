import GlobalLayout from "@/layouts/GlobalLayout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import store from "../redux/store/index";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <GlobalLayout>
                    <Component {...pageProps} />
                </GlobalLayout>
                <ReactQueryDevtools initialIsOpen={false} />
            </Provider>
        </QueryClientProvider>
    );
}
