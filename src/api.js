const baseUrl = 'https://api.unsplash.com/';
const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

export const fetchImages = async () => {
    const uri = `${baseUrl}photos/random?client_id=${apiKey}&count=10`;
    try {
        const res = await fetch(uri);
        if (!res.ok) {
            console.log('API call failed', res.type);
            return [];
        }
        const jsonData = await res.json();
        return jsonData;
    } catch (err) {
        console.log('Error in making API call', err);
    }
};