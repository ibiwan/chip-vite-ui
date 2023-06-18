import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

import { loginUser } from 'state/user'

const loginSchema = object({
  username: string().required(),
  password: string().required(),
})

export const Login = () => <>
  <div>Login</div>
  <Formik
    initialValues={{ username: '', password: '' }}
    validationSchema={loginSchema}
    onSubmit={({ username, password }, { setSubmitting }) => {
      setSubmitting(false)
      loginUser(username, password)
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="text" name="username" />
        <ErrorMessage name="username" component="div" />

        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
</>
