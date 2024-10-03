'use client'

import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

const ResultsPage = () => {
    const router = useRouter();
    const [queryLoaded, setQueryLoaded] = useState(false);

    useEffect(() => {
        if (router.isReady) {
            setQueryLoaded(true);
        }
    }, [router.isReady]);

    const { region, date } = router.query;

    return (
        <div className='p-4'>
            <h1 className="text-2xl font-bold">Search Results</h1>
            {queryLoaded ? (
                <>
                    <p>Region: {region}</p>
                    <p>Date: {date}</p>
                </>
            ) : (
                <p>Loading search results...</p>
            )}
        </div>
    );
};

export default ResultsPage;
