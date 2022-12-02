export interface OptionValue {
  id: string;
  name: string;
}

export interface Option {
  id: string; // ID de la catégorie de l'option
  name: string;
  items: OptionValue[];
}
