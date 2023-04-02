'use client'
import React from 'react'
import Image from 'next/image'
import { UIInputForm, UIText } from '@/components'
import {
  type SubmitHandler,
  useForm,
  type FieldValues,
  FormProvider,
} from 'react-hook-form'
import UIButton from '@/components/Button/UIButton'
import { SU_DESCRIPTION, SU_FIELDS, SU_TITLE } from '@/constants/sign-up'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import cn from 'classnames'

const SignUpPage = (): JSX.Element => {
  const { isDesktop, isMobile } = useMediaQuery()
  const method = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }
  return (
    <div className="flex flex-col tablet:flex-row desktop:mb-0">
      <div
        className={cn('relative tablet:flex-1', {
          'w-full h-[232px]': isMobile,
        })}
      >
        <Image fill src="/images/signup-bg.png" alt="sign up background" />
      </div>
      <div className="flex-1 space-y-5 tablet:ml-5 mb-5 px-5">
        <div
          className={cn('my-2', {
            'w-2/3': isDesktop,
            'w-full': !isDesktop,
            'text-center': isMobile,
          })}
        >
          <UIText
            text={SU_TITLE}
            sizeDesktop="h2"
            sizeTablet="h3"
            sizeMobile="h3"
          />
          <UIText
            text={SU_DESCRIPTION}
            sizeDesktop="h5"
            sizeTablet="default"
            sizeMobile="default"
          />
        </div>
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(onSubmit)}>
            <div className="gap-5 flex flex-col">
              {SU_FIELDS.map((field) => (
                <UIInputForm
                  key={field.fieldName}
                  imgAlt={field.imgAlt}
                  imgSrc={field.imgSrc}
                  placeHolder={field.placeHolder}
                  fieldName={field.fieldName}
                  validate={field.validate}
                  type={field.type}
                  isRequired
                />
              ))}
              <input type="submit" hidden />
              <div
                className={cn({
                  'w-full': !isDesktop,
                  'w-1/2': isDesktop,
                })}
              >
                <UIButton variant="filled" fullWidth>
                  Create account
                </UIButton>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default SignUpPage
