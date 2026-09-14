import { Suspense } from "react";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";

const fetchTechnologies = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

const technologiesPromise = fetchTechnologies();

export default function Technologies({ stack, onAdd, onRemove, onRemoveAll }) {
  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
    >
      <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Explore the <span className="text-pink-500">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          <Suspense fallback={<div>Loading technologies...</div>}>
            <TechCard
              technologies={technologiesPromise}
              onAdd={onAdd}
              stack={stack}
            />
          </Suspense>
        </div>

        <div className="lg:col-span-1">
          <StackSidebar
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}
