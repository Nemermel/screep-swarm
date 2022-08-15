export enum Role {
  basicHarvester = 'basicHarvester',
  harvester = 'harvester',
  upgrader = 'upgrader',
  builder = 'builder',
  repairer = 'repairer',
  wallRepairer = 'wallRepairer',
  claimer = 'claimer',
  defender = 'defender',
  attacker = 'attacker',
  scout = 'scout',
}


export const roleBodyParts = new Map<Role, BodyPartConstant[]>([
  [Role.basicHarvester, [WORK, CARRY, MOVE]],
  [Role.harvester, [WORK, WORK, WORK, CARRY, MOVE]],
  [Role.upgrader, [WORK, CARRY, MOVE]],
  [Role.builder, [WORK, WORK, WORK, CARRY, MOVE]],
  [Role.repairer, [WORK, WORK, WORK, CARRY, MOVE]],
]);

