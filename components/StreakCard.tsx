
import React from 'react';
import { StreakData } from '../types';

export const StreakCard: React.FC<StreakData> = ({ label, value, icon, progress, incrementToday, color, subtitle }) => {
  return (
    <div class="flex flex-col gap-3 rounded-xl p-6 bg-[#23482f] border border-[#23482f] hover:border-primary/30 transition-all group">
      <div class="flex justify-between items-start">
        <div class={`size-10 rounded-lg bg-[#112217] flex items-center justify-center ${color || 'text-primary'} group-hover:scale-110 transition-transform`}>
          <span class="material-symbols-outlined">{icon}</span>
        </div>
        {incrementToday && (
          <span class="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">+1 hoy</span>
        )}
      </div>
      <div>
        <p class="text-gray-300 text-sm font-medium">{label}</p>
        <p class="text-white text-3xl font-bold mt-1">{value}</p>
      </div>
      {progress !== undefined && (
        <div class="w-full bg-[#112217] rounded-full h-1.5 mt-2 overflow-hidden">
          <div 
            class="bg-primary h-1.5 rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      {subtitle && (
        <p class="text-xs text-gray-400 mt-2">{subtitle}</p>
      )}
    </div>
  );
};
