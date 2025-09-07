export interface Pet {
  id: string;
  name: string;
  type: 'Dog' | 'Cat' | 'Bird' | 'Fish' | 'Rabbit' | 'Other';
  breed?: string;
  avatar: string; // emoji or image URL
  birthDate?: string;
  adoptionDate?: string;
  personality?: string[];
  favoriteToys?: string[];
  quirks?: string[];
}

export interface PetMoment {
  id: string;
  petId: string;
  petName: string;
  petAvatar: string;
  title: string;
  story: string;
  photos?: string[];
  videos?: string[];
  timestamp: string;
  location?: string;
  mood?: 'happy' | 'playful' | 'sleepy' | 'mischievous' | 'curious' | 'funny';
  tags?: string[];
  likes: number;
  comments: Comment[];
  isPrivate: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: string;
  likes: number;
}

export interface MomentDraft {
  petId: string;
  title: string;
  story: string;
  photos?: string[];
  mood?: string;
  tags?: string[];
  location?: string;
}

export interface Memory {
  id: string;
  petId: string;
  title: string;
  description: string;
  date: string;
  photos?: string[];
  significance: 'first-time' | 'milestone' | 'funny' | 'touching' | 'special';
}

export interface FunFact {
  id: string;
  petId: string;
  fact: string;
  category: 'habit' | 'preference' | 'quirk' | 'talent' | 'funny-behavior';
  discoveredDate: string;
}