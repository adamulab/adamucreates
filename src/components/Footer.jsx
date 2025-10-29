import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} AdamuCreates
    </footer>
  );
}
