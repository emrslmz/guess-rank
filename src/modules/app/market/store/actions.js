import MarketServices from '@/modules/app/market/services/market.services';

export const getItem = async ({ commit }, payload) => {
    const data = await new MarketServices().fetchItem(payload);
    commit('SET_MARKET_ITEM', data.result.data);
};
