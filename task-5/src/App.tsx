import { ReactNode } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type TextIconType = {
  content: string;
  icon: ReactNode;
};
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit_ = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <div className="app">
      <div className="heading-container">
        <h1>CONTACT</h1>
      </div>
      <div className="form-container">
        <div className="icons">
          <TextIcon
            content={"contact@us"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                />
              </svg>
            }
          />
          <TextIcon
            content={"+12345"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            }
          />
        </div>
        <form onSubmit={onSubmit_} className="form">
          <label htmlFor="" className="label">
            Name
          </label>
          <input
            placeholder="Enter your name here ..."
            {...register("name", { required: true })}
            className={errors.name && "error-input"}
          />
          {errors.name && <span className="error">Name is required</span>}
          <label htmlFor="" className="label">
            Email
          </label>
          <input
            placeholder="Enter your email here ..."
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={errors.email && "error-input"}
          />
          {errors.email && (
            <span className="error">
              {errors.email.type == "pattern"
                ? errors.email.message
                : "Email is Required"}
            </span>
          )}
          <label htmlFor="" className="label">
            Message
          </label>
          <textarea
            placeholder="Enter your message here ..."
            {...register("message", { required: true })}
            className={errors.message && "error-input"}
          ></textarea>
          {errors.message && <span className="error">Message is required</span>}
          <input type="submit" value="Send" className="submit-btn" />
        </form>
      </div>
    </div>
  );
}

const TextIcon = ({ content, icon }: TextIconType) => {
  return (
    <div className="text-icon">
      <span>{icon}</span>
      <p>{content}</p>
    </div>
  );
};
