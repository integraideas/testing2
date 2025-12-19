
import React, { useState, useRef, useEffect } from 'react';
import { createAIChatSession } from '../services/geminiService';
import { Message } from '../types';

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy tu guía espiritual y físico. ¿Cómo puedo ayudarte hoy con tu entrenamiento o tu paz espiritual?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      chatSessionRef.current = createAIChatSession();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: result.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, he tenido un pequeño problema. ¿Podrías repetirlo?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-[#23482f] border border-primary/30 rounded-2xl shadow-2xl flex flex-col h-[500px] overflow-hidden">
          <div className="p-4 border-b border-[#112217] flex justify-between items-center bg-[#112217]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">psychology</span>
              <span className="font-bold text-sm">Guía Virtual</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-[#112217] rounded-tr-none' 
                    : 'bg-[#112217] text-white rounded-tl-none border border-primary/10'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#112217] p-3 rounded-xl rounded-tl-none border border-primary/10">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-[#112217]">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe aquí..."
                className="flex-1 bg-[#112217] border-none rounded-lg text-sm focus:ring-1 focus:ring-primary text-white py-2 px-3"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary text-[#112217] p-2 rounded-lg hover:bg-green-400 transition-colors disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-[#112217] w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform group"
        >
          <span className="material-symbols-outlined text-3xl">chat</span>
          <div className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full border-2 border-[#112217]"></div>
        </button>
      )}
    </div>
  );
};
