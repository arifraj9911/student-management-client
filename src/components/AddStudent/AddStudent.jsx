import { useState } from "react";
import { Form, ButtonToolbar, Button } from "rsuite";
import { SelectPicker, Stack } from "rsuite";

const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
].map((item) => ({ label: item, value: item }));

const AddStudent = () => {
  // Form state
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    class: "",
    division: "",
    roll: "",
    address1: "",
    address2: "",
    landmark: "",
    city: "",
    pincode: "",
  });

  // Form field er value handle korar function
  const handleChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-lg font-semibold">Add Student</p>
        <p className="text-lg">27-09-2024</p>
      </div>
      <Form fluid>
        <div className="flex gap-6 ">
          <Form.Group className="w-full" controlId="first-name">
            <Form.Control
              name="fname"
              placeholder="First Name"
              value={formData.fname}
              onChange={(value) => handleChange(value, "fname")}
            />
          </Form.Group>
          <Form.Group className="w-full" controlId="middle-name">
            <Form.Control
              name="mname"
              placeholder="Middle Name"
              value={formData.mname}
              onChange={(value) => handleChange(value, "mname")}
            />
          </Form.Group>
          <Form.Group className="w-full" controlId="last-name">
            <Form.Control
              name="lname"
              placeholder="Last Name"
              value={formData.lname}
              onChange={(value) => handleChange(value, "lname")}
            />
          </Form.Group>
        </div>

        <div className="mb-5 flex gap-6">
          <Stack
            spacing={10}
            direction="column"
            className="w-full"
            alignItems="flex-start"
          >
            <SelectPicker
              data={data}
              searchable={false}
              style={{ width: 350 }}
              placeholder="Select Class"
              value={formData.class}
              onChange={(value) => handleChange(value, "class")}
            />
          </Stack>
          <Stack spacing={10} className="w-full">
            <SelectPicker
              data={data}
              searchable={false}
              style={{ width: 350 }}
              placeholder="Select Division"
              value={formData.division}
              onChange={(value) => handleChange(value, "division")}
            />
          </Stack>
          <Form.Group className="w-full" controlId="roll-number">
            <Form.Control
              name="roll"
              placeholder="Enter roll number in digit"
              value={formData.roll}
              onChange={(value) => handleChange(value, "roll")}
            />
          </Form.Group>
        </div>

        {/* Rest of the form fields */}
        <div className="flex gap-6">
          <Form.Group className="w-full" controlId="address-1">
            <Form.Control
              name="address1"
              placeholder="Address Line 1"
              value={formData.address1}
              onChange={(value) => handleChange(value, "address1")}
            />
          </Form.Group>
          <Form.Group className="w-full" controlId="address-2">
            <Form.Control
              name="address2"
              placeholder="Address Line 2"
              value={formData.address2}
              onChange={(value) => handleChange(value, "address2")}
            />
          </Form.Group>
        </div>
        <div className="flex gap-6 ">
          <Form.Group className="w-full" controlId="landmark">
            <Form.Control
              name="landmark"
              placeholder="Land Mark"
              value={formData.landmark}
              onChange={(value) => handleChange(value, "landmark")}
            />
          </Form.Group>
          <Form.Group className="w-full" controlId="city">
            <Form.Control
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={(value) => handleChange(value, "city")}
            />
          </Form.Group>
          <Form.Group className="w-full" controlId="pincode">
            <Form.Control
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={(value) => handleChange(value, "pincode")}
            />
          </Form.Group>
        </div>

        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}>
              Add Student
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddStudent;
