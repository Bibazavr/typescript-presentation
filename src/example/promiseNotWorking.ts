export class AuthorizationFailed extends Error {
}

export class Ok<T> {
  constructor(public readonly value?: T) {
  }
}

export class Failed<T> {
  constructor(public readonly error?: T) {
  }
}

const getSomething = async (): Promise<Ok<void> | Failed<AuthorizationFailed>> => {
  const result = fetch('https://localhost/api/v1/something')
  return result.then((response) => {
      return response instanceof Failed ? new Failed(new AuthorizationFailed('ads'))
        : {}
    }
  )
}
