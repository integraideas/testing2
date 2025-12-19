
import React from 'react';

const DAYS = [
  { label: 'LUN', status: 'completed' },
  { label: 'MAR', status: 'completed' },
  { label: 'MIE', status: 'active' },
  { label: 'JUE', status: 'pending' },
  { label: 'VIE', status: 'pending' },
  { label: 'SAB', status: 'pending' },
  { label: 'DOM', status: 'pending' },
];

export const WeeklyProgress: React.FC = () => {
  return (
    <div class="bg-[#23482f] rounded-xl p-6 mt-4">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-white font-bold text-lg">Tu Semana</h3>
        <span class="text-xs text-gray-400 bg-[#112217] px-2 py-1 rounded">Semana 12</span>
      </div>
      <div class="flex justify-between items-center w-full">
        {DAYS.map((day, idx) => (
          <React.Fragment key={day.label}>
            <div class="flex flex-col items-center gap-3">
              <span class={`text-xs font-medium ${day.status === 'active' ? 'text-white' : 'text-gray-400'}`}>
                {day.label}
              </span>
              {day.status === 'completed' && (
                <div class="size-8 rounded-full bg-primary flex items-center justify-center text-[#112217]">
                  <span class="material-symbols-outlined text-sm font-bold">check</span>
                </div>
              )}
              {day.status === 'active' && (
                <div class="size-8 rounded-full bg-primary border-4 border-[#112217] flex items-center justify-center text-[#112217] shadow-[0_0_15px_rgba(19,236,91,0.4)]">
                  <span class="material-symbols-outlined text-sm font-bold">play_arrow</span>
                </div>
              )}
              {day.status === 'pending' && (
                <div class="size-8 rounded-full bg-[#112217] border border-gray-700"></div>
              )}
            </div>
            {idx < DAYS.length - 1 && (
              <div class="h-[2px] w-full bg-[#112217]/50 mx-2 rounded hidden sm:block"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
