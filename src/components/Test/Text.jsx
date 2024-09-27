const Test = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form?.name.value;
    const email = form?.email.value;
    const designation = form?.designation.value;
    const empId = form?.empId.value;

    const formData = { name, email, designation, empId };

    console.log(formData);

    fetch("http://localhost:5000/addUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div>
      <h2 className="text-2xl text-center mb-6">Test File</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-1/2 mx-auto"
      >
        <input
          type="text"
          className="py-2 px-4 border outline-none"
          placeholder="name"
          name="name"
        />
        <input
          type="email"
          className="py-2 px-4 border outline-none"
          placeholder="email"
          name="email"
        />
        <input
          type="text"
          className="py-2 px-4 border outline-none"
          placeholder="designation"
          name="designation"
        />
        <input
          type="text"
          className="py-2 px-4 border outline-none"
          placeholder="emp id"
          name="empId"
        />
        <input
          className="bg-blue-400 text-white py-2 px-3 rounded-lg"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Test;
