export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-2 lg:px-10">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          Build Your Ideal
          <br />
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 max-w-md text-slate-500">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#technologies"
            className="bg-brand-gradient rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90"
          >
            Explore Technologies
          </a>

          <a
            href="#"
            className="rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="hidden justify-center md:flex lg:justify-end">
        <div
          className="h-80 w-80 bg-contain bg-center bg-no-repeat sm:h-96 sm:w-96"
          style={{ backgroundImage: "url('/banner-stack.png')" }}
          role="img"
          aria-label="Development stack illustration"
        />
      </div>
    </section>
  );
}
