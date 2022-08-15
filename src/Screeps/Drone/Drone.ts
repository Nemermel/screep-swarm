import MemoryManager from "../../Core/Memory/MemoryManager";

export default class Drone {
  private readonly name: string;
  private memory: MemoryManager<DroneMemoryState>;

  public constructor(name: string) {
    this.name = name;
    this.memory = new MemoryManager<DroneMemoryState>(Memory.creeps[name], Drone.initialState());
    this.initDroneRoleFromMemory();
  }

  private static initialState(): DroneMemoryState {
    return {
      role: "drone",
      state: "idle",
      queuedTasks: [],
      comment: "While it's luxury, i write comment. Drone is idle, and waiting for role assignment."
    };
  }

  private initDroneRoleFromMemory(): void {
    console.log(`Drone ${this.name} is ${this.memory.getState().state}`);
  }
}

interface DroneMemoryState {
  role: string;
  state: string;
  target?: string | null;
  queuedTasks: string[];
  comment?: string;
}
