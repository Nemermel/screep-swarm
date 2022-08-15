import MemoryStateManager from "./MemoryStateManager";

interface MemoryRef {
  [name: string]: any;
}

export default class MemoryManager<T> {
  private memoryRef: MemoryRef;
  private storage: MemoryStateManager<T>;

  public constructor(memoryRef: any, initialState: T) {
    // If memory reference is empty
    if (Object.keys(memoryRef).length === 0) {
      // Set default property storage, and set initial state
      memoryRef.storage = initialState;
    }

    // Add link to memory reference in class
    this.memoryRef = memoryRef;

    // Create new state manager, address set type of interface, and set address of memory reference to storage object
    this.storage = new MemoryStateManager<T>(this.memoryRef.storage);
  }

  public setState(newState: T): void {
    this.storage.setState(newState);
  }

  public getState(): T {
    return this.storage.getState();
  }
}
