"use client";
import { RecoilRoot } from "recoil";
import "../css/globals.scss";
import Header from "../components/Header";
import Container from "../components/Container";


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <RecoilRoot>
          <div className="wrapper">
            <Header />
            <Container>
              {children}
            </Container>
          </div>
        </RecoilRoot>
      </body>
    </html>
  );
}
