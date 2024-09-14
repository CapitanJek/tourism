"use client"

import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';

const LangSwitcher = () => {
    const {i18n} = useTranslation();
    const [lang, setLang] = useState(i18n.language.toUpperCase());
    const switchLang = (e) => {
        const selectedLang = e.target.value.toLowerCase();
        i18n.changeLanguage(selectedLang);
        setLang(e.target.value);
    };

    useEffect(() => {
        setLang(i18n.language.toUpperCase());
    }, [i18n.language]);

    return (
        <div>
            <div className='absolute right-0 mt-2 w-[130px] text-black bg-[#D9D9D9] rounded-lg'>
                <ul className='p-2 bg-[#D9D9D9] rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[20px]'>
                    <li className='p-2 hover:bg-slate-400 rounded-[15px]'>
                        <button onClick={() => i18n.changeLanguage("en")} className='w-full text-left'>EN</button>
                    </li>
                    <li className='p-2 hover:bg-slate-400 rounded-[15px]'>
                        <button onClick={() => i18n.changeLanguage("ru")} className='w-full text-left'>RU</button>
                    </li>
                    <li className='p-2 hover:bg-slate-400 rounded-[15px]'>
                        <button onClick={() => i18n.changeLanguage("kg")} className='w-full text-left'>KG</button>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default LangSwitcher;
