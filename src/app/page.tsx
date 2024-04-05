"use client";
import App from "@/app/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center border border-slate-400 rounded px-6 py-2 mt-4 min-w-[300px] max-w-[500px]'>
        <h1 className='text-slate-600 my-1'>送機行程</h1>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </div>
    </div>
  );
}
