"use client";
import { useState, useEffect } from "react";

const PASSWORD = "ardan2026";
const AUTH_KEY = "ardan_auth";

function PasswordGate({ onAuth }: { onAuth: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true");
      onAuth();
    } else {
      setError(true);
      setValue("");
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md text-center">
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full bg-[#6B4EFF]/10 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🌿</span>
          </div>
          <h1 className="text-2xl font-serif text-[#1A1A1A] font-bold mb-1">Ardan Med Spa</h1>
          <p className="text-sm text-gray-500">Performance Report — Confidential</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={value}
            onChange={e => { setValue(e.target.value); setError(false); }}
            placeholder="Enter access password"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B4EFF]/40 focus:border-[#6B4EFF]"
            autoFocus
          />
          {error && <p className="text-red-500 text-xs">Incorrect password. Please try again.</p>}
          <button
            type="submit"
            className="w-full bg-[#6B4EFF] text-white rounded-lg py-3 text-sm font-semibold hover:bg-[#5a3de0] transition-colors"
          >
            Access Report
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-6">2FLY Digital Marketing · Prepared for Ardan Med Spa</p>
      </div>
    </div>
  );
}

function Report() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#2D1B69] via-[#4A2FA0] to-[#6B4EFF] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">2FLY Digital Marketing</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">Ardan Med Spa<br/>Performance Report</h1>
          <p className="text-white/70 text-lg mb-12">11-Month Marketing Performance Summary · July 2024 – May 2025</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "50%+", label: "Email Open Rate", sub: "Industry avg: 20–25%" },
              { stat: "+175,200%", label: "Facebook Link Clicks", sub: "Growth from near zero" },
              { stat: "$6,227", label: "Total Ad Investment", sub: "Avg $593/month" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-[#C9A84C] mb-1">{item.stat}</div>
                <div className="text-white font-semibold mb-1">{item.label}</div>
                <div className="text-white/60 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3">Executive Summary</h2>
          <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Over 11 months, 2FLY Digital Marketing delivered consistent, measurable growth across all channels for Ardan Med Spa — with email performance nearly 3x the industry average and social media engagement growing from near-zero to hundreds of monthly interactions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "📧", stat: "50%+", label: "Email Open Rate" },
              { icon: "📈", stat: "+175,200%", label: "Link Click Growth" },
              { icon: "✅", stat: "11/11", label: "Email Blasts Delivered" },
              { icon: "🌐", stat: "100%", label: "Website Uptime" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-2xl font-bold text-[#6B4EFF] mb-1">{item.stat}</div>
                <div className="text-sm text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVERTISING INVESTMENT */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3">Advertising Investment</h2>
          <p className="text-gray-600 mb-8">Total investment of <strong>$6,227</strong> across targeted Facebook & Instagram campaigns over 8 months.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#6B4EFF] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Date</th>
                  <th className="text-left px-6 py-4 font-semibold">Campaign</th>
                  <th className="text-right px-6 py-4 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["July 2024", "Summer Promotion", "$618"],
                  ["August 2024", "Summer Promotion", "$1,000"],
                  ["September 2024", "Fall Campaign", "$1,000"],
                  ["October 2024", "Fall Campaign", "$1,011"],
                  ["November 2024", "Holiday Campaign", "$500"],
                  ["December 2024", "Holiday Campaign", "$598"],
                  ["January 2025", "New Year Campaign", "$500"],
                  ["March 2025", "Spring Campaign", "$1,000"],
                ].map(([date, campaign, amount], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 text-gray-700">{date}</td>
                    <td className="px-6 py-4 text-gray-700">{campaign}</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#1A1A1A]">{amount}</td>
                  </tr>
                ))}
                <tr className="bg-[#6B4EFF]/5 border-t-2 border-[#6B4EFF]/20">
                  <td className="px-6 py-4 font-bold text-[#1A1A1A]">Total</td>
                  <td className="px-6 py-4 text-gray-500 text-xs">Avg $593/month</td>
                  <td className="px-6 py-4 text-right font-bold text-[#6B4EFF] text-lg">$6,227</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PERFORMANCE METRICS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3">Performance Metrics</h2>
          <p className="text-gray-600 mb-10">Results across all marketing channels for the reporting period.</p>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-bold text-[#1A1A1A]">Social Media</h3>
                  <p className="text-xs text-gray-400">Facebook & Instagram</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  ["93", "Total Interactions", "+520%"],
                  ["1,800", "Link Clicks", "+175,200%"],
                  ["1,300", "Page Visits", "+175%"],
                  ["8,700", "People Reached", ""],
                ].map(([num, label, growth], i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div>
                      <span className="font-bold text-[#6B4EFF]">{num}</span>
                      <span className="text-xs text-gray-500 ml-2">{label}</span>
                    </div>
                    {growth && <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{growth}</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">📧</span>
                <div>
                  <h3 className="font-bold text-[#1A1A1A]">Email Marketing</h3>
                  <p className="text-xs text-gray-400">Monthly newsletters</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  ["50%+", "Open Rate", "Industry: 20-25%"],
                  ["11/11", "Months Delivered", "100% consistency"],
                  ["600+", "Subscribers", "Active list"],
                  ["100%", "Delivery Rate", "Zero bounced"],
                ].map(([num, label, sub], i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div>
                      <span className="font-bold text-[#6B4EFF]">{num}</span>
                      <span className="text-xs text-gray-500 ml-2">{label}</span>
                    </div>
                    <span className="text-xs text-gray-400">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🌐</span>
                <div>
                  <h3 className="font-bold text-[#1A1A1A]">Website & Ops</h3>
                  <p className="text-xs text-gray-400">Infrastructure & security</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  ["100%", "Uptime", "All 11 months"],
                  ["2", "Websites Built", "Ardan + Revival 22"],
                  ["✓", "SSL Security", "Always active"],
                  ["✓", "Mobile Optimized", "All devices"],
                ].map(([num, label, sub], i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div>
                      <span className="font-bold text-[#6B4EFF]">{num}</span>
                      <span className="text-xs text-gray-500 ml-2">{label}</span>
                    </div>
                    <span className="text-xs text-gray-400">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STRATEGIC VALUE */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3">Strategic Value Delivered</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">Beyond the advertising investment, 2FLY delivered extensive strategic and creative work at no additional cost:</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "💻", title: "Website Development", desc: "Two complete websites built from scratch — Ardan Med Spa and the Revival 22 rebrand. Both fully custom, mobile-optimized, and professionally designed.", value: "Est. value: $8,000+" },
              { icon: "🎨", title: "Brand & Creative", desc: "Complete brand guide, brochures, social media templates, and creative assets for both brands. Consistent visual identity across all channels.", value: "Est. value: $3,000+" },
              { icon: "💡", title: "Strategic Consulting", desc: "Weekly strategy meetings, membership program development, sales strategy planning, and ongoing growth consulting throughout the engagement.", value: "Est. value: $4,000+" },
              { icon: "⚙️", title: "Ongoing Operations", desc: "Monthly content creation, social media management, ad campaign optimization, and website maintenance — delivered consistently every month.", value: "Est. value: $2,400+/year" },
            ].map((item, i) => (
              <div key={i} className="bg-[#FAFAF8] rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                <span className="text-xs font-semibold text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-white py-8 px-6 text-center">
        <p className="text-sm text-gray-400">2FLY Digital Marketing · Prepared for Ardan Med Spa · Confidential</p>
        <p className="text-xs text-gray-600 mt-2">Reporting period: July 2024 – May 2025</p>
      </footer>

    </div>
  );
}

export default function Home() {
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    setAuthed(localStorage.getItem(AUTH_KEY) === "true");
  }, []);

  if (authed === null) return null;
  if (!authed) return <PasswordGate onAuth={() => setAuthed(true)} />;
  return <Report />;
}
