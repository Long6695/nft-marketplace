import React, { useState } from 'react'
import Image from 'next/image'
import { useFormContext } from 'react-hook-form'

interface Props {
  imgSrc: string
  imgAlt: string
  fieldName: string
  placeHolder: string
  isRequired: boolean
  validate?: Record<string, any>
  type: string
}

export const UIInputForm = ({
  imgSrc,
  imgAlt,
  fieldName,
  placeHolder,
  isRequired,
  validate,
  type,
}: Props): JSX.Element => {
  const method = useFormContext()
  const {
    register,
    watch,
    formState: { errors },
  } = method
  const [typePassword, setTypePassword] = useState('password')
  const handleShowPassword = (): void => {
    if (typePassword === 'password') {
      setTypePassword('text')
    } else {
      setTypePassword('password')
    }
  }
  return (
    <>
      <div className="relative mb-4">
        <div className="absolute top-1/2 left-3 -translate-y-1/2">
          <Image width={20} height={20} src={imgSrc} alt={imgAlt} />
        </div>
        <input
          id={fieldName}
          placeholder={placeHolder}
          className="w-full h-[46px] text-black text-base placeholder:text-base rounded-full pl-10"
          aria-invalid={errors[fieldName] === undefined ? 'true' : 'false'}
          {...register(fieldName, {
            required: {
              value: isRequired,
              message: 'This field is required',
            },
            validate:
              fieldName === 'confirmPassword'
                ? (value) => {
                    if (value !== watch('password')) {
                      return 'Your password does not match'
                    }
                  }
                : undefined,
            ...validate,
          })}
          type={type === 'password' ? typePassword : type}
        />
        {type === 'password' && (
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 pt-1"
            onClick={handleShowPassword}
          >
            <Image
              width={20}
              height={20}
              src={
                type === 'password'
                  ? typePassword === 'password'
                    ? '/images/eye-slash.png'
                    : '/images/eye.png'
                  : imgSrc
              }
              alt={imgAlt}
            />
          </div>
        )}
        {errors[fieldName] !== null && (
          <span className="absolute top-[46px] left-0 text-caption text-red-500">
            {errors[fieldName]?.message as string}
          </span>
        )}
      </div>
    </>
  )
}
