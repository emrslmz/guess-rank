import ApiService from '@/core/api/api.service';

export default class ProfileServices extends ApiService {

    async update(payload) {
        this.url = 'me';
        this.payload = payload;
        const { data } = await this.patch();
        return data;
    }

}
