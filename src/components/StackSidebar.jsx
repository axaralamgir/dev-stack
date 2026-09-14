export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="h-fit rounded-2xl border border-slate-200 p-6 lg:sticky lg:top-6">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-xs text-slate-400">Technology Selected</p>

      <div className="mt-4 flex flex-col gap-3">
        {stack.length === 0 ? (
          <p className="rounded-lg bg-slate-50 px-3 py-6 text-center text-xs text-slate-400">
            No technologies selected yet. Add some from the list.
          </p>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-md`}
                >
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="h-6 w-6"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 leading-tight">
                    {tech.name}
                  </p>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {tech.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="text-slate-300 hover:text-slate-500"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-lg border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
