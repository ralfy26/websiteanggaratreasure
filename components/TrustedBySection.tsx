import Image from "next/image";
import TreeOrnament from "./TreeOrnament";

const TrustedBySection = () => {
    return (
        <section className="bg-white py-20 overflow-hidden relative">
            <div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
                {/* Left Side*/}
                <div className="w-full md:w-1/3 relative min-h-[180px] flex items-center overflow-visible">
                    {/* Tree Ornament */}
                    <TreeOrnament
                        position="top-0 -left-50"
                        width={500}
                        height={200}
                        className="top-1/2 -translate-y-1/3 -left-10 md:-left-16 w-[150px] md:w-[450px] opacity-20"
                    />

                    {/* Text */}
                    <h2 className="text-5xl md:text-7xl font-thin text-black z-10 relative leading-tight">
                        Trusted<br />By
                    </h2>
                </div>

                {/* Right Side*/}
                <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center justify-around gap-12 md:gap-8 mt-12 md:mt-0">
                    {/* Cle de Peau */}
                    <div className="relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
                        <Image
                            src="/assets/de-de-pau.svg"
                            alt="Cle de Peau Beaute"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* BCA Prioritas */}
                    <div className="relative w-48 h-24 hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/assets/bca-prioritas.png"
                            alt="BCA Prioritas"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Savyavasa */}
                    <div className="relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
                        <Image
                            src="/assets/savyavasa.svg"
                            alt="Savyavasa"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;
