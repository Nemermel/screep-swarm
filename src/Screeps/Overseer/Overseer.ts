import { OverseerTaskNames, OverseerTasks } from "./OverseerTasks";
import { OverseerMemoryState } from "./OverseerMemoryState";
import { SimpleQueue } from "../../Core/Queue/Queue";

export class Overseer {
  private memory: OverseerMemoryState;
  private queue: SimpleQueue<OverseerTaskNames>;

  public constructor() {
    this.memory = new OverseerMemoryState();
    this.queue = new SimpleQueue<OverseerTaskNames>(this.memory.getMemory().state.queuedTasks);
  }

  private executeTask() {
    const task = this.queue.pop();
    if (task) {
      OverseerTasks[task]();
    }
  }

  public run(): void {
    console.log(`Overseer started tick with ${JSON.stringify(this.memory.getMemory())}`);
    this.executeTask();

    if (this.queue.length() === 0) {
      this.queue.push(OverseerTaskNames.CreateColony);
    }
    console.log(`Overseer ended tick with ${JSON.stringify(this.memory.getMemory())}`);
  }
}
