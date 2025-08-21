import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Section from "@/components/Section";

export const metadata = {
  title: "Automatizace procesů - WebForte AI",
  description:
    "Specializujeme se na automatizaci obchodních procesů pomocí RPA, workflow automatizace a integrace systémů pro maximální efektivitu.",
};

export default function AutomatizacePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundBlobs />
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="pt-16 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                <span className="text-primary">Automatizace</span> procesů
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transformujeme vaše obchodní procesy pomocí pokročilé
                automatizace. Ušetříme vám čas, snížíme náklady a eliminujeme
                lidské chyby.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Analýza procesů zdarma
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                  Zobrazit případové studie
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Benefits Section */}
        <Section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proč <span className="text-primary">automatizovat</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Automatizace přináší měřitelné výhody pro váš business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-500 mb-2">80%</h3>
                <p className="text-muted-foreground">
                  snížení nákladů na rutinní úkoly
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-500 mb-2">10x</h3>
                <p className="text-muted-foreground">
                  rychlejší zpracování úkolů
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-500 mb-2">99%</h3>
                <p className="text-muted-foreground">
                  přesnost bez lidských chyb
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-orange-500 mb-2">
                  24/7
                </h3>
                <p className="text-muted-foreground">nepřetržitý provoz</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Automation Types */}
        <Section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Typy <span className="text-primary">automatizace</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nabízíme komplexní spektrum automatizačních řešení
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* RPA */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      RPA (Robotic Process Automation)
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Softwaroví roboti, kteří napodobují lidské akce v
                      digitálních systémech a automatizují repetitivní úkoly.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Zpracování faktur a objednávek</li>
                      <li>• Přenos dat mezi systémy</li>
                      <li>• Generování reportů</li>
                      <li>• Správa emailů a komunikace</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Workflow Automation */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Workflow automatizace
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Automatizace celých obchodních procesů s podmíněnými
                      pravidly a schvalovacími workflow.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Schvalovací procesy</li>
                      <li>• Onboarding zaměstnanců</li>
                      <li>• Správa projektů</li>
                      <li>• Zákaznické procesy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* System Integration */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Integrace systémů
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Propojení různých softwarových systémů pro bezproblémový
                      tok dat a informací.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• API integrace</li>
                      <li>• Synchronizace databází</li>
                      <li>• Real-time data exchange</li>
                      <li>• Legacy system modernization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AI-Powered Automation */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      AI-powered automatizace
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Inteligentní automatizace využívající umělou inteligenci
                      pro složitější rozhodovací procesy.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Inteligentní klasifikace dokumentů</li>
                      <li>• Prediktivní automatizace</li>
                      <li>• Chatboti a virtuální asistenti</li>
                      <li>• Automatické rozhodování</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Process Section */}
        <Section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jak <span className="text-primary">postupujeme</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Náš systematický přístup k implementaci automatizace
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Audit procesů</h3>
                <p className="text-muted-foreground text-sm">
                  Analyzujeme vaše současné procesy a identifikujeme
                  příležitosti
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Návrh řešení</h3>
                <p className="text-muted-foreground text-sm">
                  Vytvoříme detailní plán automatizace s ROI kalkulací
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pilot projekt</h3>
                <p className="text-muted-foreground text-sm">
                  Implementujeme malý pilot pro ověření funkčnosti
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Škálování</h3>
                <p className="text-muted-foreground text-sm">
                  Rozšíříme automatizaci na další procesy a oddělení
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Optimalizace</h3>
                <p className="text-muted-foreground text-sm">
                  Kontinuálně monitorujeme a vylepšujeme výkonnost
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Industries Section */}
        <Section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">Odvětví</span> která
                automatizujeme
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Máme zkušenosti s automatizací v různých oborech
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="font-semibold mb-2">Finanční služby</h3>
                <p className="text-sm text-muted-foreground">
                  Zpracování úvěrů, compliance, reporting
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="font-semibold mb-2">Zdravotnictví</h3>
                <p className="text-sm text-muted-foreground">
                  Správa pacientů, fakturace, dokumentace
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="font-semibold mb-2">E-commerce</h3>
                <p className="text-sm text-muted-foreground">
                  Správa objednávek, inventory, customer service
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="font-semibold mb-2">Výroba</h3>
                <p className="text-sm text-muted-foreground">
                  Supply chain, kvalita, maintenance
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="font-semibold mb-2">HR a personalistika</h3>
                <p className="text-sm text-muted-foreground">
                  Nábor, onboarding, payroll
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <h3 className="font-semibold mb-2">Logistika</h3>
                <p className="text-sm text-muted-foreground">
                  Tracking, routing, dokumentace
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Připraveni <span className="text-primary">automatizovat</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Začněte s bezplatnou analýzou vašich procesů a zjistěte, kolik
                času a peněz můžete ušetřit automatizací.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Začít automatizaci
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                  Konzultace zdarma
                </button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
