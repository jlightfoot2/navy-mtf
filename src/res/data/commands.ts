import {schema, normalize} from 'normalizr';
import commandsData from './command-hospitals-data';
console.log(commandsData);
console.log('hello world data');
const commandsSchema = new schema.Entity('commands');
const commandsArraySchema = new schema.Array(commandsSchema);

export interface CommandInterface{
  id: number;
  title: string;
  phone: string;
  website: string;
  facebook: string;
  address: string;
  image: string;
  icon: string;
}

export const normalizedCommands = normalize(commandsData, commandsArraySchema);
console.log(normalizedCommands);
export const defaultCommands = normalizedCommands.entities.commands;
export const defaultCommandIds = normalizedCommands.result;




