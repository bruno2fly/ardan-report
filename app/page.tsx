"use client";

import { useState, useEffect } from "react";

const PASSWORD = "ardan2026";
const AUTH_KEY = "ardan_report_auth";

// ─── Icons (inline SVG) ───────────────────────────────────────────────────────

function IconLock() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function IconTrendUp() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconDollar() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

// ─── Login Screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (password === PASSWORD) {
        localStorage.setItem(AUTH_KEY, "true");
        onAuth();
      } else {
        setError(true);
        setLoading(false);
        setPassword("");
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-spa-cream flex items-center justify-center px-4">
      {/* Background decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-spa-purple opacity-5" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-spa-gold opacity-5" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-spa-purple-light opacity-5" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-spa-purple bg-opacity-10 border border-spa-purple border-opacity-20 mb-6">
            <span className="text-spa-purple">
              <IconLock />
            </span>
          </div>
          <h1 className="font-serif text-3xl text-spa-charcoal mb-2 tracking-wide">
            Ardan Med Spa
          </h1>
          <p className="text-sm text-spa-purple uppercase tracking-[0.2em] font-sans font-light">
            Performance Report · 2025–2026
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-spa-cream-dark shadow-lg rounded-sm p-8">
          <p className="text-spa-charcoal-light text-sm text-center mb-6 font-sans leading-relaxed">
            This report is confidential. Please enter your access password to continue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-spa-purple uppercase tracking-widest mb-2">
                Access Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                className={`w-full border rounded-sm px-4 py-3 text-spa-charcoal text-sm outline-none font-sans transition-colors duration-200 ${
                  error
                    ? "border-red-300 bg-red-50"
                    : "border-spa-cream-dark bg-spa-cream focus:border-spa-purple"
                }`}
                placeholder="Enter password"
                autoFocus
                autoComplete="current-password"
              />
              {error && (
                <p className="mt-2 text-xs text-red-500 font-sans">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-spa-purple hover:bg-spa-purple-dark disabled:opacity-50 text-white font-sans font-medium py-3 rounded-sm tracking-wider transition-all duration-300 text-sm uppercase"
            >
              {loading ? "Verifying..." : "Access Report"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-spa-charcoal-light mt-6 font-sans">
          Prepared by{" "}
          <span className="text-spa-purple font-medium">2FLY Digital Marketing</span>
        </p>
      </div>
    </div>
  );
}

// ─── Report ───────────────────────────────────────────────────────────────────

function Report() {
  return (
    <div className="min-h-screen bg-spa-cream">

      {/* Hero */}
      <header className="relative bg-spa-charcoal overflow-hidden">
        {/* Decorative overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-spa-purple-dark via-spa-charcoal to-spa-charcoal opacity-95" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-spa-purple opacity-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-spa-gold opacity-5 -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-spa-purple-light opacity-10 translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-spa-gold" />
            <span className="text-spa-gold text-xs font-sans font-medium uppercase tracking-[0.3em]">
              Confidential · Annual Review
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-4">
            Ardan Med Spa
            <span className="block text-spa-purple-light font-light italic mt-1">
              / Revival 22
            </span>
          </h1>

          <p className="text-spa-cream-dark text-lg md:text-xl font-sans font-light mb-8 max-w-xl leading-relaxed">
            Marketing Performance Report<br />
            <span className="text-spa-gold">June 2025 – April 2026</span>
          </p>

          {/* Key stat pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { label: "Investment", value: "$6,227" },
              { label: "Email Open Rate", value: "50%+" },
              { label: "Link Click Growth", value: "+175,200%" },
              { label: "Uptime", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white bg-opacity-10 border border-white border-opacity-10 rounded-sm px-4 py-2 backdrop-blur-sm">
                <span className="text-xs text-spa-cream-dark font-sans uppercase tracking-widest block">{stat.label}</span>
                <span className="text-white font-sans font-medium text-sm">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spa-gold to-transparent opacity-40" />
      </header>

      {/* Client Info Bar */}
      <div className="bg-white border-b border-spa-cream-dark">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-6 text-xs font-sans text-spa-charcoal-light uppercase tracking-widest">
            <span><span className="text-spa-purple font-medium">Client:</span> Ardan Med Spa / Revival 22 — Wellesley, MA</span>
            <span className="hidden sm:inline text-spa-cream-dark">|</span>
            <span><span className="text-spa-purple font-medium">Contact:</span> Ana Elisa Sombrio</span>
            <span className="hidden sm:inline text-spa-cream-dark">|</span>
            <span><span className="text-spa-purple font-medium">Prepared by:</span> 2FLY Digital Marketing</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-14">

        {/* Executive Summary */}
        <section className="mb-16">
          <SectionHeader
            eyebrow="Overview"
            title="Executive Summary"
            subtitle="A full year of consistent execution — measured results across every channel."
          />

          <div className="bg-white border border-spa-cream-dark rounded-sm shadow-sm overflow-hidden">
            {/* Gold accent top bar */}
            <div className="h-1 bg-gradient-to-r from-spa-gold via-spa-gold-light to-spa-purple" />

            <div className="p-8 md:p-10">
              <p className="font-sans text-spa-charcoal-light text-base leading-relaxed mb-8 max-w-3xl">
                Over the period from June 2025 through April 2026, 2FLY Digital Marketing delivered a complete,
                multi-channel marketing operation for Ardan Med Spa and Revival 22. From content creation and
                social media management to email campaigns, paid advertising, and website infrastructure —
                every commitment was met on time, every month.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    icon: <IconDollar />,
                    label: "Advertising Investment",
                    value: "$6,227",
                    sub: "Across 11 months of operations",
                    color: "purple",
                  },
                  {
                    icon: <IconMail />,
                    label: "Email Open Rate",
                    value: "50%+",
                    sub: "Industry avg: 20–25%",
                    color: "gold",
                  },
                  {
                    icon: <IconTrendUp />,
                    label: "Facebook Link Clicks",
                    value: "+175,200%",
                    sub: "Growth from zero baseline",
                    color: "purple",
                  },
                  {
                    icon: <IconMail />,
                    label: "Email Campaigns",
                    value: "11 / 11",
                    sub: "Perfect execution, every month",
                    color: "gold",
                  },
                  {
                    icon: <IconGlobe />,
                    label: "Website Uptime",
                    value: "100%",
                    sub: "Zero downtime all year",
                    color: "purple",
                  },
                  {
                    icon: <IconStar />,
                    label: "Contacts Managed",
                    value: "600+",
                    sub: "Active email subscriber base",
                    color: "gold",
                  },
                ].map((item) => (
                  <div key={item.label} className="bg-spa-cream rounded-sm p-5 border border-spa-cream-dark">
                    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-full mb-3 ${
                      item.color === "gold"
                        ? "bg-yellow-50 text-spa-gold-dark border border-yellow-200"
                        : "bg-purple-50 text-spa-purple border border-purple-200"
                    }`}>
                      {item.icon}
                    </div>
                    <p className="text-xs text-spa-charcoal-light font-sans uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-serif text-2xl text-spa-charcoal font-medium mb-1">{item.value}</p>
                    <p className="text-xs text-spa-charcoal-light font-sans">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <SectionHeader
            eyebrow="Results"
            title="Performance Metrics"
            subtitle="Channel-by-channel breakdown of growth and execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Facebook & Instagram */}
            <MetricCard
              icon={<IconTrendUp />}
              title="Facebook & Instagram"
              color="purple"
              metrics={[
                { label: "Content Interactions", value: "93", badge: "+520%", badgeColor: "green" },
                { label: "Link Clicks", value: "1,800", badge: "+175,200%", badgeColor: "green" },
                { label: "Page Visits", value: "1,300", badge: "+175%", badgeColor: "green" },
              ]}
              note="Growth measured from zero baseline — accounts launched from scratch."
            />

            {/* Email Marketing */}
            <MetricCard
              icon={<IconMail />}
              title="Email Marketing"
              color="gold"
              metrics={[
                { label: "Open Rate", value: "50%+", badge: "2× industry avg", badgeColor: "gold" },
                { label: "Campaigns Delivered", value: "11/11", badge: "100% execution", badgeColor: "gold" },
                { label: "Active Contacts", value: "600+", badge: "Growing list", badgeColor: "gold" },
              ]}
              note="Industry average email open rate is 20–25%. We more than doubled it."
            />

            {/* Website & Uptime */}
            <MetricCard
              icon={<IconGlobe />}
              title="Website & Infrastructure"
              color="purple"
              metrics={[
                { label: "Uptime", value: "100%", badge: "Zero incidents", badgeColor: "green" },
                { label: "Sites Built", value: "2", badge: "Included free", badgeColor: "gold" },
                { label: "Rebrand Delivered", value: "✓", badge: "Full suite", badgeColor: "green" },
              ]}
              note="Both Ardan Med Spa and Revival 22 websites built and maintained at no extra cost."
            />
          </div>
        </section>

        {/* Advertising Investment */}
        <section className="mb-16">
          <SectionHeader
            eyebrow="Financials"
            title="Advertising Investment"
            subtitle="Transparent breakdown of every paid advertising dollar invested."
          />

          <div className="bg-white border border-spa-cream-dark rounded-sm shadow-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-spa-purple via-spa-purple-light to-spa-gold" />
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-spa-cream-dark bg-spa-cream">
                    <th className="table-header">Date</th>
                    <th className="table-header">Description</th>
                    <th className="table-header text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-spa-cream-dark">
                  {[
                    { date: "July 23, 2025", desc: "Paid Social Advertising — Q3 2025", amount: "$1,997.92" },
                    { date: "October 2, 2025", desc: "Paid Social Advertising — Q4 2025", amount: "$1,997.92" },
                    { date: "December 11, 2025", desc: "Paid Social Advertising — Q1 2026", amount: "$2,230.74" },
                  ].map((row) => (
                    <tr key={row.date} className="hover:bg-spa-cream transition-colors duration-150">
                      <td className="table-cell font-medium text-spa-charcoal whitespace-nowrap">{row.date}</td>
                      <td className="table-cell">{row.desc}</td>
                      <td className="table-cell text-right font-mono font-medium text-spa-charcoal">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-spa-purple border-opacity-20 bg-spa-cream">
                    <td className="table-cell font-medium text-spa-charcoal" colSpan={2}>
                      <span className="text-xs uppercase tracking-widest font-medium text-spa-purple">Total Investment</span>
                    </td>
                    <td className="table-cell text-right font-mono text-lg font-semibold text-spa-charcoal">$6,226.58</td>
                  </tr>
                  <tr className="bg-spa-cream">
                    <td className="table-cell text-spa-charcoal-light" colSpan={2}>
                      <span className="text-xs uppercase tracking-widest text-spa-charcoal-light">Monthly Average</span>
                    </td>
                    <td className="table-cell text-right font-mono text-sm text-spa-charcoal-light">~$593 / month</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

        {/* Strategic Value */}
        <section className="mb-16">
          <SectionHeader
            eyebrow="Beyond the Numbers"
            title="Strategic Value Delivered"
            subtitle="What we built that doesn't show up in a spreadsheet — but should."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <IconGlobe />,
                title: "Two Websites Built — At No Extra Cost",
                description: "Full website build and launch for both Ardan Med Spa and the Revival 22 rebrand. Professional design, responsive, SEO-ready. Included in the monthly retainer.",
                items: ["Ardan Med Spa primary site", "Revival 22 rebrand site", "Ongoing hosting & maintenance"],
              },
              {
                icon: <IconStar />,
                title: "Full Rebranding Strategy",
                description: "From concept to execution — brand identity, design system, and creative assets delivered to position Revival 22 as a premium wellness destination.",
                items: ["Brand guide & identity", "Brochures & print assets", "Creative asset library"],
              },
              {
                icon: <IconTrendUp />,
                title: "Strategic Consulting",
                description: "Weekly strategy sessions with leadership — covering growth opportunities, membership model ideas, sales strategy, and market positioning.",
                items: ["Weekly leadership meetings", "Membership strategy consulting", "Sales funnel recommendations"],
              },
              {
                icon: <IconCheck />,
                title: "Ongoing Operations Management",
                description: "Every month, without exception — content created, scheduled, posted. Social accounts managed. Ads monitored. Website maintained. Email campaigns sent.",
                items: ["Content creation & scheduling", "Social media management", "Paid ad management & email ops"],
              },
            ].map((card) => (
              <div key={card.title} className="bg-white border border-spa-cream-dark rounded-sm p-7 shadow-sm">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-spa-purple border border-purple-100 mb-4">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl text-spa-charcoal mb-2">{card.title}</h3>
                <p className="text-sm text-spa-charcoal-light font-sans leading-relaxed mb-4">{card.description}</p>
                <ul className="space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-sans text-spa-charcoal-light">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <IconCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Statement */}
        <section className="mb-16">
          <div className="bg-spa-charcoal rounded-sm p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-spa-purple-dark via-spa-charcoal to-spa-charcoal opacity-90" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-spa-gold to-transparent opacity-40" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-spa-gold to-transparent opacity-40" />

            <div className="relative">
              <div className="inline-block mb-6">
                <div className="h-px w-16 bg-spa-gold mx-auto" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
                A year of consistent results.<br />
                <span className="text-spa-gold italic font-light">And we&apos;re just getting started.</span>
              </h2>
              <p className="text-spa-cream-dark font-sans text-base leading-relaxed max-w-2xl mx-auto mb-4">
                Every metric, every campaign, every website — delivered on time, on brief, and above expectations.
                This is what a true marketing partnership looks like.
              </p>
              <p className="text-spa-purple-light font-sans text-sm uppercase tracking-widest">
                2FLY Digital Marketing · Boston, MA
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-spa-cream-dark">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-serif text-lg text-spa-charcoal">Ardan Med Spa / Revival 22</p>
              <p className="text-xs text-spa-charcoal-light font-sans mt-0.5">
                Owners: Steve Crandall, Jennifer Crandall, Marissa Hughes · Manager: Ana Elisa Sombrio
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-spa-charcoal-light font-sans uppercase tracking-widest">Prepared by</p>
              <p className="font-serif text-spa-purple text-lg">2FLY Digital Marketing</p>
              <p className="text-xs text-spa-charcoal-light font-sans mt-0.5">Confidential · June 2025 – April 2026</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

// ─── Reusable Components ──────────────────────────────────────────────────────

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px w-6 bg-spa-gold" />
        <span className="text-spa-gold text-xs font-sans font-medium uppercase tracking-[0.25em]">{eyebrow}</span>
      </div>
      <h2 className="font-serif text-3xl md:text-4xl text-spa-charcoal mb-2">{title}</h2>
      <p className="text-spa-charcoal-light font-sans text-sm leading-relaxed max-w-xl">{subtitle}</p>
    </div>
  );
}

type BadgeColor = "green" | "gold";

function MetricCard({
  icon,
  title,
  color,
  metrics,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  color: "purple" | "gold";
  metrics: { label: string; value: string; badge: string; badgeColor: BadgeColor }[];
  note: string;
}) {
  return (
    <div className="bg-white border border-spa-cream-dark rounded-sm shadow-sm overflow-hidden">
      <div className={`h-1 ${color === "gold" ? "bg-gradient-to-r from-spa-gold to-spa-gold-light" : "bg-gradient-to-r from-spa-purple to-spa-purple-light"}`} />
      <div className="p-6">
        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 ${
          color === "gold"
            ? "bg-yellow-50 text-spa-gold-dark border border-yellow-200"
            : "bg-purple-50 text-spa-purple border border-purple-100"
        }`}>
          {icon}
        </div>
        <h3 className="font-serif text-xl text-spa-charcoal mb-5">{title}</h3>
        <div className="space-y-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-sans text-spa-charcoal-light uppercase tracking-widest mb-0.5">{m.label}</p>
                <p className="font-serif text-xl text-spa-charcoal font-medium">{m.value}</p>
              </div>
              <span className={`flex-shrink-0 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium font-sans whitespace-nowrap ${
                m.badgeColor === "gold"
                  ? "bg-yellow-50 text-spa-gold-dark border border-yellow-200"
                  : "bg-emerald-50 text-emerald-700 border border-emerald-200"
              }`}>
                {m.badge}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-spa-cream-dark">
          <p className="text-xs font-sans text-spa-charcoal-light leading-relaxed italic">{note}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Root Page ────────────────────────────────────────────────────────────────

export default function Page() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_KEY);
    setAuthenticated(stored === "true");
  }, []);

  if (authenticated === null) {
    // Still checking localStorage — render nothing (avoids flash)
    return (
      <div className="min-h-screen bg-spa-cream flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-spa-purple border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authenticated) {
    return <LoginScreen onAuth={() => setAuthenticated(true)} />;
  }

  return <Report />;
}
