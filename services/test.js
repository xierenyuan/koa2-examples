import request from '../utils/request';

export default {
    get() {
        return request.get('user/passport/info', { a: 1, b: 2 });
    },

    getSemCampaignList(params = {}) {
        return request.get('sem/campaign/list', params);
    }
};