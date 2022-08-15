import { ErrorMapper } from "utils/ErrorMapper";
import { Overseer } from "./Screeps/Overseer/Overseer";
import Drone from "./Screeps/Drone/Drone";

declare global {
  // Syntax for adding proprties to `global` (ex "global.log")
  namespace NodeJS {
    interface Global {
      log: any;
      Game: Game;
      BodyPartConstant: BodyPartConstant;
    }
  }
}

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);
  const overseer = new Overseer();
  overseer.run();

  if (Game.creeps.test_dummy1) {
    console.log("Accessing drone: test_dummy1");
    new Drone("test_dummy1");
  }

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
});
