export interface user {
  id: number
  login: string
  name: string
  active: 0 | 1
}

export interface genre {
  active: 0 | 1
  alias: string
  id: number
  name_orig: string
}

export interface sending {
  genre_id: number
  genre_name: string
  id: number
  user_id: number
  user_name: string
}

export interface response<T> {
  data: T
  status: number
  success: boolean
}
