import axios from "axios";

const _apiBaseUrl = 'https://mbase.idc.md/diplom';

const api = axios.create({
  baseURL: _apiBaseUrl,
})

export default api;
