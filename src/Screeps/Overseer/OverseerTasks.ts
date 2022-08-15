export type OverseerTask = (...args: any[]) => void;

export enum OverseerTaskNames {
  CreateColony = "createColony",
  CreateRoom = "createRoom",
  CreateConstructionSite = "createConstructionSite",
  CreateCreep = "createCreep",
  CreateFlag = "createFlag",
  CreateSource = "createSource",
  CreateSpawn = "createSpawn",
  CreateTombstone = "createTombstone",
  CreateController = "createController",
  CreateLink = "createLink",
  CreateStorage = "createStorage",
  CreateTerminal = "createTerminal",
  CreateTower = "createTower",
  CreatePowerSpawn = "createPowerSpawn",
  CreateExtension = "createExtension",
  CreateRoad = "createRoad",
  CreateWall = "createWall",
  CreateSourceKeeperLair = "createSourceKeeperLair",
  CreateObserver = "createObserver"
}

export type OverseerTasksMap = {
  [taskName in OverseerTaskNames]: OverseerTask;
};

export const OverseerTasks: OverseerTasksMap = {
  createConstructionSite(...args: any): void {},
  createController(...args: any): void {},
  createCreep(...args: any): void {},
  createExtension(...args: any): void {},
  createFlag(...args: any): void {},
  createLink(...args: any): void {},
  createObserver(...args: any): void {},
  createPowerSpawn(...args: any): void {},
  createRoad(...args: any): void {},
  createRoom(...args: any): void {},
  createSource(...args: any): void {},
  createSourceKeeperLair(...args: any): void {},
  createSpawn(...args: any): void {},
  createStorage(...args: any): void {},
  createTerminal(...args: any): void {},
  createTombstone(...args: any): void {},
  createTower(...args: any): void {},
  createWall(...args: any): void {},
  createColony(...args: any): void {
    console.log("createColony was executed");
  }
};
