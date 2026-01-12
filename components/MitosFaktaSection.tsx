import Image from "next/image";

const MitosFaktaSection = () => {
    const items = [
        {
            myth: "Feng Shui itu Takhayul",
            fact: "Feng Shui bukan takhayul; ini ilmu energi lingkungan yang tidak bertentangan dengan agama."
        },
        {
            myth: "Hanya untuk Orang Kaya",
            fact: "Imperial Feng Shui dapat diterapkan oleh siapa saja tanpa biaya renovasi besar."
        },
        {
            myth: "Selalu Butuh Renovasi Besar",
            fact: "Hanya Classical Feng Shui yang membutuhkan renovasi. Imperial Feng Shui fokus pada penataan energi dan ruang tanpa bongkar bangunan."
        },
        {
            myth: "Hanya untuk Budaya Timur",
            fact: "Prinsip Feng Shui bersifat universal dan dapat diterapkan oleh siapa pun."
        }
    ];

    return (
        <section className="relative bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-8 relative z-10">
                <div className="flex items-center justify-center gap-4 mb-16 w-[80%] mx-auto">
                    <div className="h-[2px] flex-1 bg-linear-to-r from-transparent to-[#AE1919]"></div>
                    <h2 className="text-4xl md:text-6xl font-medium text-transparent bg-clip-text bg-linear-to-b from-[#AE1919] to-[#856118]/20 text-center tracking-wide shrink-0">
                        Mitos & Fakta
                    </h2>
                    <div className="h-[2px] flex-1 bg-linear-to-l from-transparent to-[#AE1919]"></div>
                </div>

                {/* Content List */}
                <div className="max-w-5xl mx-auto space-y-12">
                    {items.map((item, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
                            {/* Myth (Left) */}
                            <div className="text-center md:text-right">
                                <h3 className="text-[#A52A2A] font-bold text-xl md:text-2xl">
                                    {item.myth}
                                </h3>
                            </div>

                            {/* Fact (Right) */}
                            <div className="text-center md:text-left">
                                <p className="text-black text-lg leading-relaxed">
                                    {item.fact}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute bottom-0 left-0 w-20 h-20 md:w-48 md:h-48 pointer-events-none">
                <Image
                    src="/assets/corner-2.svg"
                    alt="Corner Decoration"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 md:w-48 md:h-48 pointer-events-none">
                <Image
                    src="/assets/corner-2.svg"
                    alt="Corner Decoration"
                    fill
                    className="object-contain -scale-x-100"
                />
            </div>
        </section>
    );
};

export default MitosFaktaSection;
