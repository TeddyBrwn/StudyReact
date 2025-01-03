import { useState } from "react";

// Component InputField
const InputField = ({ label, type, name, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block mb-1 font-semibold">{label}</label>
    <input
      className="appearance-none shadow-none focus:outline-none w-full border border-gray-300 rounded-md p-2"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

function InputFormDataPage() {
  const [submittedData, setSubmittedData] = useState(null);

  // useState for form data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", data);
    setSubmittedData(data);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <button
          className="w-full bg-black rounded-full text-white py-2 shadow-md"
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* Show submitted data */}
      {submittedData ? (
        <div className="mt-4 p-4 border rounded-md">
          <h3 className="font-semibold text-lg">Submitted Data:</h3>
          <p>Name: {submittedData.name || "none"}</p>
          <p>Email: {submittedData.email || "none"}</p>
          <p>Password: {submittedData.password || "none"}</p>
        </div>
      ) : (
        <div className="mt-4 p-4 border rounded-md">
          <h3 className="font-semibold text-lg">Submitted Data:</h3>
          <p>Name: none</p>
          <p>Email: none</p>
          <p>Password: none</p>
        </div>
      )}
    </div>
  );
}

export default InputFormDataPage;
