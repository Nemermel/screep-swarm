import ActionTarget from "./ActionTarget";

export default interface IAction {
  execute(): number;

  target?: ActionTarget;
  isProcessed?: boolean;
}
