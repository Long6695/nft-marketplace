import React from 'react'
import Image from 'next/image'
import { UIInputForm, UIText, UITitle } from '@/components'
import {
  type SubmitHandler,
  useForm,
  type FieldValues,
  FormProvider,
} from 'react-hook-form'
import UIButton from '@/components/Button/UIButton'
import { SU_DESCRIPTION, SU_FIELDS, SU_TITLE } from '@/constants/sign-up'

const SignUpPage = (): JSX.Element => {
  const method = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }
  return (
    <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:gap-10 desktop:gap-[60px]">
      <div className="relative w-screen h-[232px] tablet:w-1/2 tablet:h-screen">
        <Image
          fill
          sizes="(min-width: 375px) 100vw,
              (min-width: 834px) 50vw"
          src="/images/signup-bg.png"
          alt="sign up background"
        />
      </div>
      <div className="flex flex-col items-center tablet:w-[325px] tablet:flex-1 tablet:items-start desktop:w-[460px] gap-5 m-10">
        <UITitle title={SU_TITLE} variant="h2" />
        <UIText text={SU_DESCRIPTION} />
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(onSubmit)}>
            <div className="flex flex-col w-[315px] tablet:w-[325px] desktop:w-[330px] gap-5 mt-5 mb-8">
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
            </div>
            <UIButton variant="filled" fullWidth>
              Create account
            </UIButton>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default SignUpPage
