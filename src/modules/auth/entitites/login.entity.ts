import { required, validEmail } from '@/core/decorators';
import BaseEntity from '@/core/entitites/base.entity';

@required({ name: 'email' })
@required({ name: 'password' })
@validEmail({ name: 'email' })
export default class AuthLoginEntity extends BaseEntity {}
