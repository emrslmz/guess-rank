export default {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }
};
