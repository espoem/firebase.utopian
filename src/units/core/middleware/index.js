// pre middleware.
import logger from './logger'
import cors from './cors'
import json from './json'
import urlencoded from './url-encoded'

// after middleware.
import errorHandler from './errorHandler'

// export pre middleware.
export const pre = {
  logger,
  cors,
  json,
  urlencoded
}

// export post middleware.
export const post = {
  errorHandler
}

// export both middleware groups as a default object.
export default {
  pre, post
}
