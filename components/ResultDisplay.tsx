
import React from 'react';
import { Loader } from './Loader';

interface ResultDisplayProps {
    result: string;
    isLoading: boolean;
    error: string | null;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, isLoading, error }) => {
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
                    <Loader />
                    <p className="mt-4 text-sm font-medium">AI is formulating your question...</p>
                </div>
            );
        }
        if (error) {
            return (
                <div className="text-center text-red-500 dark:text-red-400">
                    <h3 className="font-semibold">An Error Occurred</h3>
                    <p className="mt-1 text-sm">{error}</p>
                </div>
            );
        }
        if (result) {
            return (
                <div className="animate-fade-in">
                    <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2 tracking-wide uppercase">Generated Research Question</h3>
                    <blockquote className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200">
                        <p>"{result}"</p>
                    </blockquote>
                </div>
            );
        }
        return (
            <div className="text-center text-slate-500 dark:text-slate-400">
                <h3 className="font-semibold">Your generated question will appear here</h3>
                <p className="mt-1 text-sm">Fill out the form above and click "Generate" to start.</p>
            </div>
        );
    };

    return (
        <section>
            <div className="min-h-[12rem] bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 flex items-center justify-center">
                {renderContent()}
            </div>
        </section>
    );
};
