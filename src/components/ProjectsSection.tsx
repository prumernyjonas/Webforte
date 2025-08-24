import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="py-32 relative overflow-hidden curved-section">
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <div className="rotate-badge inline-block px-4 py-2 bg-accent text-primary rounded-full mb-4 font-medium transition-all duration-300 cursor-pointer">
            Naše práce
          </div>
          <h2 className="text-display-lg mb-6 transition-colors duration-300">
            Případové studie <span className="gradient-text">automatizace</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
            Podívejte se na projekty, kde jsme pomocí automatizace a moderních
            technologií pomohli našim klientům dosáhnout výjimečných výsledků a
            získat konkurenční výhodu.
          </p>
        </div>

        {/* První projekt - E-commerce automatizace */}
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-5 order-2 md:order-1 flex items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-200 text-blue-700 text-xs px-4 py-2 rounded-full inline-block font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-blue-100 hover:to-indigo-200 cursor-pointer">
                🛒 E-commerce automatizace
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-primary transition-colors duration-300 cursor-pointer">
                FashionStore.cz
              </h3>
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                Komplexní automatizace e-shopu s prediktivní analýzou zásob,
                automatickými marketingovými kampaněmi a optimalizací konverzí.
              </p>

              {/* Klíčové výsledky */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-green-100 hover:to-emerald-200 cursor-pointer">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    +28%
                  </div>
                  <div className="text-xs text-green-700 font-medium">
                    Konverze
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-xl border border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-blue-100 hover:to-indigo-200 cursor-pointer">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    -32%
                  </div>
                  <div className="text-xs text-blue-700 font-medium">
                    Zásoby
                  </div>
                </div>
              </div>

              {/* Technologie */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  Automatizace
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  AI Analytics
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  Marketing
                </span>
              </div>

              <Link
                href="/pripadove-studie"
                className="group inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors underline-offset-2 hover:underline duration-300"
              >
                Prohlédnout celou případovou studii
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-2 hover:shadow-2xl transition-all duration-500">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/projects/ai_analytics.webp"
                    alt="FashionStore.cz Dashboard"
                    width={700}
                    height={500}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Success Metric */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[280px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <div className="flex items-center mb-3">
                  <Image
                    src="/clients/ecommerce-avatar.webp"
                    alt="Klient avatar"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-800">
                      Jana Svobodová
                    </div>
                    <div className="text-xs text-gray-500">
                      CEO, FashionStore.cz
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-3">
                    &ldquo;Automatizace s WebForte nám umožnila předvídat
                    poptávku s 94% přesností. To změnilo celý náš business model
                    a vedlo k úsporám €2.4M ročně.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Druhý projekt - Průmyslová automatizace */}
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-7 order-1">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100 p-2 hover:shadow-2xl transition-all duration-500">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/projects/automation_factory.webp"
                    alt="Automatizovaná výroba"
                    width={700}
                    height={500}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[280px] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Image
                    src="/clients/manufacturing-avatar.webp"
                    alt="Klient avatar"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-800">Petr Dvořák</div>
                    <div className="text-xs text-gray-500">COO, MechTech</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    &ldquo;Automatizace našich výrobních procesů s WebForte
                    vedla k výraznému zlepšení efektivity a kvality. Můžeme nyní
                    lépe plánovat a reagovat na změny.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 order-2 flex items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 text-green-700 text-xs px-4 py-2 rounded-full inline-block font-medium hover:scale-105 hover:shadow-lg hover:from-green-100 hover:to-emerald-200 transition-all duration-300 cursor-pointer">
                🏭 Průmyslová automatizace
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-primary transition-colors duration-300 cursor-pointer">
                Smart Factory
              </h3>
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                Komplexní řešení pro automatizaci výrobních procesů s IoT
                senzory, prediktivní údržbou a inteligentním plánováním výroby.
              </p>

              {/* Klíčové výsledky */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-xl border border-green-200 hover:scale-105 hover:shadow-lg hover:from-green-100 hover:to-emerald-200 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    -35%
                  </div>
                  <div className="text-xs text-green-700 font-medium">
                    Náklady
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-xl border border-blue-200 hover:scale-105 hover:shadow-lg hover:from-blue-100 hover:to-indigo-200 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    +42%
                  </div>
                  <div className="text-xs text-blue-700 font-medium">
                    Produktivita
                  </div>
                </div>
              </div>

              {/* Technologie */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  IoT senzory
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  Prediktivní údržba
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  Automatizace
                </span>
              </div>

              <Link
                href="/automatizace"
                className="group inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors underline-offset-2 hover:underline duration-300"
              >
                Prohlédnout celou případovou studii
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Třetí projekt - Marketingová automatizace */}
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-5 order-2 md:order-1 flex items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-violet-100 border border-purple-200 text-purple-700 text-xs px-4 py-2 rounded-full inline-block font-medium hover:scale-105 hover:shadow-lg hover:from-purple-100 hover:to-violet-200 transition-all duration-300 cursor-pointer">
                📊 Marketingová automatizace
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-primary transition-colors duration-300 cursor-pointer">
                FinBank Marketing
              </h3>
              <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                Pokročilá marketingová automatizace pro bankovní instituci s
                personalizovanými kampaněmi, automatickými segmentacemi a
                optimalizací konverzí v reálném čase.
              </p>

              {/* Klíčové výsledky */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-4 rounded-xl border border-purple-200 hover:scale-105 hover:shadow-lg hover:from-purple-100 hover:to-violet-200 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    78%
                  </div>
                  <div className="text-xs text-purple-700 font-medium">
                    Automatizováno
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-xl border border-green-200 hover:scale-105 hover:shadow-lg hover:from-green-100 hover:to-emerald-200 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    +156%
                  </div>
                  <div className="text-xs text-green-700 font-medium">ROI</div>
                </div>
              </div>

              {/* Technologie */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  AI Marketing
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  Personalizace
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                  Analytics
                </span>
              </div>

              <Link
                href="/sluzby"
                className="group inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors underline-offset-2 hover:underline duration-300"
              >
                Prohlédnout celou případovou studii
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-50 to-violet-100 p-2 hover:shadow-2xl transition-all duration-500">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/projects/chatbot_support.webp"
                    alt="Marketingová automatizace"
                    width={700}
                    height={500}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[280px] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="flex items-center mb-3">
                  <Image
                    src="/clients/finance-avatar.webp"
                    alt="Klient avatar"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-800">
                      Martina Svobodová
                    </div>
                    <div className="text-xs text-gray-500">CMO, FinBank</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-3 rounded-lg border border-purple-200">
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    &ldquo;Marketingová automatizace zásadně změnila způsob,
                    jakým komunikujeme s našimi zákazníky. Personalizace a
                    automatické kampaně překonaly naše očekávání.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA sekce */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-3xl border border-primary/10 transition-all duration-500 cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 transition-colors duration-300">
              Chcete podobné výsledky?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Pojďme společně automatizovat vaše procesy a dosáhnout výjimečných
              výsledků. Začneme bezplatnou konzultací.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/konzultace"
                className="btn-primary btn-smart-feedback inline-flex items-center gap-2 group whitespace-nowrap hover:-translate-y-0.3 transition-transform duration-300"
              >
                🚀 Bezplatná konzultace
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/pripadove-studie"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                📚 <span className="font-bold">Všechny případové studie</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
