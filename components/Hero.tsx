import Image from "next/image";
import { Play } from "lucide-react";

const Hero = () => {
    return (
        <div className="relative min-h-screen md:h-screen w-full mb-12">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/hero.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center pt-20">
                <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 items-center h-full w-full gap-8 md:gap-0">
                    <div className="flex justify-center items-center">
                        <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform group cursor-pointer border border-white/30">
                            <div className="w-16 h-16 bg-[#800000]/80 rounded-full flex items-center justify-center group-hover:bg-[#800000] transition-colors">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                        </button>
                    </div>

                    <div className="flex justify-center md:justify-end items-center">
                        <button className="w-16 h-16 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-colors text-sm">
                            Next
                        </button>
                    </div>
                </div>
            </div> */}

            {/* Roof Decoration */}
            <div className="absolute -bottom-6 sm:-bottom-10 md:-bottom-16 lg:-bottom-24 left-0 w-full z-20 pointer-events-none">
                <Image
                    src="/assets/roof-white.png"
                    alt="Roof Decoration"
                    width={1920}
                    height={300}
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Hero;
