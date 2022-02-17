import ApiService from '@/core/api/api.service';

export default class MarketServices extends ApiService {

    async fetchItem() {
        this.url = 'items';
        return this.get();
    }

}
