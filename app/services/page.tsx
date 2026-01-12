"use client";

import Image from "next/image";
import { Clock, Video, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import ContactSection from "@/components/ContactSection";

const CARDS_DATA = [
    {
        id: 1,
        title: "BAZI BLUEPRINT (LIVE ON ZOOM)",
        subtitle: "Jadwal sesi konsultasi yang fleksibel, bisa online/offline saat ini tersedia",
        description: "Memahami Profil Diri & Anda secara menyeluruh, mulai dari karir, keuangan, hubungan, kesehatan, bisnis, baik nasib serta strategi arah kesuksesan dan Jack Area, agar anda juga bisa bertanya apapun langsung dengan Saya",
        price: "1.000.000",
        duration: "1 Hour",
        buttonText: "Book consultation"
    },
    {
        id: 2,
        title: "FENGSHUI AUDIT (LIVE ON ZOOM)",
        subtitle: "Waktu audit memang detail, posisi titik, opsi renovasi rumah",
        description: "Mengetahui apa sisi positif dan negatif dari properti Anda. Mengetahui bagian mana di properti Anda yang membawa hal negatif dan positif. Dan Anda bisa bertanya apapun langsung dengan Saya.",
        price: "2.000.000",
        duration: "1 Hour",
        buttonText: "Book consultation"
    },
    {
        id: 3,
        title: "BUSINESS & CAREER (Video)",
        subtitle: "Video recording will be sent via email",
        description: "Pencarian akan melihat bisnis apa yang paling cocok untuk Anda, mana yang paling mudah dan paling cepat untuk menghasilkan uang",
        price: "500.000",
        duration: "1 Hour",
        buttonText: "Order Video"
    }
];

export default function ServicesPage() {
    const [cards, setCards] = useState(CARDS_DATA);

    const handlePrev = () => {
        setCards((prev) => {
            const newCards = [...prev];
            const last = newCards.pop();
            if (last) newCards.unshift(last);
            return newCards;
        });
    };

    const handleNext = () => {
        setCards((prev) => {
            const newCards = [...prev];
            const first = newCards.shift();
            if (first) newCards.push(first);
            return newCards;
        });
    };

    return (
        <main className="bg-white text-black">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-serif mb-4">Our Services</h1>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Imperial Feng Shui & Bazi Services to Optimize Your Personal, Home, and Business Luck.
                </p>
                <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-800">
                    Anggara Treasures menyediakan layanan konsultasi Imperial Feng Shui dan
                    Imperial Bazi yang dirancang untuk membantu individu maupun bisnis
                    menyelaraskan kehidupan, hunian, dan lingkungan kerja demi tercapainya
                    keseimbangan, kejelasan arah, serta kesuksesan yang berkelanjutan.
                    Setiap layanan bersifat personal, praktis, dan berlandaskan garis keturunan asli
                    Imperial Feng Shui.
                </p>
            </section>

            {/* Personal Feng Shui & Bazi Reading Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-[#A52A2A] font-bold">Personal</span>
                            <span className="text-gray-400">Home</span>
                            <span className="text-gray-400">Office & Business</span>
                            <div className="h-px bg-gray-300 flex-grow ml-4"></div>
                        </div>

                        <h2 className="text-3xl font-bold mb-6">Personal Feng Shui & Bazi Reading</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Panduan untuk Kehidupan, Karier, dan Keberuntungan Finansial
                            Layanan ini berfokus pada analisis personal berdasarkan Imperial Bazi
                            untuk memahami peta kehidupan, siklus keberuntungan, serta kapasitas rezeki setiap individu.
                        </p>

                        <ul className="space-y-2 text-[#A52A2A] mb-8">
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-[#A52A2A] rounded-full flex-shrink-0"></span>
                                <span>Analisis keberuntungan pribadi dan siklus kehidupan</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-[#A52A2A] rounded-full flex-shrink-0"></span>
                                <span>Insight arah karier, keuangan, dan pengembangan diri</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-[#A52A2A] rounded-full flex-shrink-0"></span>
                                <span>Identifikasi potensi, kekuatan, dan tantangan pribadi</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-[#A52A2A] rounded-full flex-shrink-0"></span>
                                <span>Rekomendasi praktis yang disesuaikan dengan kondisi individu</span>
                            </li>
                        </ul>

                        <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:gap-4 transition-all">
                            next services <span className="text-xl">→</span>
                        </button>
                    </div>

                    {/* Images Collage */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Top Left Image - Terracotta Warrior */}
                            <div className="relative h-64 w-full rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden shadow-lg transform translate-y-8">
                                <Image
                                    src="/assets/service-1.png"
                                    alt="Terracotta Warrior"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Top Right Image - Business Handshake */}
                            <div className="relative h-64 w-full rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden shadow-lg">
                                <Image
                                    src="/assets/service-2.png"
                                    alt="Business Consultation"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom Left Image - Interior */}
                            <div className="relative h-64 w-full rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden shadow-lg transform translate-y-8">
                                <Image
                                    src="/assets/service-3.png"
                                    alt="Interior Design"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom Right - Castle Sketch Background */}
                            <div className="relative h-64 w-full flex items-center justify-center">
                                <Image
                                    src="/assets/castle.svg"
                                    alt="Castle Sketch"
                                    fill
                                    className="object-contain opacity-50"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Online Session Offering Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Online session offering</h2>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                        Berbasis garis keturunan asli Imperial Feng Shui, Pendekatan personal, bukan solusi massal,
                        Rekomendasi yang praktis dan aplikatif, Fokus pada keseimbangan, kejelasan, dan keberlanjutan
                    </p>

                    <div className="relative bg-[#3D0C0C] rounded-[3rem] p-12 overflow-hidden min-h-[600px] flex items-center">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                            <div className="relative w-full h-full opacity-40">
                                <Image
                                    src="/assets/red-castle.png"
                                    alt="Background Pattern"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-transform"
                        >
                            <Image
                                src="/assets/Polygon.svg"
                                alt="Previous"
                                width={40}
                                height={40}
                                className="w-4 h-4 md:w-6 md:h-6"
                            />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-transform"
                        >
                            <Image
                                src="/assets/Polygon.svg"
                                alt="Next"
                                width={40}
                                height={40}
                                className="w-4 h-4 md:w-6 md:h-6 rotate-180"
                            />
                        </button>

                        <div className="grid md:grid-cols-3 gap-6 relative z-10 w-full">
                            {cards.map((card, index) => (
                                <div
                                    key={card.id}
                                    className={`backdrop-blur-sm rounded-2xl p-5 border border-white/20 text-white transition-all duration-500 ease-in-out
                                        ${index === 1 ? 'scale-105 shadow-2xl bg-white/10 z-10' : 'scale-95 opacity-80 bg-transparent'}
                                    `}
                                >
                                    <h3 className="text-lg font-bold mb-1 uppercase tracking-wider">{card.title}</h3>
                                    <p className="text-[10px] text-gray-300 mb-3">{card.subtitle}</p>
                                    <p className="text-xs text-gray-200 mb-4 leading-relaxed line-clamp-4">
                                        {card.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-xs mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-white/60">Rp INVEST</span>
                                            <span className="font-semibold">{card.price}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3 h-3 text-white/60" />
                                            <span>{card.duration}</span>
                                        </div>
                                    </div>

                                    <button className="text-[#D4AF37] text-xs font-medium hover:underline uppercase tracking-wide">
                                        {card.buttonText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
