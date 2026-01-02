const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

export function isValidEmail(email: string): boolean {
  return emailRegex.test(email);
}

export function isValidPassword(password: string): boolean {
  return passwordRegex.test(password);
}
