export type Result<T, E> =
  | { value: T, error?: never }
  | { value?: never, error: E };

export const tryCatch : <T, E>(attempt: () => T, recover: (error: unknown) => E) => Result<T, E> = (attempt, recover) => {
  try {
    return { value: attempt() };
  } catch (error) {
    return { error: recover(error) };
  }
}
