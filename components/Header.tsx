
import React from 'react';
import { FlaskIcon } from './icons/FlaskIcon';

export const Header: React.FC = () => {
    return (
        <header className="bg-white dark:bg-slate-800/50 shadow-sm sticky top-0 backdrop-blur-lg z-10">
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-4">
                <div className="flex items-center space-x-3">
                    <FlaskIcon className="h-8 w-8 text-indigo-500" />
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
                        Research Question Generator
                    </h1>
                </div>
            </div>
        </header>
    );
};
