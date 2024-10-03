"use client";

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import HomePage from "@/pages/HomePage";

const SearchForm = () => {
    const [region, setRegion] = useState('');
    const [date, setDate] = useState('');
    const [regionFocused, setRegionFocused] = useState(false);
    const [dateFocused, setDateFocused] = useState(false);
    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const encodedRegion = encodeURIComponent(region);

        const searchData = {
            region: encodedRegion,
            date: date
        };

        try {
            const response = await fetch(`/index/regions/${encodedRegion}/tours`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(searchData),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (response.ok) {
                console.log('Search successful:', data);
            } else {
                console.error('Search failed:', data);
            }
        } catch (error) {
            console.error('Error sending search data:', error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center bg-[#89A291] p-2 rounded-full mt-[-27rem] relative z-10"
        >
            <div className="relative w-[350px] h-[90px]">
                <input
                    type="text"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    placeholder="Where to go? Search places or activity"
                    className="w-full h-full bg-[#89A291] text-white placeholder-transparent p-4 rounded-l-full border-none focus:outline-none z-20"
                    onFocus={() => setRegionFocused(true)}
                    onBlur={() => setRegionFocused(false)}
                />

                {!regionFocused && !region && (
                    <span className="absolute inset-0 flex flex-col justify-center pl-4 text-white pointer-events-none">
                        <span>{t('Where to go?')}</span>
                        <span className="text-sm mt-1 opacity-70">{t('Search places or activity')}</span>
                    </span>
                )}
            </div>

            <div className="border-r border-white h-[90px]"></div>

            <div className="relative w-[340px] h-[90px]">
                <input
                    type={dateFocused ? 'date' : 'text'}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="When? Select dates"
                    className="w-full h-full bg-[#89A291] text-white placeholder-transparent p-4 rounded-r-full border-none focus:outline-none z-20"
                    onFocus={() => setDateFocused(true)}
                    onBlur={() => setDateFocused(false)}
                />
                {!dateFocused && !date && (
                    <span className="absolute inset-0 flex flex-col justify-center pl-4 text-white pointer-events-none">
                        <span>{t('When?')}</span>
                        <span className="text-sm mt-1 opacity-70">{t('Select dates')}</span>
                    </span>
                )}
            </div>

            <button
                type="submit"
                className="bg-[#7C9885] text-white p-4 rounded-full ml-2 flex items-center justify-center z-20"
            >
                <FaSearch size={24} />
            </button>
        </form>
    );
};

export default SearchForm;

