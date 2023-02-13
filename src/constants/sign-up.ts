export const SU_TITLE = 'Create Account'

export const SU_DESCRIPTION = `Welcome! enter your details and start creating, collecting and selling
NFTs.`

export const SU_FIELDS = [
  {
    imgAlt: 'username',
    imgSrc: '/images/user.png',
    placeHolder: 'Username',
    fieldName: 'userName',
    type: 'text',
  },
  {
    imgAlt: 'email address',
    imgSrc: '/images/envelope.png',
    placeHolder: 'Email Address',
    fieldName: 'email',
    validate: {
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Entered value does not match email format',
      },
    },
    type: 'email',
  },
  {
    imgAlt: 'lock-key',
    imgSrc: '/images/lock-key.png',
    placeHolder: 'Password',
    fieldName: 'password',
    validate: {
      minLength: {
        value: 6,
        message: `Value must be minimum 6`,
      },
    },
    type: 'password',
  },
  {
    imgAlt: 'lock-key',
    imgSrc: '/images/lock-key.png',
    placeHolder: 'Confirm Password',
    fieldName: 'confirmPassword',
    type: 'password',
  },
]
