
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StreakCard } from './components/StreakCard';
import { PathCard } from './components/PathCard';
import { WeeklyProgress } from './components/WeeklyProgress';
import { AIChatbot } from './components/AIChatbot';
import { getDailyDevotional } from './services/geminiService';
import { Devotional } from './types';
import { INITIAL_PATHS, INITIAL_STREAKS } from './constants';

const App: React.FC = () => {
  const [devotional, setDevotional] = useState<Devotional>({
    wordOfDay: 'Cargando...',
    verse: 'Todo lo puedo en Cristo que me fortalece.',
    reference: 'Filipenses 4:13',
    message: ''
  });
  const [loading, setLoading] = useState(true);

  const fetchDevotional = useCallback(async () => {
    setLoading(true);
    const data = await getDailyDevotional();
    setDevotional(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchDevotional();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <main className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-8">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-8">
            
            <Hero 
              devotional={devotional} 
              onRefresh={fetchDevotional} 
              loading={loading} 
            />

            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Rachas de Disciplina Dual</h2>
                <a className="text-primary text-sm font-medium hover:underline" href="#">Ver historial</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {INITIAL_STREAKS.map((streak, i) => (
                  <StreakCard key={i} {...streak} />
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-2 px-2">
                <span className="material-symbols-outlined text-primary">today</span>
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Tu Camino para Hoy</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {INITIAL_PATHS.map(path => (
                  <PathCard key={path.id} {...path} />
                ))}
              </div>
            </section>

            <WeeklyProgress />
          </div>
        </main>

        <footer className="flex justify-center py-6 bg-[#112217] border-t border-[#23482f]">
          <p className="text-gray-500 text-xs">© 2024 Fiitness Espiritual. Cuidando el templo.</p>
        </footer>
      </div>

      <AIChatbot />
    </div>
  );
};

export default App;
