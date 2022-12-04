export interface IResponse {
  isAllowed: boolean
}

export interface IRequest {
  requestId: string
  serviceId?: string
  maxAttemptsNumber: number
  timeInterval: number
}

export interface ILimiterService {
  IsAllowed: (data: IRequest) => IResponse
}
