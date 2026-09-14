const columns = [
  {
    title: "Product",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 text-sm font-bold text-white">
                DS
              </span>
              <span className="text-lg font-bold text-slate-900">
                Dev<span className="text-pink-500">Stack</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-slate-800">
                GitHub
              </a>
              <a href="#" className="hover:text-slate-800">
                Twitter
              </a>
              <a href="#" className="hover:text-slate-800">
                LinkedIn
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-slate-800">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
