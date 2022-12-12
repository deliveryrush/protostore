export interface IUserService {
  Create: () => Promise<IUser>
  Delete: (data: IUserById) => Promise<boolean>
  Activate: (data: IUserById) => Promise<boolean>
  Deactivate: (data: IUserById) => Promise<boolean>
  Ban: (data: IUserById) => Promise<boolean>
  Unban: (data: IUserById) => Promise<boolean>
  List: (data: IUserListRequest) => Promise<IUserListResponse>
}

export interface IUser {
  id: string
  createdAt: Date
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
