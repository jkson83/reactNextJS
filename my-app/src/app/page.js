'use client'
import "./layout.js";
import "./css/globals.scss";
import Header from "./components/Header";
import Container from "./components/Container";

export default function Main(){ 
  return (
    <div className="wrapper">
      <Header />
      <Container />
    </div>
  );
}