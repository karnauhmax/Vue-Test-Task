const API_BASE_URL = 'https://fakestoreapi.com';


// fetching product by id 
const useProductFetchById = async (id) => {
 try {
   const response = await fetch(`${API_BASE_URL}/products/${id}`);
   if (!response.ok) {
     throw new Error('Network response was not ok');
   }
   return response.json();
 } catch (error) {
   console.error(error);
   return null;
 }
}

export {useProductFetchById};