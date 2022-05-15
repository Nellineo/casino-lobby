export interface Attributes {
  id: string;
  title: string;
  type: string;
}

export interface GameAccessType {
  realMode: number;
  funMode?: number;
  is_target?: number;
  viewMode?: number;
}

export interface Filter {
  id: string;
  title: string;
}

// null returns on Api force any types within Game interface
export interface Game {
  categories: string[];
  features: string[];
  themes: string[];
  icons: any[];
  background?: string;
  backgrounds: any[];
  id: string;
  server_game_id: any;
  extearnal_game_id: string;
  front_game_id: string;
  name: string;
  title?: any;
  width?: string;
  height?: string;
  ratio?: string;
  status: string;
  provider: string;
  show_as_provider: string;
  provider_title: string;
  game_options?: any;
  blocked_countries?: any;
  has_age_restriction: number;
  icon_2: string;
  icon_3?: string;
  types: GameAccessType;
  game_skin_id: string;
  cats: Attributes[];
  feats: Attributes[];
  thms: Attributes[];
  active: string;
}
