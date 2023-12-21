import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <section className="h-screen">
      <div className="container mx-auto">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12  py-24">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Auth;
