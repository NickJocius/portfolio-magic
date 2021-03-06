import axios from 'axios';

// get all categories
export const getCategories = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/categories`);
};

// get single category
export const getCategory = async (slug) => {
    return await axios.get(`${process.env.REACT_APP_API}/category/${slug}`);
};

// remove single category
export const removeCategory = async (slug, authtoken) => {
    return await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
        headers: {
            authtoken,
        },
    });
};

// update single category
export const updateCategory = async (slug, category, authtoken) => {
    return await axios.put(`${process.env.REACT_APP_API}/category/${slug}`, category, {
        headers: {
            authtoken,
        },
    });
};

// create single category
export const createCategory = async (category, authtoken) => {
    return await axios.post(`${process.env.REACT_APP_API}/category`, category, {
        headers: {
            authtoken,
        },
    });
};