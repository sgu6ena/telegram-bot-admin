import {genre, sending, user} from "./types";
import api from "./api";


export const getUser = async (): Promise<user[]> => {
  const response = await api.get(`/user`);
  return response.data.data
};

export const putUser = async (id: string, user: any): Promise<{ data: any }> => {
  const response = await api.put(`/user/${id}`, user);
  return response.data
};
export const postUser = async (user: { login: string, name: string, active: 0 | 1 }): Promise<{ data: any }> => {
  const response = await api.post(`/user`, user);
  return response.data
};

export const getGenre = async (): Promise<genre[]> => {
  const response = await api.get(`/genre`);
  return response.data.data
};

export const getSending = async (): Promise<sending[]> => {
  const response = await api.get(`/sending`);
  return response.data.data
};

// post('/sending') - добавить рассылку, параметры user_id и genre_id
export const postSending = async (user_id: string, genre_id: string): Promise<{ data: any }> => {
  const response = await api.post(`/sending`, {user_id, genre_id: genre_id});
  return response.data.data
};
//delete('/sending/{id}') - удалить рассылку
export const deleteSending = async (id: string): Promise<{ data: any }> => {
  const response = await api.delete(`/sending/${id}`);
  return response.data.data
};
