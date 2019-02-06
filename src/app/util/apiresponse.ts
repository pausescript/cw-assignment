export class ApiResponse {
  public Data: any;
  public ErrorCode: string;
  public Message: string;

  constructor();
  constructor(data: any, errorCode: string, message: string);
  constructor(data?: any, errorCode?: string, message?: string) {
    this.Data = data;
    this.ErrorCode = errorCode;
    this.Message = message;
  }
}
