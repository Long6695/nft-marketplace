import React from 'react'
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
  maximLength?: number
  minimLength?: number
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
  maximLength = 0,
  minimLength = 0,
  validate,
  type,
  watch,
}: Props): JSX.Element => {
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
            maxLength:
              maximLength !== undefined && maximLength > 0
                ? {
                    value: maximLength,
                    message: `Value must be maximum ${maximLength}`,
                  }
                : undefined,
            minLength:
              minimLength !== undefined && minimLength > 0
                ? {
                    value: minimLength,
                    message: `Value must be minimum ${minimLength}`,
                  }
                : undefined,
            validate:
              type === 'password'
                ? () => {
                    if (watch('password') !== watch('confirmPassword')) {
                      return 'Your password do not match'
                    }
                  }
                : undefined,
            ...validate,
          })}
          type={type}
        />
        {errors[fieldName] != null && (
          <span className="absolute top-[46px] left-0 text-caption text-red-500">
            {errors[fieldName].message}
          </span>
        )}
      </div>
    </>
  )
}
