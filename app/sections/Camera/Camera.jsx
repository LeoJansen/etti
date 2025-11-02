"use client";
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";

import { useDictionary } from '@/src/site/context/DictionaryContext';

import CameraCard from './CameraCard';
import { useCameraAnimation } from "./useCameraAnimation";

const CameraMobile = dynamic(() => import('./mobile/CameraMobile'), { ssr: false });

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
}

const Camera = () => {
    const isMobile = useIsMobile();
    const sectionRef = useRef(null);
    const { dictionary } = useDictionary();
    const cameraContent = dictionary.camera;
    const headingLines = cameraContent.headingLines ?? [cameraContent.heading];

    useCameraAnimation(sectionRef, isMobile);

    if (isMobile) {
        return <CameraMobile />;
    }

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden min-h-screen bg-gradient-to-b from-black to-[#080808]" id="camera">
            <div className='flex flex-col'>
                {/* Header Section */}
                <div className="text-center p-12 pb-12">
                    <div className="mb-8 flex w-fit flex-col justify-start rounded-[4px]">
                        <div
                            id="etti-header"
                            className="about-animate-item flex items-center gap-8"
                        >
                            <div className="h-[5px] w-full rounded-[1.5px] bg-[#EBC197]" />
                            <div className="flex">
                                <h3 className="about-subheading">{cameraContent.eyebrow}</h3>
                            </div>
                        </div>
                        <div id="etti-subheader" className="about-animate-item flex w-fit">
                            {headingLines.map((line) => (
                                <h2 key={line} className="about-heading">{line}</h2>
                            ))}
                        </div>
                    </div>

                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400" data-camera-description>
                        {cameraContent.description}
                    </p>
                </div>

                {/* Spacer */}
                <div className='flex w-full h-[10vh] bg-transparent'>
                </div>

                {/* Cards Section */}
                <div className="relative w-full min-h-[80vh] z-10">
                    {/* Background with overlay */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-transparent to-[#080808]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(89,130,146,0.1)_0%,transparent_70%)]" />
                    </div>

                    {/* Cards Grid */}
                    <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8 p-12">
                        {cameraContent.cards.map((item, index) => (
                            <div
                                key={item.title ?? index}
                                data-camera-card
                                className="camera-card-wrapper"
                            >
                                <CameraCard
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    techBadge={cameraContent.techBadge}
                                    className='h-full'
                                />
                            </div>
                        ))}
                    </div>

                    {/* Tech grid background elements */}
                    <div className="camera-bg-element absolute top-10 left-10 w-32 h-32 border border-[#EB9948]/20 rounded-lg rotate-45" />
                    <div className="camera-bg-element absolute bottom-20 right-20 w-24 h-24 border border-[#EB9948]/20 rounded-lg -rotate-12" />
                    <div className="camera-bg-element absolute top-1/2 left-1/4 w-16 h-16 border border-[#EB9948]/20 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Camera;