import NeDB from 'nedb';
import path from 'path';
import { Application } from '../../declarations';

export default (app: Application): NeDB<any> => {
  const dbPath = app.get('nedb');
  const Model = new NeDB({
    filename: path.join(dbPath, 'nfc-tags.db'),
    autoload: true,
    inMemoryOnly: process.env.NODE_ENV === 'test',
  });

  Model.ensureIndex({ fieldName: 'nfcId', unique: true });

  return Model;
};