export interface IRequest {
  traceId: string
  serviceId: string
  data: any
}

export interface ILoggerService {
  Log: (data: IRequest) => void
}
