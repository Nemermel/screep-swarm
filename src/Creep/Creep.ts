import {Role, roleActions, roleBodyParts} from "./Role";
import {makeID} from "../utils/random";

export const spawnCreep = (name: string, role: Role = Role.harvester): number => {
  const fullName = name + makeID(6);
  const memory = {
    role: role
  };

  // TODO!: Add spawner service to spawn creeps dynamically, not by direct link of spawn
  return Game.spawns['Spawn1'].spawnCreep(roleBodyParts.get(role) ?? [WORK, WORK, WORK, CARRY, MOVE], fullName, {memory: memory});
};
