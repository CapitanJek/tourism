"use client"

import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

const MyComponent = () => {
    const { t} = useTranslation();

    return (
        <Suspense fallback="Loading...">
            <div>{t('welcome')}</div>
        </Suspense>
    );
};
