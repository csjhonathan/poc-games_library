export type PGQuery = {
  text : string;
  values? : Array<string|number| boolean>
}

export type UserLib = {
  id: number;
  player: string;
  game: string;
  platform: string;
  grade: string;
  finished: boolean;
}

export type LibInsertion = {
  playerId: number;
  gameId: number;
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

export type Platform = Omit<Game, 'platform'>

export type PlatformInsert = {
  name : string
}

export type PlayerInsert = PlatformInsert;

export type Player = Platform

export type LibUpdate = {
  grade:number;
  status:boolean;
}

export type Grade = {
  name : string
}