
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { ResultDisplay } from './components/ResultDisplay';
import { generateResearchQuestion } from './services/geminiService';
import { ResearcherRole, ResearchTask } from './types';
import { ROLE_OPTIONS, TASK_OPTIONS } from './constants';

const App: React.FC = () => {
    const [topic, setTopic] = useState<string>('Investigating the correlation between sleep patterns and academic performance in university students using wearable sensor data.');
    const [role, setRole] = useState<ResearcherRole>(ROLE_OPTIONS[0].value);
    const [task, setTask] = useState<ResearchTask>(TASK_OPTIONS[0].value);
    const [result, setResult] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = useCallback(async () => {
        if (!topic.trim()) {
            setError('Please provide a research topic or idea.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setResult('');

        try {
            const question = await generateResearchQuestion(topic, role, task);
            setResult(question);
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
            setError(`Failed to generate question: ${errorMessage}`);
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, [topic, role, task]);

    return (
        <div className="min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300">
            <Header />
            <main className="max-w-4xl mx-auto p-4 md:p-8">
                <div className="space-y-8">
                    <InputForm
                        topic={topic}
                        setTopic={setTopic}
                        role={role}
                        setRole={setRole}
                        task={task}
                        setTask={setTask}
                        onSubmit={handleSubmit}
                        isLoading={isLoading}
                    />
                    <ResultDisplay
                        result={result}
                        isLoading={isLoading}
                        error={error}
                    />
                </div>
                 <footer className="text-center mt-12 text-sm text-slate-500 dark:text-slate-400">
                    <p>Powered by AI. Always verify critical information.</p>
                </footer>
            </main>
        </div>
    );
};

export default App;
