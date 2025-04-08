import "@/styles/layout.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="layout">
          <Navbar />
          <main className="main-content"> {children} </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
