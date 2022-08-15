import { OverseerTaskNames, OverseerTasks } from "./OverseerTasks";
import MemoryManager from "../../Core/Memory/MemoryManager";
import { SimpleQueue } from "../../Core/Queue/Queue";

export interface OverseerMemoryBlock {
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
}

export class Overseer {
  private memory: MemoryManager<OverseerMemoryBlock>;
  private queue: SimpleQueue<OverseerTaskNames>;

  public constructor() {
    // @ts-ignore Hack for creating memory object for the first time. This is needed because of the way creeps works.
    // @ts-ignore TODO: Create a separate memory object initialization for personal global instances.
    Memory.overseer ? Memory.overseer : (Memory.overseer = {});
    // @ts-ignore
    this.memory = new MemoryManager<OverseerMemoryBlock>(Memory.overseer, Overseer.initialState());
    // @ts-ignore
    this.queue = new SimpleQueue<OverseerTaskNames>(Memory.overseer.storage.queuedTasks);
  }

  // TODO: Review how to separate initialization.
  private static initialState(): OverseerMemoryBlock {
    return {
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
    };
  }

  private executeTask() {
    const task = this.queue.pop();
    if (task) {
      OverseerTasks[task]();
    }
  }

  public run(): void {
    // console.log(`Overseer started tick with ${JSON.stringify(this.memory.getState())}`);
    this.executeTask();

    if (this.queue.length() === 0) {
      this.queue.push(OverseerTaskNames.CreateColony);
    }
    // console.log(`Overseer ended tick with ${JSON.stringify(this.memory.getState())}`);
  }
}
