import axios from "axios";

const HOST = "https://sigiri-furniture-app.herokuapp.com/products";


export const getAllProducts = async () => {
    console.log("done;");
    try {
      const response = await axios.get(`${HOST}/view`);
      console.log(response, "res");
      return {
        ok: true,
        data: response.data.data,
      };
    } catch (error) {
      return {
        ok: false,
      };
    }
  };

  export const getProduct = async (productId) => {
    try {
      const { data } = await axios.get(HOST + "${productId}");
      return {
        ok: true,
        data: data.data.data,
      };
    } catch (error) {
      return {
        ok: false,
      };
    }
  };


  export const updateProduct = async (productId, allproduct) => {
    console.log(allproduct, "<<<<<<<<<<<<<<<<<<<<<<<<");
    try {
      await axios.put(HOST + "${id}", allproduct);
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
      };
    }
  };


  export const deleteProduct = async (id) => {
    try {
      await axios.delete(`${HOST}/${id}`);
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
      };
    }
    
  }; 