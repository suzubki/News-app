export const validateEmail = (email: string) => {
  const regEXP =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  return regEXP.test(email)
}
