import base from '@/services/request/dashboard/base';

export default {
    users: `${base.base_url}/users`,

    shop_url: `${base.base_url}/items`,  //https://guess-what-rank-api.herokuapp.com/api/  +  items
    game_url: `${base.base_url}/games`,
    level_url: `${base.base_url}/levels`,
    video_url: `${base.base_url}/videos`,
    video_group_url: `${base.base_url}/video_groups`,


    video_option_url: `${base.base_url}/video_options`,
    video_option: `${base.base_url}/options`

};
