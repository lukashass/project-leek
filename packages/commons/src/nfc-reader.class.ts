import { AbstractEntity, Ref } from './abstract-entity.class';
import NFCTag from './nfc-tag.class';
import User from './user.class';

export default class NFCReader extends AbstractEntity {
  attachedTag!: Ref<NFCTag> | null;

  owner!: Ref<User>;
}
