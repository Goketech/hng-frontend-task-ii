import axios from 'axios';

const fetchProduct = async (productId: string) => {
  const organizationId = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const appId = process.env.NEXT_PUBLIC_APP_ID;

  try {
    const response = await axios.get(`https://api.timbu.cloud/products/${productId}`, {
      params: {
        organization_id: organizationId,
        Appid: appId,
        Apikey: apiKey,
        currency_code: 'USD'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchProduct;
