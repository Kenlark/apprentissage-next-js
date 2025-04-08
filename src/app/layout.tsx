import "@/styles/layout.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content"> {children} </main>
      <Footer />
    </div>
  );
}
