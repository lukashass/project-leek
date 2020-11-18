import NeDB from 'nedb';
import path from 'path';
import { Application } from '../../declarations';

export default (app: Application): NeDB<any> => {
  const dbPath = app.get('nedb');
  const Model = new NeDB({
    filename: path.join(dbPath, 'pets.db'),
    autoload: true,
  });

  Model.ensureIndex({ fieldName: 'id', unique: true });

  return Model;
};
