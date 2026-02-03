import { Geist, Geist_Mono } from "next/font/google";
import "../css/globals.scss";
import Header from "../components/Header";
import Container from "../components/Container";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="wrapper">
          <Header />
          <Container>
            {children}
          </Container>
        </div>
      </body>
    </html>
  );
}
