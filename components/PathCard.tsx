
import React from 'react';
import { TrainingPath } from '../types';

export const PathCard: React.FC<TrainingPath> = ({ type, title, duration, intensity, focus, imageUrl, icon }) => {
  const isCuerpo = type === 'cuerpo';

  return (
    <div class="group relative flex flex-col justify-end overflow-hidden rounded-xl min-h-[240px] bg-[#23482f] cursor-pointer transition-transform hover:-translate-y-1">
      <div 
        class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#112217] via-[#112217]/60 to-transparent"></div>
      <div class="relative p-6 z-10">
        <div class={`mb-3 inline-flex items-center gap-1.5 rounded-md ${isCuerpo ? 'bg-[#13ec5b]' : 'bg-white'} px-2 py-1 text-xs font-bold text-[#112217]`}>
          <span class="material-symbols-outlined text-[16px]">{icon}</span>
          {type.toUpperCase()}
        </div>
        <h3 class="text-2xl font-bold text-white mb-1">{title}</h3>
        <p class="text-gray-300 text-sm mb-4">
          {duration} • {intensity && `${intensity} • `} {focus}
        </p>
        <button class="flex items-center gap-2 text-white font-semibold text-sm hover:text-primary transition-colors">
          {isCuerpo ? 'Comenzar Entrenamiento' : 'Comenzar Práctica'} 
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
