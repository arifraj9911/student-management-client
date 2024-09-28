import Swal from "sweetalert2";
import StudentTable from "./StudentTable";
import { useQuery } from "@tanstack/react-query";

const ManageStudent = () => {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["studentData"],
    queryFn: () =>
      fetch("http://localhost:5000/getAllStudent").then((res) => res.json()),
  });

  const handleUpdateStudent = (data,roll)=>{
    fetch(`http://localhost:5000/updateStudent/${roll}`, {
      method: "PUT",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Updated!",
          text: "Your file has been updated.",
          icon: "success",
        });
        refetch();
      });
  }

  const handleDeleteStudent = (roll) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteStudent/${roll}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          });
      }
    });
  };

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // console.log(data);
  return (
    <div>
      <div className="flex justify-between items-center gap-6 mb-6">
        <p className="text-lg font-semibold">Manage Students</p>
        <div>
          <input
            type="text"
            className="py-2 px-4 border w-60 bg-[#f1f2f3] text-black outline-none rounded-md"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-6">
          <p className="bg-[#f8fcff] my-auto py-2 px-4 rounded-md border">
            Export
          </p>
          <p className="bg-[#f8fcff] my-auto py-2 px-4 rounded-md border">
            Filter
          </p>
          <p className="bg-[#f8fcff] my-auto py-2 px-4 rounded-md border">
            Print
          </p>
        </div>
        <p>26 January 2025, 11.00 PM</p>
      </div>
      {/* table */}
      <StudentTable data={data} handleDeleteStudent={handleDeleteStudent} handleUpdateStudent={handleUpdateStudent}/>
    </div>
  );
};

export default ManageStudent;
