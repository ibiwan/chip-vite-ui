import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

import { createHouse } from 'state/house'

const addHouseSchema = object({
  name: string().required(),
})

export const AddHouse = () => <Formik
  initialValues={{ name: '' }}
  validationSchema={addHouseSchema}
  onSubmit={({ name }, { setSubmitting }) => {
    setSubmitting(false)
    createHouse(name)
  }}
>
  {({ isSubmitting }) => (
    <Form>
      <Field type="text" name="name" />
      <ErrorMessage name="name" component="div" />

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  )}
</Formik>
