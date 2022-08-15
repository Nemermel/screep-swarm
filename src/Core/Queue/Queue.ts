export interface Queue<T> {
  push(item: T): void;

  pop(): T | undefined;

  peek(): T | undefined;

  length(): number;

  isEmpty(): boolean;
}

export class QueueOverflowError extends Error {
  public constructor(message: string = "") {
    if (message.length === 0) {
      message = "Queue is full.";
    }
    super(message);
  }
}

export class SimpleQueue<T> implements Queue<T> {
  private readonly dataSource: T[];
  private readonly queueMaxSize: number;

  public constructor(items: T[] = [], queueMaxSize: number = 10) {
    this.dataSource = items;
    this.queueMaxSize = queueMaxSize;
  }

  public push(item: T): void {
    if (this.dataSource.length < this.queueMaxSize) {
      this.dataSource.push(item);
    } else {
      throw new QueueOverflowError(`Queue is full. Max size is ${this.queueMaxSize}`);
    }
  }

  public pop(): T | undefined {
    return this.dataSource.shift();
  }

  public peek(): T | undefined {
    return this.dataSource[0];
  }

  public length(): number {
    return this.dataSource.length;
  }

  public isEmpty(): boolean {
    return this.dataSource.length === 0;
  }
}
