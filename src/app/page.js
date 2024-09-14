"use client";

import React, { useState, useEffect } from 'react';
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import "./(i18Next)/i18n";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";

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
            <Container>
                {t("Hello world")}
            </Container>
            <Footer />
        </>
    );
};

export default Home;
