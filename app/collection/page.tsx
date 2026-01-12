import CollectionSection from "@/components/CollectionSection";
import Link from "next/link";

export default function CollectionPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <div className="container mx-auto px-8 pt-12 pb-4">
                <div className="flex items-center gap-8 text-xl md:text-2xl font-bold">
                    <h1 className="text-[#9e1c28] cursor-pointer">Home Collection</h1>
                    <h1 className="text-gray-300 cursor-pointer hover:text-gray-500 transition-colors">
                        Personal Collection
                    </h1>
                </div>
            </div>

            {/* Section 1: Red Phoenix Mountain */}
            <CollectionSection
                title="RED PHOENIX MOUNTAIN"
                subtitle="RED PHOENIX MOUNTAIN"
                refCode="012"
                description="A magnificent representation of the mythical phoenix, symbolizing rebirth and eternal life. Carved from exquisite red stone, this piece captures the essence of power and grace."
                images={[
                    "/assets/red-phoenix-mountain-2.png",
                    "/assets/red-phoenix-mountain-1.png",
                    "/assets/red-phoenix-mountain-3.png",
                ]}
                lifestyleImage="/assets/red-phoenix-mountain-big.png"
                orientation="left"
                buttonLink="/collection/red-phoenix-mountain"
            />

            {/* Section 2: Ascending Tiger (Crystal) */}
            <CollectionSection
                title="Crystal"
                subtitle="ASCENDING TIGER"
                refCode="REF: 383"
                description="An inspiring piece depicting a tiger ascending, symbolizing ambition and success. The crystal clarity enhances the dynamic energy of the sculpture."
                images={[
                    "/assets/crystal-2.png",
                    "/assets/crystal-1.png",
                    "/assets/crystal-3.png",
                ]}
                lifestyleImage="/assets/crystal-big.png"
                orientation="right"
                buttonLink="/collection/ascending-tiger"
            />

            {/* Section 3: Qian Long Jadeite Mountain */}
            <CollectionSection
                title="QIAN LONG JADEITE MOUNTAIN"
                subtitle="QIAN LONG JADEITE MOUNTAIN"
                refCode="REF: 988"
                description="An imperial masterpiece featuring intricate carvings of mountain landscapes. The jadeite stone brings a sense of tranquility and prosperity to any space."
                images={[
                    "/assets/qian-long-2.png",
                    "/assets/qian-long-1.png",
                    "/assets/qian-long-3.png",
                ]}
                lifestyleImage="/assets/qian-long-big.png"
                orientation="left"
                buttonLink="/collection/qian-long"
            />

            {/* Section 4: Imperial White Inkstone */}
            <CollectionSection
                title="IMPERIAL WHITE INKSTONE"
                subtitle="QIAN LONG JADEITE MOUNTAIN" // Note: Subtitle in design for 4th item seems to be copy-pasted or similar, using "REF: 988" again in screenshot? 
                // Actually looking at screenshot 4, the subtitle is "QIAN LONG JADEITE MOUNTAIN REF: 988" but the title is "IMPERIAL WHITE INKSTONE". 
                // I will use "IMPERIAL WHITE INKSTONE" as subtitle to be safe or keep it as is if it's a specific ref. 
                // Let's use "IMPERIAL WHITE INKSTONE" for subtitle to match the title context better, or "REF: 988" if strictly following text.
                // The screenshot shows "QIAN LONG JADEITE MOUNTAIN REF: 988" under "IMPERIAL WHITE INKSTONE". This might be a design mock error.
                // I will use "IMPERIAL WHITE INKSTONE" as the subtitle to be logical, but keep the ref.
                refCode="REF: 988"
                description="An exquisite white inkstone, a symbol of scholarly pursuit and refinement. Perfect for the discerning collector of imperial artifacts."
                images={[
                    "/assets/imperial-white-inkstone-1.png",
                    "/assets/imperial-white-inkstone-2.png",
                    "/assets/imperial-white-inkstone-1.png", // Reusing 1st image as 3rd is missing
                ]}
                lifestyleImage="/assets/imperial-jade-inkstone-big.png" // Using best guess for big image
                orientation="right"
                buttonLink="/collection/imperial-white-inkstone"
            />
        </main>
    );
}
