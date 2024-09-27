import StudentTable from "./StudentTable";
import { useQuery } from "@tanstack/react-query";

const ManageStudent = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userData"],
    queryFn: () =>
      fetch("http://localhost:5000/getAll").then((res) => res.json()),
  });

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
      <StudentTable data={data} />
    </div>
  );
};

export default ManageStudent;
