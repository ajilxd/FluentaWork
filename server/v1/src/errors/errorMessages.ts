export const errObj = {
  unauthorized: {
    code: 403,
    message: "Unauthorized action",
  },
  notFound: {
    code: 404,
    message: "Resource not found",
  },
  serverError: {
    code: 500,
    message: "Internal server error",
  },
  badRequest: {
    code: 400,
    message: "Bad request. Check the request format and parameters.",
  },
  forbidden: {
    code: 403,
    message: "You do not have permission to perform this action.",
  },
  validationError: {
    code: 422,
    message: "Validation error. Please provide valid input.",
  },
};
