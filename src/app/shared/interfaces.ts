export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FbAuthRes {
  idToken: string
  expiresIn: string
}
