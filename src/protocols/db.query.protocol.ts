export type PGQuery = {
  text : string;
  values? :string[]
}

export type UserLib = {
  id: number;
  player: string;
  game: string;
  platform: string;
  grade: string;
  finished: boolean;
}