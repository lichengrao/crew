export interface Board {
  readonly players: Player[];
  readonly numPlayers: number;
  readonly deck: Deck;
  readonly commander: Player;
  leader: Player;
  curPlayer: Player;
  mission: Mission;
  status: GameState;
  round: number;
  numRounds: number;
  tricks: Trick[];
}

export type Card = PlayCard | TaskCard;

export enum Suit {
  Pink,
  Blue,
  Green,
  Yellow,
  Rocket,
}

export enum CardType {
  Play,
  Task,
}

export enum CardState {
  Deck,
  Hand,
  Clue,
  Played,
}

export enum Clue {
  High,
  Low,
  Only,
}

export interface Deck {
  playCards: PlayCard[];
  taskCards: TaskCard[];
}

export type Hand = {
  [suit in Suit]: PlayCard[];
};

export interface PlayCard {
  readonly value: number;
  readonly suit: Suit;
}

export interface Task {
  taskCard: TaskCard;
  playerId: number;
  taskState: TaskState;
}

export interface TaskCard {
  readonly value: number;
  readonly suit: Suit;
}

export enum TaskState {
  InProgressLocked,
  InProgressUnlocked,
  Success,
  Failure,
}

export enum MissionId {
  Easy,
  Medium,
  Hard,
}

export enum MissionState {
  Success,
  Failure,
  InProgress,
}

export interface Mission {
  readonly missionId: MissionId;
  unassignedTaskCards: TaskCard[];
  outstandingTasks: Task[];
  completedTasks: Task[];
  missionState: MissionState;
}

export interface Player {
  readonly playerId: number;
  myCards: Hand;
  myTricks: Trick[];
  myTasks: Task[];
}

export interface TaskToken {
  // TODO: just do it bro
}

export enum TaskTokenNumber {
  One,
  Two,
  Three,
  Four,
  Five,
  Last,
}

export enum TaskTokenCondition {
  Strict,
  Relative,
}

export interface TaskToken {
  readonly taskTokenNumber: TaskTokenNumber;
  readonly taskTokenCondition: TaskTokenCondition;
}

export interface Trick {
  [playerId: string]: PlayCard | null;
}

export enum GameState {
  Success,
  Failure,
  InProgress,
}

export interface Room {
  id: string;
  currentTrick: Trick;
  isGameDone: boolean;
  taskCards: Array<TaskCard>;
  playerIdToHandMap: PlayerIdToHandMap;
  commanderId: string;
  playerIds: string[];
  currentPlayerTurn: string;
}

export interface PlayerIdToHandMap {
  [playerId: string]: Hand;
}

export interface User {
  displayName?: string;
  id: string;
  roomId?: string;
}
