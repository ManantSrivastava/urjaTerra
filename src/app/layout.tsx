import type { Metadata } from 'next';
import './globals.css';
import { EarthSyncProvider } from '@/context/EarthSyncContext';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ToastContainer } from '@/components/ToastContainer';

export const metadata: Metadata = {
  title: 'urjaTerra — Waste Less. Power More.',
  description:
    'urjaTerra brings smarter recyclable waste management and rooftop solar estimation together in one simple platform.',
  keywords: [
    'CleanTech',
    'Smart Waste Management',
    'Rooftop Solar Estimator',
    'SolarSaathi',
    'Recyclable Waste',
    'GreenPoints',
    'CleanTech Innovation',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-[#00B884]/20 selection:text-[#063D2E] transition-colors duration-150">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <EarthSyncProvider>
            {/* Top Sticky Horizontal Navbar */}
            <Navigation />

            {/* Main scrollable page content */}
            <main className="flex-1 w-full flex flex-col">
              {children}
            </main>

            {/* Minimal Clean Footer */}
            <Footer />

            {/* Toast Notification Container */}
            <ToastContainer />
          </EarthSyncProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
