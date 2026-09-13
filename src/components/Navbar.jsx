
import { useState } from 'react'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-slate-100">
      <nav className="mx-auto max-w-7xl px-4 py-4 lg:px-10">
        {/* Desktop Navbar */}
        <div className="hidden items-center justify-between md:flex">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
              DS
            </span>

            <span className="text-lg font-bold text-slate-900">
              Dev
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Stack
              </span>
            </span>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`text-sm font-medium ${
                  i === 0
                    ? 'bg-brand-gradient bg-clip-text text-transparent'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Auth */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Sign In
            </a>

            <a
              href="#"
              className="bg-brand-gradient rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex items-center justify-between md:hidden">
          {/* Left - Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className="h-0.5 w-6 bg-slate-800" />
            <span className="h-0.5 w-6 bg-slate-800" />
            <span className="h-0.5 w-6 bg-slate-800" />
          </button>

          {/* Center - Brand */}
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
              DS
            </span>

            <span className="text-lg font-bold text-slate-900">
              Dev
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Stack
              </span>
            </span>
          </a>

          {/* Right - Auth */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="text-xs font-medium text-slate-700"
            >
              Sign In
            </a>

            <a
              href="#"
              className="bg-brand-gradient rounded-full px-3 py-2 text-xs font-semibold text-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-100 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`text-sm font-medium ${
                  i === 0
                    ? 'bg-brand-gradient bg-clip-text text-transparent'
                    : 'text-slate-600'
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

