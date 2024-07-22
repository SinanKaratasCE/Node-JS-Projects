// eslint-disable-next-line no-unused-vars
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    //  this.status = {`statusCode`}
  }
}
