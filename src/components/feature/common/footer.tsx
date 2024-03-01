"use client";

import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="mx-auto w-full max-w-screen-xl py-4">
          <span className="block text-center text-xs"></span>
        </div>
        <span className="block text-center text-sm">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Cut/Block
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    );
  }
}

export default Footer;
