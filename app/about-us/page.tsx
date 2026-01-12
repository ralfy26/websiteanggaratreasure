import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import CloudOrnament from "@/components/CloudOrnament";

export default function AboutUs() {
    return (
        <main className="bg-white">
            {/* Background Ornament */}
            <CloudOrnament position="top-[600px] -right-20" flipped width={300} height={300} className="opacity-30" />
            <CloudOrnament position="-bottom-100 -left-20" width={300} height={300} className="opacity-30" />

            {/* Hero Section */}
            <section className="relative w-full">
                <div className="w-[80%] mx-auto">
                    <Image
                        src="/assets/about-us.png"
                        alt="Master Rezza"
                        width={2762}
                        height={1232}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-8 max-w-5xl text-justify text-gray-800 space-y-8 leading-relaxed">
                    <p>
                        Anggara Treasures adalah konsultan Imperial Feng Shui dan Imperial Bazi Reading terkemuka di Indonesia. Didirikan oleh Master Rezza, seorang Master Imperial Feng Shui yang memperoleh keahlian langsung dari pewaris asli Imperial Feng Shui Kaisar Qian Long (乾隆帝), Anggara Treasures hadir untuk membantu individu dan bisnis membentuk kehidupan yang lebih seimbang, beruntung, dan berkelanjutan.
                    </p>
                    <p>
                        Berbeda dengan classical feng shui yang bersifat pasif dan berfokus pada nasib tetap, Imperial Feng Shui memiliki pendekatan aktif yang mampu membentuk dan mengarahkan nasib seseorang. Dengan berlandaskan prinsip harmoni Yin dan Yang (阴 阳), keseimbangan Lima Elemen (五行), serta pemanfaatan energi alami seperti giok (翡翠), gaharu (沉香), dan cendana (檀香), Imperial Feng Shui mengoptimalkan aliran energi untuk mendukung kehidupan yang selaras dan penuh keberuntungan.
                    </p>
                    <p>
                        Anggara Treasures percaya bahwa setiap individu memiliki tingkat Personal Luck dan Wealth Capacity yang berbeda. Melalui pemahaman yang mendalam terhadap prinsip feng shui, kami membantu meningkatkan keberuntungan pribadi guna mendorong kesuksesan finansial, pertumbuhan berkelanjutan, dan kemakmuran jangka panjang.
                    </p>
                    <p>
                        Layanan Anggara Treasures mencakup Personal Feng Shui, Home Feng Shui, dan Office Feng Shui, yang dirancang untuk menciptakan lingkungan yang seimbang, harmonis, dan mendukung kesuksesan dalam setiap aspek kehidupan.
                    </p>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
