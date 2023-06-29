export type PGQuery = {
  text : string;
  values? : Array<string|number>
}

export type UserLib = {
  id: number;
  player: string;
  game: string;
  platform: string;
  grade: string;
  finished: boolean;
}

export type GameInsert = {
  name: string;
  platformId: number
}

export type Game = {
  id:number;
  name: string;
  platform: string;
}