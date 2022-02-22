import React from "react";
import { Link } from "@reach/router";
import "./Navbar.css";
import { MdArrowBack } from "react-icons/md";
import { Head } from "react-static";

interface NavbarProps {
  title: string;
}

export default function Navbar(props: NavbarProps) {
  return (
    <div className="Navbar">
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="container">
        <Link to="/" className="navbar-home">
          <MdArrowBack size={24} />
        </Link>
        <span className="navbar-title">{props.title}</span>
      </div>
    </div>
  );
}
