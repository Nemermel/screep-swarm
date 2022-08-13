type Color = 'green' | 'blue' | 'yellow' | 'red';

type CreepRoleConstant = BaseRoleConstant | AdvancedRoleConstant | RemoteRoleConstant | WarRoleConstant;

type BaseRoleConstant =
  'harvester' |
  'collector' |
  'miner' |
  'upgrader' |
  'filler' |
  'builder' |
  'repairer';

type AdvancedRoleConstant =
  'manager' |
  'processor';

type RemoteRoleConstant =
  'claimer' |
  'reserver' |
  'signer' |
  'remoteBuilder' |
  'remoteUpgrader' |
  'remoteHarvester' |
  'depositHarvester' |
  'pbAttacker' |
  'pbHealer' |
  'pbCarrier' |
  'moveTester' |
  'reiver';

type WarRoleConstant =
  'soldier' |
  'doctor' |
  'boostDoctor' |
  'dismantler' |
  'boostDismantler' |
  'apocalypse' |
  'defender';

type CreepNameGenerator = {
  [role in CreepRoleConstant]?: (room: string, index?: number, ...args: any[]) => string
}

type CreepData =
  EmptyData |
  ReiverData |
  HarvesterData |
  WorkerData |
  ProcessorData |
  RemoteHelperData |
  RemoteDeclarerData |
  RemoteHarvesterData |
  pbAttackerData |
  WarUnitData |
  ApocalypseData |
  HealUnitData

interface EmptyData { }

interface HarvesterData {
  sourceID: string;
  targetID: string;
}

interface WorkerData {
  targetID: string;
}

interface ProcessorData {
  x: number;
  y: number;
}

interface RemoteHelperData {
  targetID: string;
  sourceID: string;
}

interface ReiverData {
  // Flagname to move
  flagName: string;
  // Building ID
  targetID: string;
}

interface RemoteDeclarerData {
  targetRoomName: string;
  spawnRoom?: string;
  signText?: string;
}

interface RemoteHarvesterData {
  sourceFlagName: string;
  targetID?: number;
  spawnRoom?: string;
}

interface pbAttackerData {
  sourceFlagName: string;
  healerCreepName: string;
  spawnRoom: string;
}

interface WarUnitData {
  targetFlagName: string;
  healerCreepName: string;
  keepSpawn: boolean;
}

interface ApocalypseData {
  targetFlagName: string;
  bearTowerNum: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  keepSpawn: boolean;
}

interface HealUnitData {
  creepName: string
  standByFlagName: string
  keepSpawn?: boolean
}

type BodyAutoConfigConstant =
  'harvester' |
  'worker' |
  'upgrader' |
  'manager' |
  'processor' |
  'reserver' |
  'attacker' |
  'healer' |
  'dismantler' |
  'remoteHarvester';

interface Structure extends Loggable, Friendable, Workable {}

interface Loggable {
  /**
   *
   * @param content log content
   * @param color log prefix color
   * @param notify whether notify by mail
   */
  log(content: string, color?: Color, notify?: boolean): void
}

interface Friendable {
  my?: boolean;
}

interface Workable {
  /**
   * Any work that can produce Structure
   */
  work?(): void

  /**
   * Callback called when work is complete
   */
  onWorkComplete(): void
}

/**
 * Body set
 * Abbreviated version bodyPart[]
 * Forms as followed:
 * @example { [TOUGH]: 3, [WORK]: 4, [MOVE]: 7 }
 */
interface BodySet {
  [MOVE]?: number
  [CARRY]?: number
  [ATTACK]?: number
  [RANGED_ATTACK]?: number
  [WORK]?: number
  [CLAIM]?: number
  [TOUGH]?: number
  [HEAL]?: number
}
