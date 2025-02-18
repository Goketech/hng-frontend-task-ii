import axios from 'axios';

const fetchData = async (categoryId: string) => {
  const organizationId = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const appId = process.env.NEXT_PUBLIC_APP_ID;

  try {
    const response = await axios.get('https://api.timbu.cloud/products', {
      params: {
        organization_id: organizationId,
        reverse_sort: false,
        page: 1,
        size: 50,
        Appid: appId,
        Apikey: apiKey,
        category_id: categoryId === 'all' ? '' : categoryId
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchData;
