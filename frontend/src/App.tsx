import { Link, Navigate, Route, Routes } from "react-router-dom";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="text-xl font-bold text-emerald-800">
            LifeOS
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 sm:block"
            >
              Log in
            </Link>
            <Link
              to="/app"
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white"
            >
              Open app
            </Link>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}

function LandingPage() {
  return (
    <PublicLayout>
      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold text-emerald-700">Your personal memory system</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-6xl">
              Capture everything. Remember what matters.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              LifeOS turns your thoughts, recordings, tasks, and memories into an
              organised personal system.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white"
              >
                Start for free
              </Link>
              <Link
                to="/app"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold"
              >
                Open the app
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Today</p>
            <h2 className="mt-2 text-2xl font-bold">Good morning</h2>
            <div className="mt-5 space-y-3">
              {["Finish research report", "Prepare drone presentation", "Call Mayank"].map(
                (task) => (
                  <div
                    key={task}
                    className="rounded-xl border border-slate-200 p-4 text-sm"
                  >
                    {task}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl font-bold">Everything in one place</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Capture", "Save thoughts using text or voice."],
                ["Understand", "Turn brain dumps into tasks and memories."],
                ["Remember", "Search and ask questions about saved information."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-6 text-sm text-slate-500">
          © 2026 LifeOS
        </div>
      </footer>
    </PublicLayout>
  );
}

type AuthMode = "login" | "signup";

function AuthPage({ mode }: { mode: AuthMode }) {
  const isSignup = mode === "signup";

  return (
    <PublicLayout>
      <main className="grid min-h-[calc(100vh-73px)] place-items-center px-5 py-10">
        <form
          onSubmit={(event) => event.preventDefault()}
          className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h1 className="text-2xl font-bold">
            {isSignup ? "Create your account" : "Welcome back"}
          </h1>

          {isSignup && (
            <label className="mt-5 block text-sm font-medium">
              Name
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="Your name"
              />
            </label>
          )}

          <label className="mt-5 block text-sm font-medium">
            Email
            <input
              type="email"
              required
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
              placeholder="you@example.com"
            />
          </label>

          <label className="mt-5 block text-sm font-medium">
            Password
            <input
              type="password"
              required
              minLength={6}
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
              placeholder="At least 6 characters"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-emerald-700 px-4 py-3 font-semibold text-white"
          >
            {isSignup ? "Create account" : "Log in"}
          </button>

          <p className="mt-5 text-center text-sm text-slate-600">
            {isSignup ? "Already have an account?" : "Need an account?"}{" "}
            <Link
              to={isSignup ? "/login" : "/signup"}
              className="font-semibold text-emerald-700"
            >
              {isSignup ? "Log in" : "Sign up"}
            </Link>
          </p>
        </form>
      </main>
    </PublicLayout>
  );
}

const appPages = [
  ["Dashboard", "dashboard"],
  ["Capture", "capture"],
  ["Brain", "brain"],
  ["Tasks", "tasks"],
  ["Projects", "projects"],
  ["Timeline", "timeline"],
];

function AppLayout() {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[230px_1fr]">
      <aside className="border-b border-slate-200 bg-white p-4 md:min-h-screen md:border-b-0 md:border-r">
        <Link to="/" className="text-xl font-bold text-emerald-800">
          LifeOS
        </Link>

        <nav className="mt-5 flex gap-2 overflow-x-auto md:flex-col">
          {appPages.map(([name, path]) => (
            <Link
              key={path}
              to={`/app/${path}`}
              className="shrink-0 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
            >
              {name}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="min-w-0 p-5 sm:p-8">
        <Routes>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          {appPages.slice(1).map(([, path]) => (
            <Route
              key={path}
              path={path}
              element={<PagePlaceholder name={path} />}
            />
          ))}
        </Routes>
      </main>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Personal workspace</p>
          <h1 className="mt-1 text-3xl font-bold">Good morning</h1>
        </div>
        <Link
          to="/app/capture"
          className="rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white"
        >
          + Capture a thought
        </Link>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["Today's tasks", "Finish research report"],
          ["Recent memories", "Meeting with Mayank"],
          ["Quick capture", "Record or write a thought"],
        ].map(([title, text]) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-slate-500">{text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

function PagePlaceholder({ name }: { name: string }) {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold capitalize">{name}</h1>
      <p className="mt-3 rounded-2xl border border-slate-200 bg-white p-5 text-slate-500">
        This page will be implemented later.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/signup" element={<AuthPage mode="signup" />} />
      <Route path="/app/*" element={<AppLayout />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}