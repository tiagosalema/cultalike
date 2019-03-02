import React from "react";
import { withFormik, Form, Field } from "formik";

const FormTemplate = ({ isSubmitting }) => (
  <Form>
    <Field type="text" name="title" placeholder="Movie" />
    <Field type="number" name="rate" placeholder="Rate" />
    <button type="submit" disabled={isSubmitting}>
      Create
    </button>
  </Form>
);

const FormikApp = withFormik({
  mapPropsToValues({ title, rate }) {
    return {
      title: title || "",
      rate: rate || ""
    };
  },
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      console.log(values);

      if (values.title === "already taken") {
        setErrors({ title: "That movie is already taken" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(FormTemplate);

export default FormikApp;
