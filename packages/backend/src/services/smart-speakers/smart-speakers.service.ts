import { ServiceAddons } from '@feathersjs/feathers';
import { Service, NedbServiceOptions } from 'feathers-nedb';
import { SmartSpeaker } from '@leek/commons';
import { Application } from '../../declarations';
import createModel from './smart-speakers.model';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'smart-speakers': SmartSpeakerService & ServiceAddons<SmartSpeaker>;
  }
}

class SmartSpeakerService extends Service<SmartSpeaker> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<NedbServiceOptions>, app: Application) {
    super(options);
  }
}

export default (app: Application): void => {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('smart-speakers', new SmartSpeakerService(options, app));
  app.service('smart-speakers').publish(() => app.channel('anonymous'));
};
