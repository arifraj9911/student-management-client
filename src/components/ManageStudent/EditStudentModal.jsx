/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Modal, Button, Form, Stack, SelectPicker } from "rsuite";

const classData = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
].map((item) => ({ label: item, value: item }));

const divisionData = ["A", "B", "C", "D", "E"].map((item) => ({
  label: item,
  value: item,
}));

const EditStudentModal = ({
  open,
  setOpen,
  updatedData,
  handleUpdateStudent,
}) => {
  const handleClose = () => setOpen(false);

  //   console.log(formData);

  //   Form state
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

  useEffect(() => {
    if (updatedData) {
      setFormData(updatedData);
    }
  }, [updatedData]);

  // Form field er value handle korar function
  const handleChange = (value, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    handleUpdateStudent(formData, formData.roll);
    handleClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-hidden={!open}
        aria-modal="true"
      >
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid>
            <div className="flex flex-col -space-y-1">
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

            <div className="mb-5 flex  gap-4 mt-4">
              {/* class */}
              <Stack
                spacing={10}
                direction="column"
                className=""
                alignItems="flex-start"
              >
                <SelectPicker
                  data={classData}
                  searchable={false}
                  //   style={{ width: 350 }}
                  placeholder="Select Class"
                  value={formData.class}
                  onChange={(value) => handleChange(value, "class")}
                />
              </Stack>

              {/* division */}
              <Stack spacing={10} className="">
                <SelectPicker
                  data={divisionData}
                  searchable={false}
                  //   style={{ width: 350 }}
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} appearance="primary">
            Update
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditStudentModal;
