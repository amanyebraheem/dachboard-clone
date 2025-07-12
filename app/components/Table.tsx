type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type TableProps<T> = {
  columns: Column[];
  renderRow: (item: T, index: number) => React.ReactNode;
  data: T[];
};

function Table<T>({ columns, renderRow, data }: TableProps<T>) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item, index) => renderRow(item, index))}</tbody>
    </table>
  );
}

export default Table;
