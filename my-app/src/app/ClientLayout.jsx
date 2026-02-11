"use client";
import RecoilProvider from "@/recoil/RecoilProvider";
import Header from "../components/Header";
import Container from "../components/Container";

export default function ClientLayout({ children }) {
  return (
    <RecoilProvider>
      <div className="wrapper">
        <Header />
        <Container>{children}</Container>
      </div>
    </RecoilProvider>
  );
}