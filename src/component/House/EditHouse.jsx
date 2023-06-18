import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

import { editHouse } from 'state/house'

const editHouseSchema = object({
  name: string().required(),
})

export const EditHouse = ({ house }) => {
  return <Formik
    initialValues={{ name: house.name || '' }}
    validationSchema={editHouseSchema}
    onSubmit={({ name }, { setSubmitting }) => {
      setSubmitting(false)
      editHouse(house.id, name)
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
}
