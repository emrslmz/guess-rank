import axios from 'axios';
import { showMessage } from '@/shared/utils/messages.utils';
import UserMe from '@/modules/main/home/store/index';

const actions = {
    changeGeneralSetting() {
        axios
            .patch('https://guess-what-rank-api.herokuapp.com/api/me', {
                name: this.state.userData.name,
                surname: this.state.userDatas.userData.surname,
                email: this.state.userDatas.userData.email,
                username: this.state.userDatas.userData.username,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            })
            .then((response) => {
                console.log(response);
                showMessage("Changes saved!")
            })
    }
}

export default {
    actions,
    UserMe
}