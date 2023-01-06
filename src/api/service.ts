const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}
;export default class ApiService {

base_url = 'https://mbase.idc.md/diplom'
/*

get('/user') - получить список пользователей
put('/user/{id}') - обновить данные о пользователе, передавать поля 'name' и 'active'

get('/genre') - получить список жанров

get('/sending') - получить список рассылок
post('/sending') - добавить рассылку, параметры user_id и genre_id
delete('/sending/{id}') - удалить рассылку*/



  getResource = async (url: string) => {
    const res = await fetch(`${this.base_url}${url}`, {
       headers: headers,
      // method: "GET",
      // referrerPolicy: 'no-referrer-when-downgrade',
      mode:'no-cors',
      credentials:'same-origin'
    });
    console.log(res)
    if (!res.ok) {
      throw new Error(`Could not fetch resource: ${url} - status: ${res.status}`)
    }
    return await res.json();
  };

  getUser = async (): Promise<any> => {
    const response = await api.getResource(`/user`);
    return response
  };

  getGenre = async (): Promise<any> => {
    return await api.getResource(`/genre`);
  };
}

export const api = new ApiService();



// import axios from "axios";
//
// const _apiBaseUrl = 'https://mbase.idc.md/diplom';
//
// const httpRequest = axios.create({
//
//   baseURL: _apiBaseUrl,
//
//   headers: {
//     'Accept': 'application/json',
//     'WithCredentials': true,
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json; charset=UTF-8',
//     'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
//     'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
//     'Authorization': ''
//   },
//   withCredentials: true,
// })
//
// export default httpRequest;
//
// export  const getUser = async (): Promise<{ data: any }> => {
//   return httpRequest.get(`/user`,{withCredentials:true});
// };
