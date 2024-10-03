'use client'

import { useState, useEffect } from "react";
import SearchForm from "@/components/SearchForm";
import { useTranslation } from 'react-i18next';



const HomePage = () => {
    const [currentBackground, setCurrentBackground] = useState(0)
    const { t } = useTranslation();
    const backgrounds = [
        'BG.png',
        'BG2.jpg',
        'BG3.jpg',
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prevBackground) => (prevBackground + 1) % backgrounds.length)
        },2000)
        return() => clearInterval(interval)
    }, [backgrounds.length])
        return (
            <div
                className="flex flex-col justify-center items-center w-full min-h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
                style={{backgroundImage: `url(${backgrounds[currentBackground]})`}}
            >
                <div className="relative z-10 flex flex-col justify-center items-center w-full min-h-screen bg-cover bg-center">
                    <div className="mt-[-28rem]">
                        <h1 className="text-display-large text-white  text-center font-normal">
                            {t('Travel around Kyrgyzstan')}
                        </h1>
                        <div className="flex justify-center">
                            <p className="text-white max-w-[600px] text-center font-normal text-lg w-full">
                                {t('Explore Kyrgyzstan: Embark on an Unforgettable Journey Through Majestic Mountains, Rich Cultures, and Breathtaking Landscapes')}
                            </p>
                        </div>

                </div>
            </div>
                <SearchForm />
            </div>
        );
}

export default HomePage;
