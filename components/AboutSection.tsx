import Image from "next/image";
import Link from "next/link";
import CloudOrnament from "./CloudOrnament";

const AboutSection = () => {
    return (
        <section className="relative bg-white py-20 overflow-hidden">
            {/* Cloud Ornaments */}
            <CloudOrnament
                width={200}
                height={200}
                className="top-20 left-10 w-32 h-32 md:w-[400px] md:h-[400px] sm:h-[100px] sm:w-[100px] md:left-20 md:top-20 -translate-x-1/4 -translate-y-1/4"
            />
            <CloudOrnament
                width={200}
                height={200}
                flipped
                className="top-20 right-10 w-32 h-32 md:w-[400px] md:h-[400px] sm:h-[100px] sm:w-[100px] md:right-20 md:top-20 translate-x-1/4 -translate-y-1/4"
            />

            <div className="container mx-auto px-8 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center mb-12 text-center">
                    <div className="relative w-full max-w-2xl h-40 mb-4">
                        <Image
                            src="/assets/welcome.svg"
                            alt="Welcome To Anggara Treasures"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Content Box with Corners */}
                <div className="relative max-w-4xl mx-auto p-12 md:p-16 text-center">
                    {/* Corner Decorations */}
                    {/* Top Left */}
                    <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24">
                        <Image src="/assets/corner.svg" alt="Corner Decoration" fill className="object-contain" />
                    </div>
                    <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 rotate-90">
                        <Image src="/assets/corner.svg" alt="Corner Decoration" fill className="object-contain" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 rotate-180">
                        <Image src="/assets/corner.svg" alt="Corner Decoration" fill className="object-contain" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 -rotate-90">
                        <Image src="/assets/corner.svg" alt="Corner Decoration" fill className="object-contain" />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                        <p>
                            Tahun Ular Kayu 2025 membawa energi pertumbuhan, transformasi, dan peluang besar.
                            Anggara Treasures membantu Anda meningkatkan keberuntungan dalam karier, bisnis, investasi, dan
                            kehidupan melalui Imperial Feng Shui dan Imperial Bazi Reading.
                        </p>
                        <p>
                            Dipimpin oleh Master Rezza—ahli yang mewarisi langsung ilmu Imperial Feng Shui Kaisar Qian Long—
                            kami menghadirkan metode feng shui aktif yang mampu membentuk dan mengarahkan nasib,
                            melalui harmoni Yin-Yang, Lima Elemen, serta pemanfaatan giok, gaharu, dan cendana.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-6 mt-10">
                        <Link href="/services" className="bg-[#800000] text-white px-8 py-3 rounded-md hover:bg-[#600000] transition-colors shadow-md">
                            Our Services
                        </Link>
                        <Link href="/articles" className="bg-[#800000] text-white px-8 py-3 rounded-md hover:bg-[#600000] transition-colors shadow-md">
                            Our Articles
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
