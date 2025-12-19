import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitBook",
  description: "FitBook — booking for sport classes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <header className="header">
          <div className="container">
            <div className="logo">FitBook</div>
            <nav className="nav">
              <a href="/">Розклад</a>
              <a href="/favorites">Улюблені</a>
              <a href="/bookings">Мої бронювання</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container">© {new Date().getFullYear()} FitBook</div>
        </footer>
      </body>
    </html>
  );
}
