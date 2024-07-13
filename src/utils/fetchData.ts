import axios from 'axios';

const fetchData = async (categoryId: any) => {
  const organizationId = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const appId = process.env.NEXT_PUBLIC_APP_ID;

  try {
    const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/', {
      params: {
        organization_id: organizationId,
        reverse_sort: false,
        page: 1,
        size: 50,
        Appid: appId,
        Apikey: apiKey,
        category_id: categoryId,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchData;
