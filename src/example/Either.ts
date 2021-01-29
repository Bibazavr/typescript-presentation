import {AuthorizationFailed, Ok} from "./promiseNotWorking";
import {Either, left, right} from "fp-ts/Either";


const getSomething = async (): Promise<Either<AuthorizationFailed, Ok<string>>> => {
  const result = fetch('https://localhost/api/v1/something')
  return result.then((response) => {
      if (!response.ok)
        return left(new AuthorizationFailed('ads'))
      return right(new Ok('biba'))
    }
  )
}

