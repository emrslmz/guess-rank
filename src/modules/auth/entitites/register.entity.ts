import {
  required, maxLength, minLength
} from '@/core/decorators';
import BaseEntity from '@/core/entitites/base.entity';

@required({ name: 'name', verboseMessage: 'Paylaşmak için bu alanı doldurun.' })
@minLength({ name: 'name', minLength: 3,  verboseMessage: 'Post içeriği minimum 3 karakter olabilir.' })
@maxLength({ name: 'name', maxLength: 1000, verboseMessage: 'Post içeriği en fazla 250 karakter olabilir.' })
export default class CreatePostEntity extends BaseEntity {}
