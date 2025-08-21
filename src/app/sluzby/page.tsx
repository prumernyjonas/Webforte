import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Naše služby | WebForte AI",
  description:
    "Kompletní přehled našich služeb v oblasti automatizace, umělé inteligence a digitální transformace pro váš business.",
};

export default function SluzbyPage() {
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
                Naše <span className="text-primary">služby</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Poskytujeme komplexní řešení v oblasti automatizace, umělé
                inteligence a digitální transformace, která posunou váš business
                na novou úroveň.
              </p>
            </div>
          </div>
        </Section>

        {/* Services Grid */}
        <Section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Solutions */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary"
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
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  AI řešení
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implementace pokročilých AI systémů pro automatizaci procesů,
                  analýzu dat a zlepšení rozhodování.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Chatboti a virtuální asistenti</li>
                  <li>• Prediktivní analýza</li>
                  <li>• Computer Vision</li>
                  <li>• Natural Language Processing</li>
                </ul>
              </div>

              {/* Automation */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Automatizace procesů
                </h3>
                <p className="text-muted-foreground mb-4">
                  Optimalizace a automatizace obchodních procesů pro zvýšení
                  efektivity a snížení nákladů.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• RPA (Robotic Process Automation)</li>
                  <li>• Workflow automatizace</li>
                  <li>• Integrace systémů</li>
                  <li>• API vývoj</li>
                </ul>
              </div>

              {/* Web Development */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Webové aplikace
                </h3>
                <p className="text-muted-foreground mb-4">
                  Vývoj moderních webových aplikací s důrazem na uživatelský
                  zážitek a výkonnost.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• React/Next.js aplikace</li>
                  <li>• E-commerce řešení</li>
                  <li>• Progressive Web Apps</li>
                  <li>• Responzivní design</li>
                </ul>
              </div>

              {/* Data Analytics */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Analýza dat
                </h3>
                <p className="text-muted-foreground mb-4">
                  Transformace dat na cenné poznatky pro lepší obchodní
                  rozhodování a strategické plánování.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Business Intelligence</li>
                  <li>• Data Mining</li>
                  <li>• Dashboardy a reporty</li>
                  <li>• Prediktivní modelování</li>
                </ul>
              </div>

              {/* Consulting */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Konzultace
                </h3>
                <p className="text-muted-foreground mb-4">
                  Strategické poradenství v oblasti digitální transformace a
                  implementace nových technologií.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Digitální strategie</li>
                  <li>• Technologický audit</li>
                  <li>• Change management</li>
                  <li>• Školení týmů</li>
                </ul>
              </div>

              {/* Support */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
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
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Podpora a údržba
                </h3>
                <p className="text-muted-foreground mb-4">
                  Kontinuální podpora a údržba implementovaných řešení pro
                  zajištění jejich optimálního fungování.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 24/7 technická podpora</li>
                  <li>• Pravidelné aktualizace</li>
                  <li>• Monitoring systémů</li>
                  <li>• Optimalizace výkonu</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Process Section */}
        <Section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Náš <span className="text-primary">proces</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Postupujeme systematicky a transparentně, abychom dosáhli
                nejlepších výsledků
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Analýza
                </h3>
                <p className="text-muted-foreground">
                  Důkladně analyzujeme vaše potřeby a současné procesy
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Návrh
                </h3>
                <p className="text-muted-foreground">
                  Vytvoříme detailní návrh řešení přizpůsobený vašim požadavkům
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Implementace
                </h3>
                <p className="text-muted-foreground">
                  Realizujeme řešení s důrazem na kvalitu a termíny
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Podpora
                </h3>
                <p className="text-muted-foreground">
                  Poskytujeme kontinuální podporu a optimalizaci
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Připraveni začít váš{" "}
                <span className="text-primary">projekt</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Kontaktujte nás pro bezplatnou konzultaci a zjistěte, jak můžeme
                pomoci vašemu businessu růst.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Nezávazná konzultace
                </button>
                <button className="border-2 border-border hover:border-primary text-foreground hover:text-primary font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Zobrazit portfolio
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
