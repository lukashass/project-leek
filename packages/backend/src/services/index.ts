import { Application } from '../declarations';
import authentication from './authentication/authentication.service';
import users from './users/users.service';
import nfcReaders from './nfc-readers/nfc-readers.service';
import nfcTags from './nfc-tags/nfc-tags.service';
import smartSpeakers from './smart-speakers/smart-speakers.service';

export default (app: Application): void => {
  app.configure(authentication);
  app.configure(users);
  app.configure(nfcReaders);
  app.configure(nfcTags);
  app.configure(smartSpeakers)
};
