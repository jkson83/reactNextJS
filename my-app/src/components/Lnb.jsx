"use client";
import Link from "next/link";

export default function Lnb() { 
  return (
    <nav className="lnb">
      <div className="menu">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/card">card</Link>
          </li>
          <li>
            <Link href="/todoList">todoList</Link>
          </li>
          <li>
            <Link href="/game">game</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}