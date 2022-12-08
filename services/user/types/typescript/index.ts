export interface IUserService {
  Create: () => IUser
  Delete: (data: IUserById) => void
  Activate: (data: IUserById) => void
  Deactivate: (data: IUserById) => void
  Ban: (data: IUserById) => void
  Unban: (data: IUserById) => void
  List: (data: IUserListRequest) => IUserListResponse
}

export interface IUser {
  id: string
  createdAt: string
  isBanned: boolean
  isActive: boolean
}

export interface IUserById {
  id: string
}

export interface IUserListRequest {
  skip?: number
}

export interface IUserListResponse {
  users: IUser[]
}
