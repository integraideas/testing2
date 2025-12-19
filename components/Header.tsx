
import React from 'react';
import { IMAGES } from '../constants';

export const Header: React.FC = () => {
  return (
    <header class="w-full border-b border-solid border-b-[#23482f] bg-[#112217]/95 backdrop-blur-sm sticky top-0 z-50">
      <div class="px-4 lg:px-40 flex justify-center py-3">
        <div class="flex max-w-[960px] flex-1 items-center justify-between">
          <div class="flex items-center gap-4 text-white">
            <div class="size-8 flex items-center justify-center text-primary">
              <span class="material-symbols-outlined !text-[32px]">spa</span>
            </div>
            <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Fiitness Espiritual</h2>
          </div>
          <nav class="hidden md:flex items-center gap-8">
            <a class="text-white text-sm font-medium hover:text-primary transition-colors" href="#">Inicio</a>
            <a class="text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Entrenamiento</a>
            <a class="text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Espiritualidad</a>
            <a class="text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Progreso</a>
          </nav>
          <div class="flex items-center gap-4">
            <button class="text-white hover:text-primary transition-colors">
              <span class="material-symbols-outlined">notifications</span>
            </button>
            <div 
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border-2 border-[#23482f]" 
              style={{ backgroundImage: `url("${IMAGES.profile}")` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
