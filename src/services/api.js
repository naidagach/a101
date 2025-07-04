import axios from "axios";

const BASE_URL = 'https://a101backend.vercel.app'

// category services
async function useCategory() {
  const res = await axios.get(`${BASE_URL}/category`)
    return res.data
}
async function postCategory() {
  const res = await axios.post(`${BASE_URL}/category`)
    return res.data
}
async function useCategorybyId(id) {
  const res = await axios.get(`${BASE_URL}/category/${id}`)
    return res.data
}
async function putCategory(id) {
  const res = await axios.put(`${BASE_URL}/category/${id}`)
    return res.data
}
async function delCategory(id) {
  const res = await axios.delete(`${BASE_URL}/category/${id}`)
    return res.data
}
async function postCatbySubcat() {
  const res = await axios.post(`${BASE_URL}/category/subcategory`)
    return res.data
}
async function putCatbySubcat(id) {
  const res = await axios.put(`${BASE_URL}/category/subcategory/${id}`)
    return res.data
}
async function delCatbySubcat(id) {
  const res = await axios.delete(`${BASE_URL}/category/subcategory/${id}`)
    return res.data
}

// products services
async function useAllProd() {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data;
}
async function postProd() {
  const res = await axios.post(`${BASE_URL}/products`);
  return res.data;
}
async function getProdByDisc() {
  const res = await axios.get(`${BASE_URL}/products/discounted`);
  return res.data;
}
async function getProdBySearch() {
  const res = await axios.get(`${BASE_URL}/products/search`);
  return res.data;
}
async function getProdByCatId(id) {
  const res = await axios.get(`${BASE_URL}/products/category/${id}`);
  return res.data;
}

async function getProdBySubcat(id) {
  const res = await axios.get(`${BASE_URL}/products/subcategory/${id}`);
  return res.data;
}
async function getProdByPopular(id) {
  const res = await axios.get(`${BASE_URL}/products/popular`);
  return res.data;
}
async function getProdById(id) {
  const res = await axios.get(`${BASE_URL}/products/${id}`);
  return res.data;
}
async function putProdById(id) {
  const res = await axios.put(`${BASE_URL}/products/${id}`);
  return res.data;
}
async function delProdById(id) {
  const res = await axios.delete(`${BASE_URL}/products/${id}`);
  return res.data;
}

export {useCategory, getProdByCatId}