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
  [Role.upgrader, [WORK, WORK, WORK, CARRY, MOVE]],
  [Role.builder, [WORK, WORK, WORK, CARRY, MOVE]],
  [Role.repairer, [WORK, WORK, WORK, CARRY, MOVE]],
]);

const harvesterActions = (creep: Creep) => {
  const sources = creep.room.find(FIND_SOURCES);

  if (creep.store.getFreeCapacity() > 0) {
    if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[0]);
    }
  }
  if (creep.store.getFreeCapacity() == 0) {
    //TODO!: store spawn in creep memory
    if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(Game.spawns['Spawn1']);
    }
  }
};


const upgraderActions = (creep: Creep) => {

};

const builderActions = (creep: Creep) => {

};

const repairerActions = (creep: Creep) => {

};



export const roleActions = new Map<Role, (creep: Creep) => void>([
  [Role.basicHarvester, harvesterActions],
  [Role.harvester, harvesterActions],
  [Role.upgrader, upgraderActions],
  [Role.builder, builderActions],
  [Role.repairer, repairerActions],
]);
