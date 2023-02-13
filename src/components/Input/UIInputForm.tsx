import React, { useState } from 'react'
import Image from 'next/image'
import {
  type UseFormRegister,
  type FieldValues,
  type UseFormWatch,
} from 'react-hook-form'

interface Props {
  imgSrc: string
  imgAlt: string
  register: UseFormRegister<FieldValues>
  fieldName: string
  errors: any
  placeHolder: string
  isRequired: boolean
  validate?: Record<string, any>
  type: string
  watch: UseFormWatch<FieldValues>
}

export const UIInputForm = ({
  imgSrc,
  imgAlt,
  register,
  fieldName,
  errors,
  placeHolder,
  isRequired,
  validate,
  type,
  watch,
}: Props): JSX.Element => {
  const [typePassword, setTypePassword] = useState('password')
  console.log(errors)
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
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-1">
          <Image width={20} height={20} src={imgSrc} alt={imgAlt} />
        </div>
        <input
          placeholder={placeHolder}
          className="w-full h-[46px] text-black-color text-base placeholder:text-base rounded-full pl-10"
          {...register(fieldName, {
            required: {
              value: isRequired,
              message: 'This field is required',
            },
            validate:
              type === 'password'
                ? () => {
                    if (watch('password') !== watch('confirmPassword')) {
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
        {errors[fieldName] != null && (
          <span className="absolute top-[46px] left-0 text-caption text-red-500">
            {errors[fieldName].message}
          </span>
        )}
      </div>
    </>
  )
}
