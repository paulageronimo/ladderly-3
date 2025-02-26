import React, { Suspense } from "react"
import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/core/components/Form"

export function ChecklistItemForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField
        name="displayText"
        label="Display Text"
        placeholder="Display Text"
        type="text"
      />
      <LabeledTextField
        name="isComplete"
        label="Is Complete"
        placeholder="Is Complete"
        type="text"
      />
      <LabeledTextField name="user" label="User" placeholder="User" type="text" />
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
