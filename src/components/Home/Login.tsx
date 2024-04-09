import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserMutationUser from "../../common/hooks/user/UserMutationUser";
// const signinSchema = Joi.object({
//   email: Joi.string()
//       .email({ tlds: { allow: false } })
//       .min(3)
//       .required(),
//   password: Joi.string().min(6).required(),
// });

const Login = () => {
  const navigate = useNavigate();
  const { form, onSubmit } = UserMutationUser({
    action: "LOGIN",
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Login thành công!",
        position: "center",
        showConfirmButton: true,
        showCloseButton: true,
        timer: 2000,
        customClass: {
          popup: "my-toasts",
        },
      }).then(() => {
        navigate("/");
      });
    },
    onErrors: () => {
      Swal.fire({
        icon: "error",
        title: "Đăng nhập thất bại!",
        position: "center",
        showConfirmButton: true,
        showCloseButton: true,
        timer: 4000,
        customClass: {
          popup: "my-toasts",
        },
      });
    },
  });
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={form.handleSubmit(onSubmit)} className="form-login">
          <div className="login-top">
            <Link to="/" className="form-close">
              x
            </Link>
          </div>
          <div className="form-title">
            <h4 className="form-text">Login</h4>
          </div>
          <div className="login-field">
            <label htmlFor="">Email:</label>
            <br></br>
            <input
              type="email"
              {...form.register("email", { required: true })}
            />
            <br></br>
            {form.formState.errors.email && (
              <span className="text-red-700 font-bold">
                Vui lòng nhập email !
              </span>
            )}
          </div>
          <div className="login-field">
            <label htmlFor="">Password:</label>
            <br></br>
            <input
              type="password"
              {...form.register("password", { required: true })}
            />{" "}
            <br></br>
            {form.formState.errors.password && (
              <span className="text-red-700 font-bold">
                Vui lòng nhập password !
              </span>
            )}
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
          <div className="login-add-button">
            <button className="button-one">Facebook</button>
            <button className="button-two">Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
