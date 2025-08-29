export interface MealItemProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export interface MealFromDB {
  id: number;
  title: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
  image: string;
  slug: string;
}

export interface FormState {
  message: string | null;
}

export interface ActionError {
  message: string;
}