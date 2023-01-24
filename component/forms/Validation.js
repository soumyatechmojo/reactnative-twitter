import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is requiured"),
    
    lastName: Yup.string().required("Last Name is required"),
    
    email: Yup.string().email("Enter a valid E-mail")
                    .required("Please enter a register email"),
    
                    password: Yup.string()
                .required("Please enter a password")
                .min(6,"Password must have atleast 6 characters"),
    
    confirmPassword: Yup.string()
                        .required("Please confirm the password")
                        .oneOf([Yup.ref("password")],
                        "Password and Confirm password does not match")
})