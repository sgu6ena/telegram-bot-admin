
export interface responseType {
  status: 200
  success: true
}

export interface user extends responseType {
  data: {
    id: number
    login: string
    name: string
    active: 0 | 1
  }[]
}

export interface genre extends responseType {
  data: {
    active: 0 | 1
    alias: string
    id: number
    name_orig: string
  }[]
}

export interface sending extends responseType {
  data: {
    genre_id: number
    genre_name: string
    id: number
    user_id: number
    user_name: string
  }[]
}