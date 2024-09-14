import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';


const Header = () => {
    const { t, i18n } = useTranslation();
    console.log(i18n)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

    const menuRef = useRef(null);
    const languageMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
            if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
                setIsLanguageMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const changeLanguage = (lang) => {
        console.log('i18n object:', i18n);
        if (i18n.changeLanguage) {
            i18n.changeLanguage(lang);
            setIsLanguageMenuOpen(false);
        } else {
            console.error('i18n.changeLanguage is not a function', i18n);
        }
    };

    return (
        <header className='h-[99px] bg-[#89A291]'>
            <nav className='flex items-center justify-between p-4'>
                <ul className='flex flex-grow gap-[4.5rem] text-white font-sans font-light'>
                    <li className='text-[24px] font-sans text-xl ml-4'>
                        <Link href="/" className='text-[24px] font-sans text-xl ml-[106px]'>
                            {t('Ak Jol')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/list" className='hover:text-green-900'>{t('Tour list')}</Link>
                    </li>
                    <li>
                        <Link href="/booking" className='hover:text-green-900'>{t('Booking')}</Link>
                    </li>
                    <li>
                        <Link href="/account" className='hover:text-green-900'>{t('Account')}</Link>
                    </li>
                    <li>
                        <Link href="/aboutus" className='hover:text-green-900'>{t('About')}</Link>
                    </li>
                </ul>
                <div className='ml-auto mr-20 flex items-center'>
                    <div className='relative' ref={languageMenuRef}>
                        <Image
                            src='/language.svg'
                            alt='language'
                            width={28}
                            height={28}
                            onClick={toggleLanguageMenu}
                            className='cursor-pointer'
                        />

                        {isLanguageMenuOpen && (
                            <div className='absolute right-0 mt-2 w-[130px] text-black bg-[#D9D9D9] rounded-lg'>
                                <ul className='p-2 bg-[#D9D9D9] rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[20px]'>
                                    <li className='p-2 hover:bg-slate-400 rounded-[15px]'>
                                        <button onClick={() => changeLanguage('en')} className='w-full text-left'>EN</button>
                                    </li>
                                    <li className='p-2 hover:bg-slate-400 rounded-[15px]'>
                                        <button onClick={() => changeLanguage('ru')} className='w-full text-left'>RU</button>
                                    </li>
                                    <li className='p-2 hover:bg-slate-400 rounded-[15px]'>
                                        <button onClick={() => changeLanguage('kg')} className='w-full text-left'>KG</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className='relative' ref={menuRef}>
                        <Image
                            src='/profile_button.svg'
                            alt='profile_button'
                            width={70}
                            height={55}
                            className='pl-[8px] cursor-pointer'
                            onClick={toggleMenu}
                        />
                        {isMenuOpen && (
                            <div className='absolute right-0 mt-2 w-[152px] text-black rounded-lg transition-transform transform translate-y-4 opacity-100'>
                                <ul className='p-2 bg-[#D9D9D9] rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[20px]'>
                                    <li className='flex items-center p-2 hover:bg-slate-400 rounded-[15px]'>
                                        <Image src='/profile.svg' alt='profile' width={24} height={24} className='mr-2'/>
                                        <Link href='/profile'>{t('profile')}</Link>
                                    </li>
                                    <li className='flex items-center p-2 hover:bg-slate-400 rounded-[15px]'>
                                        <Image src='/favorite.svg' alt='favorite' width={24} height={24} className='mr-2'/>
                                        <Link href='/settings'>{t('wishlists')}</Link>
                                    </li>
                                    <li className='flex items-center p-2 hover:bg-slate-400 rounded-[15px]'>
                                        <Image src='/help.svg' alt='help' width={24} height={24} className='mr-2'/>
                                        <Link href='/support'>{t('support')}</Link>
                                    </li>
                                    <li className='flex items-center p-2 hover:bg-slate-400 rounded-[15px]'>
                                        <Image src='/logout.svg' alt='logout' width={24} height={24} className='mr-2'/>
                                        <Link href='/logout'>{t('log out')}</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
