import { OverseerTaskNames } from "./OverseerTasks";

export interface OverseerMemoryBlock {
  state: {
    queuedTasks: OverseerTaskNames[];
    spawn: {
      [spawnName: string]: {
        roleName: string;
        creeps: {
          [creepRole: string]: {
            count: number;
            max: number;
          };
        };
      };
    };
  };
}

const overseerMemoryDefaultState: OverseerMemoryBlock = {
  state: {
    queuedTasks: [],
    spawn: {
      MotherColony: {
        roleName: "initialcolony",
        creeps: {
          harvester: {
            count: 0,
            max: 3
          },
          upgrader: {
            count: 0,
            max: 2
          },
          builder: {
            count: 0,
            max: 1
          }
        }
      }
    }
  }
};

export class OverseerMemoryState {
  /**
   * @private memoryRef is the reference to the memory block Memory.overseer
   */
  private memoryRef: any;

  public constructor() {
    // @ts-ignore
    if (Memory.overseer === undefined || !(Memory.overseer instanceof OverseerMemoryState)) {
      // @ts-ignore
      Memory.overseer = overseerMemoryDefaultState;
    }
    // @ts-ignore
    this.memoryRef = Memory.overseer || {};
  }

  public updateMemory(newMemoryBlock: OverseerMemoryBlock): void {
    // @ts-ignore
    this.memoryRef = Object.assign(this.memoryRef || {}, newMemoryBlock);
  }

  public getMemory(): OverseerMemoryBlock {
    return this.memoryRef;
  }
}
