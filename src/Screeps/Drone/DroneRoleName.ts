// TODO!: Refactor this.

export enum DroneRoleName {
  Harvester = "harvester",
  Upgrader = "upgrader",
  Builder = "builder",
  Repairer = "repairer",
  WallRepairer = "wallRepairer",
  Claimer = "claimer"
}

export const droneRoleBodyParts = new Map<DroneRoleName, BodyPartConstant[]>([
  [DroneRoleName.Harvester, [WORK, CARRY, MOVE]],
  [DroneRoleName.Upgrader, [WORK, CARRY, MOVE]],
  [DroneRoleName.Builder, [WORK, WORK, WORK, CARRY, MOVE]],
  [DroneRoleName.Repairer, [WORK, WORK, WORK, CARRY, MOVE]],
  [DroneRoleName.WallRepairer, [WORK, WORK, WORK, CARRY, MOVE]],
  [DroneRoleName.Claimer, [CLAIM, MOVE]]
]);
