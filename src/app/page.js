"use client";

import React, { useState, useEffect } from 'react';
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import "./(i18Next)/i18n";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import HomePage from "@/pages/HomePage";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Home = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Header />
            <HomePage/>
            <Footer />
        </>
    );
};

export default Home;
