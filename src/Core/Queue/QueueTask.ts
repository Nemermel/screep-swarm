export interface QueueTask<T> {
  task: T;
  priority: QueuePriority;
}

export enum QueuePriority {
  Low = 0,
  Medium = 1,
  High = 2
}
