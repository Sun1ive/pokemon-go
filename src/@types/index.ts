interface Resource {
  name: string;
  resource_uri: string;
}

interface Evolution extends Resource {
  level: number;
  method: string;
  to: string;
}

interface Move extends Resource {
  learn_type: string;
}

export interface PokemonList {
  abilites: Resource[];
  attack: number;
  catch_rate: number;
  created: string;
  defense: number;
  descriptions: Resource[];
  egg_cycles: number;
  egg_groups: Resource[];
  ev_yield: string;
  evolutions: Evolution[];
  exp: number;
  growth_rate: string;
  happiness: number;
  height: string;
  hp: number;
  male_female_ratio: string;
  modified: string;
  moves: Move[];
  name: string;
  national_id: number;
  pkdx_id: number;
  resource_uri: string;
  sp_atk: number;
  sp_def: number;
  speed: number;
  species: string;
  sprites: Resource[];
  total: number;
  weight: string;
  types: Resource[];
}

export interface Response {}
