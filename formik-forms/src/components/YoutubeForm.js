import { useFormik } from "formik";

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // console.log(formik.values)
  return (
    <div className="container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div>
          {" "}
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>
        </div>
        <div>
          <label htmlFor="email">E-mail : </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
        </div>
        <div>
          {" "}
          <label htmlFor="channel">Channel : </label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default YoutubeForm;
