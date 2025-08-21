import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Section from "@/components/Section";

export const metadata = {
  title: "AI řešení - WebForte AI",
  description:
    "Pokročilá řešení umělé inteligence pro váš business. Chatboti, prediktivní analýza, computer vision a další AI technologie.",
};

export default function AIReseniPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundBlobs />
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                <span className="text-primary">AI řešení</span> pro budoucnost
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Využijte sílu umělé inteligence k transformaci vašeho businessu.
                Implementujeme cutting-edge AI technologie, které vám poskytnou
                konkurenční výhodu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Konzultace AI strategie
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                  Demo AI řešení
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* AI Technologies */}
        <Section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">AI technologie</span> které
                ovládáme
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specializujeme se na nejmodernější AI technologie a frameworky
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Machine Learning */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
                <p className="text-muted-foreground mb-4">
                  Prediktivní modely a algoritmy pro analýzu dat a automatické
                  rozhodování.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Supervised & Unsupervised Learning</li>
                  <li>• Prediktivní analýza</li>
                  <li>• Klasifikace a regrese</li>
                  <li>• Clustering a segmentace</li>
                </ul>
              </div>

              {/* Natural Language Processing */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Natural Language Processing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Zpracování a porozumění lidskému jazyku pro inteligentní
                  komunikaci.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Chatboti a virtuální asistenti</li>
                  <li>• Sentiment analýza</li>
                  <li>• Automatický překlad</li>
                  <li>• Extrakce informací z textu</li>
                </ul>
              </div>

              {/* Computer Vision */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Computer Vision</h3>
                <p className="text-muted-foreground mb-4">
                  Analýza a interpretace vizuálních dat pro automatické
                  rozpoznávání objektů.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Rozpoznávání objektů</li>
                  <li>• Analýza dokumentů</li>
                  <li>• Kvalitní kontrola</li>
                  <li>• Biometrické systémy</li>
                </ul>
              </div>

              {/* Deep Learning */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Deep Learning</h3>
                <p className="text-muted-foreground mb-4">
                  Pokročilé neuronové sítě pro složité úlohy rozpoznávání vzorů.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Konvoluční neuronové sítě</li>
                  <li>• Rekurentní neuronové sítě</li>
                  <li>• Generativní modely</li>
                  <li>• Transfer learning</li>
                </ul>
              </div>

              {/* Reinforcement Learning */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Reinforcement Learning
                </h3>
                <p className="text-muted-foreground mb-4">
                  Učení se prostřednictvím interakce s prostředím pro optimální
                  rozhodování.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Optimalizace procesů</li>
                  <li>• Autonomní systémy</li>
                  <li>• Doporučovací systémy</li>
                  <li>• Strategické plánování</li>
                </ul>
              </div>

              {/* Large Language Models */}
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
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
                <h3 className="text-xl font-semibold mb-4">
                  Large Language Models
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implementace a fine-tuning velkých jazykových modelů pro
                  specifické úlohy.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• GPT a BERT modely</li>
                  <li>• Custom fine-tuning</li>
                  <li>• RAG systémy</li>
                  <li>• Multimodální AI</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* AI Solutions */}
        <Section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Konkrétní <span className="text-primary">AI řešení</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Praktické aplikace AI technologií pro váš business
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Intelligent Chatbots */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  Inteligentní chatboti
                </h3>
                <p className="text-muted-foreground mb-6">
                  AI-powered chatboti, kteří rozumí kontextu a poskytují
                  personalizované odpovědi 24/7.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Zákaznická podpora</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatická odpověď na časté dotazy a eskalace složitých
                        případů
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Prodejní asistent</h4>
                      <p className="text-sm text-muted-foreground">
                        Doporučování produktů a vedení zákazníků nákupním
                        procesem
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Interní asistent</h4>
                      <p className="text-sm text-muted-foreground">
                        Pomoc zaměstnancům s firemními procesy a informacemi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Predictive Analytics */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  Prediktivní analýza
                </h3>
                <p className="text-muted-foreground mb-6">
                  Využití historických dat k předpovídání budoucích trendů a
                  optimalizaci rozhodování.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Predikce poptávky</h4>
                      <p className="text-sm text-muted-foreground">
                        Optimalizace zásob a plánování výroby
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Churn analýza</h4>
                      <p className="text-sm text-muted-foreground">
                        Identifikace zákazníků s rizikem odchodu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Cenová optimalizace</h4>
                      <p className="text-sm text-muted-foreground">
                        Dynamické stanovování cen na základě trhu
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Intelligence */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  Inteligentní zpracování dokumentů
                </h3>
                <p className="text-muted-foreground mb-6">
                  Automatická extrakce a analýza informací z dokumentů pomocí
                  OCR a NLP.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Zpracování faktur</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatická extrakce dat z faktur a účtenek
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Analýza smluv</h4>
                      <p className="text-sm text-muted-foreground">
                        Identifikace klíčových podmínek a rizik
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Klasifikace dokumentů</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatické třídění a archivace
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendation Systems */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  Doporučovací systémy
                </h3>
                <p className="text-muted-foreground mb-6">
                  Personalizované doporučování produktů a obsahu na základě
                  chování uživatelů.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">E-commerce doporučení</h4>
                      <p className="text-sm text-muted-foreground">
                        Zvýšení konverzí a průměrné hodnoty objednávky
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Obsahové doporučení</h4>
                      <p className="text-sm text-muted-foreground">
                        Personalizace obsahu pro lepší engagement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">Cross-selling</h4>
                      <p className="text-sm text-muted-foreground">
                        Inteligentní nabídky doplňkových produktů
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Implementation Process */}
        <Section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proces <span className="text-primary">implementace</span> AI
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Systematický přístup k úspěšné implementaci AI řešení
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Audit</h3>
                <p className="text-muted-foreground text-sm">
                  Analýza vašich dat a identifikace AI příležitostí
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Proof of Concept</h3>
                <p className="text-muted-foreground text-sm">
                  Vytvoření prototypu pro ověření feasibility
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Model Development
                </h3>
                <p className="text-muted-foreground text-sm">
                  Trénování a optimalizace AI modelů
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Deployment</h3>
                <p className="text-muted-foreground text-sm">
                  Nasazení do produkce s monitoringem
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* ROI Section */}
        <Section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">ROI</span> AI investic
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Měřitelné výsledky našich AI implementací
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <p className="text-muted-foreground">
                  průměrný ROI za první rok
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <p className="text-muted-foreground">snížení času zpracování</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">přesnost AI modelů</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <p className="text-muted-foreground">zvýšení produktivity</p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Připraveni na{" "}
                <span className="text-primary">AI transformaci</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Začněte s bezplatnou AI konzultací a zjistěte, jak může umělá
                inteligence revolucionalizovat váš business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Bezplatná AI konzultace
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                  Stáhnout AI whitepaper
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
