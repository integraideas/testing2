
export interface Devotional {
  verse: string;
  reference: string;
  message: string;
  wordOfDay: string;
}

export interface TrainingPath {
  id: string;
  type: 'cuerpo' | 'espíritu';
  title: string;
  duration: string;
  intensity?: string;
  focus: string;
  imageUrl: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface StreakData {
  label: string;
  value: string;
  icon: string;
  progress: number;
  incrementToday: boolean;
  color?: string;
  subtitle?: string;
}
