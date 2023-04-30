import Dexie, { Table } from 'dexie';
import type { Counter } from './counter/counter';

export class Database extends Dexie {
  counter!: Table<Counter>;

  constructor() {
    super('react_ts');

    // Define tables and indexes. Implicit table props are dynamically created here.
    this.version(1).stores({
      counter: '++id',
    });
  }
}

export const db = new Database();
