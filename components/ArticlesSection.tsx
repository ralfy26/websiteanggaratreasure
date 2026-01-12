import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ArticlesSection = () => {
    const articles = [
        {
            title: "1 TAHUN ANGGARA TREASURES : TRANSFORMASI HIDUP DENGAN IMPERIAL FENG SHUI",
            image: "/assets/articles-1.png",
            rotation: "rotate-6"
        },
        {
            title: "ANGGARA TREASURES 1ST ANNIVERSARY : MEMANCARKAN ENERGI POSITIF DENGAN PRODUK IMPERIAL FENG SHUI",
            image: "/assets/articles-1.png",
            rotation: "rotate-0"
        },
        {
            title: "KESERUAN PERAYAAN 1 TAHUN ANGGARA TREASURES : SEBUAH MOMEN PENUH SYUKUR DAN HARAPAN",
            image: "/assets/articles-1.png",
            rotation: "-rotate-6"
        }
    ];

    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header with Navigation */}
                <div className="flex items-center justify-between mb-16 px-4 md:px-12">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-[#AE1919]">
                        <ArrowLeft className="w-8 h-8 md:w-12 md:h-12" />
                    </button>

                    <h2 className="text-4xl md:text-6xl font-thin text-gray-800 tracking-wide">
                        Articles
                    </h2>

                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-[#AE1919]">
                        <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
                    </button>
                </div>

                {/* Articles Grid */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-4">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className={`relative w-full max-w-sm aspect-video rounded-3xl overflow-hidden transform transition-transform hover:scale-105 hover:z-10 md:${article.rotation} ${index === 1 ? 'z-10 scale-105' : 'z-0'}`}
                        >
                            {/* Background Image */}
                            <Image
                                src={article.image}
                                alt="Article Thumbnail"
                                fill
                                className="object-cover"
                            />

                            {/* Overlay Gradient */}
                            <div className="hidden md:block absolute inset-0 bg-linear-to-t from-white via-white/60 to-transparent"></div>

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <p className="text-gray-900 text-sm md:text-base font-medium leading-relaxed uppercase tracking-wide">
                                    {article.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticlesSection;
