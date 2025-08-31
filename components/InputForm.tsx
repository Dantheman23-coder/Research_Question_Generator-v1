
import React from 'react';
import { ResearcherRole, ResearchTask } from '../types';
import { ROLE_OPTIONS, TASK_OPTIONS } from '../constants';

interface InputFormProps {
    topic: string;
    setTopic: (topic: string) => void;
    role: ResearcherRole;
    setRole: (role: ResearcherRole) => void;
    task: ResearchTask;
    setTask: (task: ResearchTask) => void;
    onSubmit: () => void;
    isLoading: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({
    topic,
    setTopic,
    role,
    setRole,
    task,
    setTask,
    onSubmit,
    isLoading
}) => {
    return (
        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8">
            <div className="space-y-6">
                <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        1. Describe your research topic or idea
                    </label>
                    <textarea
                        id="topic"
                        rows={4}
                        className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                        placeholder="e.g., A meta-analysis of existing literature on the impact of mindfulness on stress levels..."
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            2. What is your primary role?
                        </label>
                        <select
                            id="role"
                            className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-slate-900 dark:text-slate-100"
                            value={role}
                            onChange={(e) => setRole(e.target.value as ResearcherRole)}
                        >
                            {ROLE_OPTIONS.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="task" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            3. What is the main task?
                        </label>
                        <select
                            id="task"
                            className="block w-full rounded-md border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-slate-900 dark:text-slate-100"
                            value={task}
                            onChange={(e) => setTask(e.target.value as ResearchTask)}
                        >
                            {TASK_OPTIONS.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        onClick={onSubmit}
                        disabled={isLoading}
                        className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generating...
                            </>
                        ) : (
                            'Generate Research Question'
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};
