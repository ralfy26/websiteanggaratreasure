import Image from "next/image";

const VideoInsightsSection = () => {
    const moreVideos = [
        {
            id: 1,
            image: "/assets/more-video-1.png",
            title: "Solusi Finansial Imperial Feng Shui",
        },
        {
            id: 2,
            image: "/assets/more-video-2.png",
            title: "Ilmu Fisika di Balik Prinsip 12 Shio",
        },
        {
            id: 3,
            image: "/assets/more-video-3.png",
            title: "Kenali DNA Langit dalam tubuhmu - Part One",
        },
        {
            id: 4,
            image: "/assets/more-video-4.png",
            title: "Ilmu Biologi dibalik Prinsip BaZi",
        },
    ];

    return (
        <section className="py-16 w-full">
            {/* Header */}
            <div className="flex justify-center items-center gap-4 mb-8">
                <Image
                    src="/assets/chakra-ornament.svg"
                    alt="Ornament Left"
                    width={100}
                    height={50}
                    className="w-24 md:w-32 lg:w-48"
                />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sigokae text-black text-center">
                    Video Insights by Anggara
                </h2>
                <Image
                    src="/assets/chakra-ornament.svg"
                    alt="Ornament Right"
                    width={100}
                    height={50}
                    className="w-24 md:w-32 lg:w-48 transform scale-x-[-1]"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Main Video */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-8 group cursor-pointer">
                    <Image
                        src="/assets/video-insight.png"
                        alt="Video Insight"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-800/80 rounded-full flex items-center justify-center pl-1 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8 md:w-10 md:h-10">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    {/* Next Button Overlay */}
                    <div className="absolute bottom-6 right-6">
                        <button className="bg-black/50 hover:bg-black/70 text-white px-6 py-2 rounded-full backdrop-blur-md transition-colors border border-white/20 text-sm font-medium">
                            Next
                        </button>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                        Solusi Imperial Feng Shui Sejalan dengan Logika Praktis
                    </h3>
                    <p className="text-gray-700 leading-relaxed max-w-4xl">
                        Solusi yang terbaik adalah solusi yang ilmiah dan masuk akal, bukan mitos.
                        <br />
                        Solusi Imperial Feng Shui menyelaraskan energi melalui sifat alami Jadeite dan Quartz Crystal sehingga tidak perlu lagi renovasi rumah atau kantor berulang kali hingga uang habis. Mengoptimalkan peluang ke depan juga harus tetap mengoptimalkan aset yang dimiliki saat ini.
                    </p>
                </div>

                {/* More Videos */}
                <div className="mb-8 flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-black">More Videos</h3>
                    <button className="flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                        Anggara Treasures
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {moreVideos.map((video) => (
                        <div key={video.id} className="group cursor-pointer">
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                                <Image
                                    src={video.image}
                                    alt={video.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            <h4 className="font-bold text-sm text-gray-900 group-hover:text-red-700 transition-colors line-clamp-2">
                                {video.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoInsightsSection;
