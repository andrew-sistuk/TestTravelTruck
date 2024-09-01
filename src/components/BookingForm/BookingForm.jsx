import { useId } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import FormButton from "../FormButton/FormButton.jsx";
import css from "./BookingForm.module.css";

const regex = {
  emailRegexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The name must consist of at least 3 characters")
    .max(40, "The name must contain a maximum of 40 characters")
    .required("Please fill in the field"),
  email: Yup.string()
    .min(6, "Email address must contain at least 6 characters")
    .max(30, "Email address must contain no more than 30 characters")
    .required("Please fill in the field")
    .matches(regex.emailRegexp, "Please enter a valid email address"),
  date: Yup.string().required("Please fill in the field"),
});

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

export default function BookingForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const commentFieldId = useId();

  const handleSubmit = (values, actions) => {
    toast("Camper successfully booked!", {
      style: {
        color: "#101828",
        backgroundColor: "#ffc531",
      },
    });
    actions.resetForm();
  };

  return (
    <div className={css.bookingFormWrapper}>
      <h2 className={css.titleForm}>Book your campervan now</h2>
      <p className={css.formDescription}>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.formContainer} autoComplete="off">
          <Field
            className={css.input}
            label="Name"
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Name*"
            required
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <Field
            className={css.input}
            label="Email"
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email*"
            required
          />
          <ErrorMessage className={css.error} name="email" component="span" />
          <Field className={css.input} type="date" name="date" id={dateFieldId} placeholder="Booking date*" required />
          <Field
            className={css.commentInput}
            as="textarea"
            name="comment"
            id={commentFieldId}
            placeholder="Comment"
            rows="4"
          />
          <ErrorMessage className={css.error} name="date" component="span" />
          <FormButton>Send</FormButton>
        </Form>
      </Formik>
    </div>
  );
}
