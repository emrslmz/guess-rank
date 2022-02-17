import ProfileServices from '@/modules/app/profile/services/profile.services';

export const updateMe = async (context, payload) => {
    const data = await new ProfileServices().update(payload);
    console.log(data);
};
