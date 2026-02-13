import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Group A Hospital - Quality Healthcare for All",
  description: "Group A Hospital in Apomu, Osun State provides quality healthcare services with modern facilities and experienced medical professionals. Emergency care, surgery, pediatrics, maternity, diagnostics, pharmacy, cardiology, and orthopedics.",
  keywords: "hospital, healthcare, Apomu, Osun State, medical services, emergency care, surgery, pediatrics, maternity, diagnostics, pharmacy, cardiology, orthopedics, Nigeria healthcare",
  authors: [{ name: "Group A Hospital" }],
  openGraph: {
    title: "Group A Hospital - Quality Healthcare in Apomu",
    description: "Group A Hospital provides comprehensive healthcare services including emergency care, surgery, pediatrics, maternity, diagnostics, pharmacy, cardiology, and orthopedics in Apomu, Osun State, Nigeria.",
    url: "https://group-a-hospital.vercel.app",
    siteName: "Group A Hospital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@groupahospital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: true,
  },
  verification: {
    google: "your-verification-code-here",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} font-sans`}>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col transition-colors duration-300`}
      >
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <Header />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
