/* eslint-disable react/prop-types */
import { Table, Button } from "rsuite";

const { Column, HeaderCell, Cell } = Table;
// const data = users;

const StudentTable = ({ data }) => {
  return (
    <div>
      <Table
        height={400}
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={60} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={150}>
          <HeaderCell> Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={150}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={100}>
          <HeaderCell>Designation</HeaderCell>
          <Cell dataKey="designation" />
        </Column>

        <Column width={100}>
          <HeaderCell>empId</HeaderCell>
          <Cell dataKey="empId" />
        </Column>

        <Column width={150}>
          <HeaderCell>CreatedAt</HeaderCell>
          <Cell dataKey="createdAt" />
        </Column>

        <Column width={300}>
          <HeaderCell>UpdatedAt</HeaderCell>
          <Cell dataKey="updatedAt" />
        </Column>
        <Column width={80} fixed="right">
          <HeaderCell>...</HeaderCell>

          <Cell style={{ padding: "6px" }}>
            {(rowData) => (
              <Button
                appearance="link"
                onClick={() => alert(`id:${rowData.id}`)}
              >
                Edit
              </Button>
            )}
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default StudentTable;
