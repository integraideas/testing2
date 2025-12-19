
import React from 'react';
import { Devotional } from '../types';
import { IMAGES } from '../constants';

interface HeroProps {
  devotional: Devotional;
  onRefresh: () => void;
  loading: boolean;
}

export const Hero: React.FC<HeroProps> = ({ devotional, onRefresh, loading }) => {
  return (
    <div class="@container">
      <div 
        class="flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden relative min-h-[360px] items-center justify-center p-8 text-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(17, 34, 23, 0.7) 0%, rgba(17, 34, 23, 0.85) 100%), url("${IMAGES.hero}")` 
        }}
      >
        <div class="flex flex-col gap-3 relative z-10 max-w-2xl">
          <div class="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 w-fit mx-auto mb-2 animate-pulse">
            <span class="material-symbols-outlined text-primary text-sm">light_mode</span>
            <span class="text-primary text-xs font-bold uppercase tracking-wider">{devotional.wordOfDay || "Cargando..."}</span>
          </div>
          <h1 class="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
            Bendiciones. <br/>Tu templo te espera.
          </h1>
          <div class="min-h-[80px] flex items-center justify-center flex-col">
            <p class="text-gray-200 text-base md:text-lg font-medium italic mt-2">
              "{devotional.verse}"
            </p>
            <span class="text-primary/80 not-italic text-sm mt-1">- {devotional.reference}</span>
          </div>
        </div>
        <div class="flex gap-3 relative z-10 mt-4">
          <button 
            onClick={onRefresh}
            disabled={loading}
            class="flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-green-400 text-[#112217] text-sm font-bold transition-all disabled:opacity-50"
          >
            <span class={`mr-2 material-symbols-outlined text-[20px] ${loading ? 'animate-spin' : ''}`}>
              {loading ? 'sync' : 'play_arrow'}
            </span>
            {loading ? 'Sincronizando...' : 'Ver Devocional Diario'}
          </button>
        </div>
      </div>
    </div>
  );
};
