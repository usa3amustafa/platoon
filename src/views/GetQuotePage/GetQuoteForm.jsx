import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import emailjs from "emailjs-com"

const ContactForm = () => {
  const [popupMessage, setPopupMessage] = useState("")
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must be numeric")
        .required("Phone number is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .send(
          "service_ocfl0ad", // Replace with your EmailJS service ID
          "template_mxcb1dm", // Replace with your EmailJS template ID
          values,
          "PIb81ZaGBGe52e24T" // Replace with your EmailJS user ID
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text)
          resetForm()
          setPopupMessage("Your message has been sent successfully!")
          setIsPopupVisible(true)
        })
        .catch((error) => {
          console.error("FAILED...", error)
          setPopupMessage("Failed to send message, please try again later.")
          setIsPopupVisible(true)
        })
        .finally(() => {
          setSubmitting(false)
        })
    },
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="garet-book"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <span className="loading-spinner"></span>
          ) : (
            "Get Quote"
          )}
        </button>
      </form>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2 className="garet-book">
              {popupMessage.includes("success") ? "Success!" : "Error"}
            </h2>
            <p className="garet-book">{popupMessage}</p>
            <button onClick={() => setIsPopupVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactForm
