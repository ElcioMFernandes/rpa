import Frame from "@/components/Frame";
import { Table } from "@/components/Table";

const Queue = () => {
  const headers = ["Name", "Age", "Email"];
  const data = [
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
    { Name: "John Doe", Age: 28, Email: "john@example.com" },
    { Name: "Jane Smith", Age: 34, Email: "jane@example.com" },
    { Name: "Sam Green", Age: 45, Email: "sam@example.com" },
  ];

  return (
    <Frame>
      <Table title="Teste" headers={headers} data={data} />
      </Frame>
  );
};

export default Queue;
