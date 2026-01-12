import Image from "next/image";

const TestimonialSection = () => {
    const testimonials = [
        {
            text: "Terima kasih coach, sejak tau dan menjalankan ilmu yg diajarkan CR hidup saya mengalami perubahan besar ke arah yg semakin lebih baik. Kehidupan rumah tangga saya lebih harmonis semua yg saya impikan bisa tercapai, kendaraan, rumah baru, buka cabang usaha dan yg paling bikin saya kagum sejak saya pake kristal dan ngatur posisi barang sesuai feng shui dari 2 bulan yg lalu income saya langsung naik padahal awalnya sih ragu karena cuma pake kristal aja (tanpa melakukan apapun) kegiatan seperti biasa tp income saya bisa naik dan mencapai yg saya impikan amazing, amazing, ternyata inilah cara bagi saya utk menyelaraskan diri & rezeki dgn alam terbukti target income saya udah tercapai.",
            author: "Aspiani Kukar"
        },
        {
            text: "Terima kasih coach, sejak tau dan menjalankan ilmu yg diajarkan CR hidup saya mengalami perubahan besar ke arah yg semakin lebih baik. Kehidupan rumah tangga saya lebih harmonis semua yg saya impikan bisa tercapai, kendaraan, rumah baru, buka cabang usaha dan yg paling bikin saya kagum sejak saya pake kristal dan ngatur posisi barang sesuai feng shui dari 2 bulan yg lalu income saya langsung naik padahal awalnya sih ragu karena cuma pake kristal aja (tanpa melakukan apapun) kegiatan seperti biasa tp income saya bisa naik dan mencapai yg saya impikan amazing, amazing, ternyata inilah cara bagi saya utk menyelaraskan diri & rezeki dgn alam terbukti target income saya udah tercapai.",
            author: "Aspiani Kukar"
        }
    ];

    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-8">
                {/* Section Title */}
                <h2 className="text-4xl md:text-6xl font-thin text-gray-800 mb-16 tracking-wide">
                    Testimonial
                </h2>

                {/* Testimonials Carousel */}
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="relative w-full md:w-[600px] min-h-[400px] md:h-[400px] shrink-0 drop-shadow-2xl rounded-2xl overflow-hidden bg-white">
                            {/* Background Image */}
                            <Image
                                src="/assets/testimonial-card.png"
                                alt="Testimonial Background"
                                fill
                                className="object-cover"
                            />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 text-gray-700">
                                <p className="text-xs md:text-sm leading-relaxed mb-6 font-medium text-justify">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-px bg-black"></div>
                                    <p className="font-bold text-sm text-black">
                                        {testimonial.author}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    <div className="w-3 h-3 rounded-full bg-[#AE1919]"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
