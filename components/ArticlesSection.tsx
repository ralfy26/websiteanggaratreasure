import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ArticlesSection = () => {
    const articles = [
        {
            title: "1 TAHUN ANGGARA TREASURES : TRANSFORMASI HIDUP DENGAN IMPERIAL FENG SHUI",
            image: "/assets/articles-1.png",
        },
        {
            title: "MENATA PERABOTAN DENGAN FENG SHUI UNTUK ENERGI POSITIF DI RUMAH",
            image: "/assets/articles-2.jpg",
        },
        {
            title: "KESERUAN PERAYAAN 1 TAHUN ANGGARA TREASURES : SEBUAH MOMEN PENUH SYUKUR DAN HARAPAN",
            image: "/assets/articles-3.jpg",
        }
    ];

    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header with Navigation */}
                <div className="flex items-center justify-between mb-16 px-4 md:px-12">
                    <h2 className="text-4xl md:text-6xl font-thin text-gray-800 tracking-wide mx-auto">
                        Articles
                    </h2>

                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-[#AE1919]">
                        <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
                    </button>
                </div>

                {/* Articles Grid with perspective */}
                <div className="articles-perspective flex flex-col md:flex-row justify-center items-center gap-8 md:gap-6 lg:gap-10 px-4">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className={`article-card article-card-${index} relative w-full max-w-sm aspect-16/10 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer`}
                            style={{
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                            }}
                        >
                            {/* Background Image */}
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 w-full p-5 md:p-6">
                                <p className="text-white text-xs md:text-sm font-semibold leading-relaxed uppercase tracking-wide">
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
