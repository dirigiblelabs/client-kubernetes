let AlreadyExistsError = function(message, details) {
  this.name = "AlreadyExistsError";
  this.message = (message || "");
  this.details = (details || "");
  this.reason = 'AlreadyExists';
  this.code = 409;
  this.status = 'Failure';
}
AlreadyExistsError.prototype = Error.prototype;
exports.AlreadyExistsError = AlreadyExistsError;

let NotFoundError = function(message, details) {
  this.name = "NotFoundError";
  this.message = (message || "");
  this.details = (details || "");
  this.reason = 'NotFound';
  this.code = 404;
  this.status = 'Failure';
}
NotFoundError.prototype = Error.prototype;
exports.NotFoundError = NotFoundError;