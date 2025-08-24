"use client";
import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Kolik stojí implementace AI řešení?",
    answer:
      "Cena závisí na složitosti projektu a vašich potřebách. Začínáme od 50 000 Kč za základní automatizaci. Pro přesnou kalkulaci doporučujeme bezplatnou konzultaci, kde společně vyhodnotíme vaše požadavky a navrhneme optimální řešení.",
    category: "Ceny a rozpočet",
  },
  {
    id: 2,
    question: "Jak dlouho trvá implementace AI řešení?",
    answer:
      "Čas implementace se liší podle projektu. Jednoduché automatizace trvají 2-4 týdny, komplexní AI systémy 2-6 měsíců. Vždy pracujeme v iteracích, takže první výsledky uvidíte už během vývoje.",
    category: "Časový harmonogram",
  },
  {
    id: 3,
    question: "Můžete integrovat AI s našimi stávajícími systémy?",
    answer:
      "Ano, naše řešení jsou navržena pro snadnou integraci s existujícími systémy. Podporujeme všechny běžné platformy a formáty dat. Před implementací provedeme audit vašich stávajících technologií.",
    category: "Technická implementace",
  },
  {
    id: 4,
    question: "Poskytujete školení a podporu po implementaci?",
    answer:
      "Ano, součástí každého projektu je školení vašeho týmu a 3 měsíce bezplatné podpory. Navíc nabízíme dlouhodobé smlouvy na údržbu a rozvoj systémů.",
    category: "Podpora a školení",
  },
  {
    id: 5,
    question: "Jaká je návratnost investice do AI řešení?",
    answer:
      "Naši klienti vidí ROI obvykle za 6-18 měsíců. Konkrétní úspory závisí na typu implementace - automatizace procesů šetří 20-40% času, prediktivní analýza může zvýšit zisky o 15-30%.",
    category: "ROI a výsledky",
  },
  {
    id: 6,
    question: "Jsou vaše AI řešení bezpečná a GDPR kompatibilní?",
    answer:
      "Absolutně. Všechna naše řešení splňují nejvyšší bezpečnostní standardy a jsou plně GDPR kompatibilní. Data zůstávají ve vašem prostředí a používáme end-to-end šifrování.",
    category: "Bezpečnost a compliance",
  },
];

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Všechny");

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    "Všechny",
    ...Array.from(new Set(faqData.map((item) => item.category))),
  ];

  const filteredFaq =
    activeCategory === "Všechny"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 md:py-28 relative overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_50%,rgba(99,102,241,0.05)_0%,rgba(99,102,241,0.02)_40%,rgba(99,102,241,0)_100%)]" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="rotate-badge bg-accent text-primary px-4 py-2 rounded-full inline-block font-medium mb-4 cursor-pointer">
            Často kladené dotazy
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Máte otázky?{" "}
            <span className="gradient-text">Tady jsou odpovědi!</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Odpovídáme na nejčastější dotazy o našich AI řešeních, automatizaci
            a procesu spolupráce.
          </p>
        </div>

        {/* Kategorie filtr - méně nápadný, menší, decentní */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-full text-sm font-normal transition-all duration-200 border cursor-pointer ${
                activeCategory === category
                  ? "bg-primary/10 text-primary border-primary"
                  : "bg-transparent text-gray-500 border-gray-200 hover:bg-gray-100"
              }`}
              style={{
                boxShadow: "none",
                outline: "none",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {filteredFaq.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)]"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <div
                    className={`w-6 h-6 transition-transform duration-200 ${
                      openItems.includes(item.id) ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(item.id)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Další sekce s pomocí */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Potřebujete další informace?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nenašli jste odpověď na svou otázku? Kontaktujte nás a náš tým
              odborníků vám rád pomůže s konkrétním řešením pro vaše podnikání.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="btn-primary group inline-flex items-center gap-2"
              >
                Kontaktovat nás
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </Link>

              <Link
                href="/konzultace"
                className="btn-outline group inline-flex items-center gap-2"
              >
                Bezplatná konzultace
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
