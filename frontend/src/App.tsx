const sections = ["Dashboard", "Capture", "Brain", "Tasks", "Projects", "Timeline"];

function App() {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[230px_1fr]">
      <aside className="border-b border-emerald-100 bg-white p-5 md:min-h-screen md:border-b-0 md:border-r">
        <a href="/" className="text-xl font-bold text-emerald-800">
          LifeOS
        </a>

        <nav className="mt-6 flex gap-2 overflow-x-auto md:flex-col">
          {sections.map((section, index) => (
            <button
              key={section}
              className={`shrink-0 rounded-lg px-3 py-2 text-left text-sm ${
                index === 0
                  ? "bg-emerald-100 font-semibold text-emerald-900"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {section}
            </button>
          ))}
        </nav>

        <p className="mt-8 hidden text-sm text-slate-500 md:block">
          Your personal space to capture, organise, and remember.
        </p>
      </aside>

      <main className="mx-auto w-full max-w-5xl p-5 sm:p-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Your personal workspace</p>
            <h1 className="mt-1 text-3xl font-bold">Good morning</h1>
          </div>
          <button className="rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white hover:bg-emerald-800">
            + Capture a thought
          </button>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["Today's tasks", "Your priorities will appear here."],
            ["Recent memories", "Your saved thoughts will appear here."],
            ["Quick capture", "Capture text and voice here soon."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-slate-500">{description}</p>
            </article>
          ))}
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-semibold">Welcome to LifeOS</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            This is the first frontend skeleton. Today, these sections are a visual
            starting point; they don’t save data or connect to the backend yet.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;