export default class MemoryStateManager<T> {
  private state: T;

  public constructor(initialState: T) {
    this.state = initialState;
  }

  public getState(): T {
    return this.state;
  }

  public setState(newState: T): void {
    this.state = Object.assign({}, this.state, newState);
  }
}
