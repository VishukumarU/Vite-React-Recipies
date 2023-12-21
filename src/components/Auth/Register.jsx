import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useEffect } from "react";

const Register = () => {
  const actionData = useActionData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First Name is too short!")
      .max(50, "First Name is too long!")
      .required("First Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email Address is required"),
    password: Yup.string().min(6).max(20).required("Password is required"),
  });

  useEffect(() => {
    if (actionData?.isLoggedIn) {
      dispatch(authActions.login());
      navigate("/home");
    }
  }, [actionData?.isLoggedIn]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={true}
    >
      {({ errors, touched, isValid, dirty, resetForm }) => (
        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
          <div className="w-full flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-fuchsia-800 rounded-full flex justify-center items-center">
              <LockClosedIcon className="h-8 w-8 text-white" />
            </div>
            <span className="inline-block mt-4 text-xl">Sign up</span>
          </div>
          <Form method="POST">
            <div className="mb-5 flex w-full justify-between">
              <div className="relative w-2/4 mr-4">
                <Field
                  type="text"
                  id="first-name"
                  name="firstName"
                  className={`block rounded-t-lg px-2.5 pb-5 pt-10 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0\ peer ${
                    errors.firstName && touched.firstName
                      ? "border-orange-400"
                      : "focus:border-primary"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="first-name"
                  className="absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-8 z-10 origin-[0] start-2.5 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  First Name
                </label>
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="text-orange-600 text-xs"
                />
              </div>
              <div className="relative w-2/4">
                <Field
                  type="text"
                  id="last-name"
                  name="lastName"
                  className="block rounded-t-lg px-2.5 pb-5 pt-10 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                />
                <label
                  htmlFor="last-name"
                  className="absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-8 z-10 origin-[0] start-2.5 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Last Name
                </label>
              </div>
            </div>
            <div className="relative mb-5">
              <Field
                type="text"
                id="email"
                name="email"
                className={`block rounded-t-lg px-2.5 pb-5 pt-10 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer ${
                  errors.email && touched.email
                    ? "border-orange-400"
                    : "focus:border-primary"
                }`}
                placeholder=""
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-8 z-10 origin-[0] start-2.5 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email Address
              </label>
              <ErrorMessage
                name="email"
                component="span"
                className="text-orange-600 text-xs"
              />
            </div>
            <div className="relative mb-16">
              <Field
                type="password"
                id="password"
                name="password"
                className={`block rounded-t-lg px-2.5 pb-5 pt-10 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer ${
                  errors.password && touched.password
                    ? "border-orange-400"
                    : "focus:border-primary"
                }`}
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-primary dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-8 z-10 origin-[0] start-2.5 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Password
              </label>
              <ErrorMessage
                name="password"
                component="span"
                className="text-orange-600 text-xs"
              />
            </div>

            <button
              type="submit"
              className={`inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] ${
                !(isValid && dirty)
                  ? "bg-slate-500"
                  : "hover:bg-primary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              }`}
            >
              Login
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Register;

export const action = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    localStorage.setItem("isLoggedIn", true);
    await updateProfile(auth.currentUser, {
      displayName: `${firstName}${lastName ? ` ${lastName}` : ""}`,
    });
    toast.success(`Welcome ${auth.currentUser.displayName}`);

    return {
      isLoggedIn: true,
    };
  } catch (error) {
    const { code } = error;
    let errorMsg = "";
    switch (code) {
      case `auth/email-already-in-use`:
        errorMsg = "This email already exists. Please use a different one";
        break;
      default:
        errorMsg = "An error occured when creating the user!";
        break;
    }
    toast.error(errorMsg);
    return null;
  }
};
