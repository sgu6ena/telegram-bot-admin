export default class ApiService {
  /*
base_url = http://mbase.idc.md/


get('/user') - получить список пользователей
put('/user/{id}') - обновить данные о пользователе, передавать поля 'name' и 'active'

get('/genre') - получить список жанров

get('/sending') - получить список рассылок
post('/sending') - добавить рассылку, параметры user_id и genre_id
delete('/sending/{id}') - удалить рассылку*/
  _apiBaseUrl = '//mbase.idc.md/diplom/';
  headers: any = () => ({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    cors: 'no-cors',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  });
  
  getResource = async (url: string) => {
    const res = await fetch(`${this._apiBaseUrl}${url}`, {
      headers: this.headers(),
      method: "GET",
      referrerPolicy: 'no-referrer-when-downgrade'
    });
    if (!res.ok) {
      throw new Error(`Could not fetch resource: ${url} - status: ${res.status}`)
    }
    return await res.json();
  };
  
  getUser = async (): Promise<any> => {
    const response = await api.getResource(`user`);
    return response
  };
  
  getGenre = async (): Promise<any> => {
    return await api.getResource(`genre`);
  };
}

export const api = new ApiService();

