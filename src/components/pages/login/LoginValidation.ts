export const EmailFieldValidation = {
  required: "Email field is required.",
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
    message: "Invalid email. Ex.: email@email.email",
  },
};

export const PasswordFieldValidation = {
  required: "Password field is required.",
  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "Password must contain at least: one lowercase char, one uppercase char, one number and minimum 8 character",
  },
};
