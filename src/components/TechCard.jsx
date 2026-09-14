import { use } from "react";

export default function TechCard({ technologies, onAdd, stack }) {
  const techData = use(technologies);

  return (
    <>
      {techData.map((tech) => {
        const isAdded = stack.some((item) => item.id === tech.id);

        return (
          <div
            className="flex flex-col rounded-2xl border border-slate-200 p-6"
            key={tech.id}
          >
            <div className="flex items-start justify-between">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${tech.iconBg} ${tech.iconColor}`}
              >
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className="h-6 w-6"
                />
              </span>
              {tech.badge && (
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${tech.badgeColor}`}
                >
                  {tech.badge}
                </span>
              )}
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              {tech.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              {tech.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
                {tech.category}
              </span>
              <span className="text-slate-500">{tech.level}</span>
              <span className="ml-auto flex items-center gap-1 font-medium text-slate-700">
                <span className="text-amber-400">★</span>
                {tech.rating}
              </span>
            </div>

            <button
              onClick={() => onAdd(tech)}
              disabled={isAdded}
              className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
                isAdded
                  ? "cursor-not-allowed bg-slate-100 text-slate-400"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              {isAdded ? "Added" : "Add to Stack"}
            </button>
          </div>
        );
      })}
    </>
  );
}
