import ApiService from '../../../core/api/api.service';

import AuthLoginEntity from '../entitites/login.entity';
import AuthRegisterEntity from '../entitites/register.entity';

export default class AuthServices extends ApiService {
  async login(payload) {
    this.url = 'login';
    this.payload = payload;
    // await this.makeValidation(AuthLoginEntity);
    return this.post();
  }

  async register(payload) {
    this.url = 'register';
    this.payload = payload;
    // await this.makeValidation(AuthRegisterEntity);
    return this.post();
  }

  async fetchMe() {
    this.url = 'me';
    return this.get();
  }

}
