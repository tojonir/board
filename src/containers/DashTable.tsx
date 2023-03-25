import { FC } from "react";

interface DashTableProps {
  title?: string;
  buttonLabel?: string;
  header?: string[];
  data?: any[];
}

const DashTable: FC<DashTableProps> = ({
  title,
  buttonLabel,
  header,
  data,
}) => {
  return (
    <div className="">
      <div className="flex justify-between items-center p-2">
        <p className="font-semibold capitalize">{title}</p>
        <button className="border text-gray-600 rounded-[3px] p-1 px-2">
          {buttonLabel}
        </button>
      </div>
      <div className="w-full my-2">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              {header?.map((h, i) => (
                <th key={i} className="text-left font-normal p-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((r, i) => (
              <tr key={i}>
                {r.map((c: any, i: number) => (
                  <td key={i} className="text-left font-normal p-2 capitalize">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashTable;
