import axios from 'axios';

// get all categories
export const getSubs = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/subs`);
};

// get single category
export const getSub = async (slug) => {
    return await axios.get(`${process.env.REACT_APP_API}/sub/${slug}`);
};

// remove single category
export const removeSub = async (slug, authtoken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/sub/${slug}`, {
        headers: {
            authtoken,
        },
    });
};

// update single category
export const updateSub = async (slug, sub, authtoken) => {
    return await axios.put(`${process.env.REACT_APP_API}/sub/${slug}`, sub, {
        headers: {
            authtoken,
        },
    });
};

// create single category
export const createSub = async (sub, authtoken) => {
    return await axios.post(`${process.env.REACT_APP_API}/sub`, sub, {
        headers: {
            authtoken,
        },
    });
};