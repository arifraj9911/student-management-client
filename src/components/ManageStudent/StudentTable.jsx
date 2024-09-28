/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Table } from "rsuite";
import EditStudentModal from "./EditStudentModal";

const { Column, HeaderCell, Cell } = Table;

const StudentTable = ({ data, handleDeleteStudent,handleUpdateStudent }) => {
  const [open, setOpen] = useState(false);
  const [selectedRowData,setSelectedRowData] = useState(null)

  const handleOpen = (rowData) => {
    setSelectedRowData(rowData)
    setOpen(true)
  };

  return (
    <div>
      <Table
        height={400}
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
        autoHeight // Adjusts the height based on the data
      >
        <Column flexGrow={1} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="fname" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Class</HeaderCell>
          <Cell dataKey="class" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Roll</HeaderCell>
          <Cell dataKey="roll" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell>CreatedAt</HeaderCell>
          <Cell dataKey="createdAt" />
        </Column>

        <Column flexGrow={2} fixed="right">
          <HeaderCell>View/Edit/Delete</HeaderCell>
          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <div className="flex items-center gap-3">
                <IoEyeOutline
                  onClick={() => alert(`clicked eye ${rowData?.roll}`)}
                  className="text-2xl text-[#F33823] hover:text-blue-400 cursor-pointer"
                />
                <CiEdit
                  onClick={() => handleOpen(rowData)}
                  className="text-2xl text-[#F33823] hover:text-blue-400 cursor-pointer"
                />
                <RiDeleteBin6Line
                  onClick={() => handleDeleteStudent(rowData?.roll)}
                  className="text-2xl text-[#F33823] hover:text-blue-400 cursor-pointer"
                />
              </div>
            )}
          </Cell>
        </Column>
        
      </Table>
      {/* edit modal */}
      <EditStudentModal open={open} setOpen={setOpen} updatedData={selectedRowData} handleUpdateStudent={handleUpdateStudent}></EditStudentModal>
    </div>
  );
};

export default StudentTable;
