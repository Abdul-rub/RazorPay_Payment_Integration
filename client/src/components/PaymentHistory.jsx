import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTable } from "react-table";
import { Text } from "@chakra-ui/react";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const response = await axios.get("https://razorpay-integration.onrender.com/api/paymenthistory");
        const { success, paymentHistory } = response.data;
        if (success) {
          setPaymentHistory(paymentHistory);
        } else {
          console.error("Failed to fetch payment history.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPaymentHistory();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Order ID",
        accessor: "razorpay_order_id",
      },
      {
        Header: "Payment ID",
        accessor: "razorpay_payment_id",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => new Date(value).toLocaleString(),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: paymentHistory });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <>
      <Text fontSize={40}>Payment History</Text>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <table {...getTableProps()} style={{ borderCollapse: "collapse" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ border: "1px solid black", padding: "8px" }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{ border: "1px solid black", padding: "8px" }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default PaymentHistory;
