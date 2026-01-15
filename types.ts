export interface Route {
  id: string;
  title: string;
  description: string;
  image: string;
  days: number;
  type: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
}
