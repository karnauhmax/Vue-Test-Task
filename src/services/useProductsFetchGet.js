const API_BASE_URL = 'https://fakestoreapi.com';

const useProductsFetchGet = async () =>  {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }

}

export { useProductsFetchGet } ;