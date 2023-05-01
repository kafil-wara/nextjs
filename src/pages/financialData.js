import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import AdminHeader from './components/adminHeader';

const FinancialDataPage = () => {
    const financialData = {
        data: [
            {
                "month": "January",
                "totalExpense": 8000,
                "totalIncome": 5000,
                "profit": -3000
            },
            {
                "month": "February",
                "totalExpense": 4500,
                "totalIncome": 7000,
                "profit": 2500
            },
            {
                "month": "March",
                "totalExpense": 5500,
                "totalIncome": 9000,
                "profit": 3500
            },
            {
                "month": "April",
                "totalExpense": 4000,
                "totalIncome": 6000,
                "profit": 2000
            },
            {
                "month": "May",
                "totalExpense": 6000,
                "totalIncome": 9500,
                "profit": 3500
            },
            {
                "month": "June",
                "totalExpense": 5500,
                "totalIncome": 8500,
                "profit": 3000
            },
            {
                "month": "July",
                "totalExpense": 4500,
                "totalIncome": 7500,
                "profit": 3000
            },
            {
                "month": "August",
                "totalExpense": 4000,
                "totalIncome": 7000,
                "profit": 3000
            },
            {
                "month": "September",
                "totalExpense": 5500,
                "totalIncome": 9000,
                "profit": 3500
            },
            {
                "month": "October",
                "totalExpense": 4500,
                "totalIncome": 7500,
                "profit": 3000
            },
            {
                "month": "November",
                "totalExpense": 5000,
                "totalIncome": 8000,
                "profit": 3000
            },
            {
                "month": "December",
                "totalExpense": 6000,
                "totalIncome": 9500,
                "profit": 3500
            }
        ],
    };

    return (
        <>
            <AdminHeader />
            <a href="/adminDashboard" className="text-blue-500 underline mb-4 inline-block">
          Back to Admin Dashboard
        </a>
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Financial Data</h1>
                <div className="mb-8 mx-auto">
                    <BarChart width={800} height={400} data={financialData.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="totalExpense" fill="#8884d8" />
                        <Bar dataKey="totalIncome" fill="#82ca9d" />
                        <Bar dataKey="profit" fill="#ffc658" />
                    </BarChart>
                </div>
                <table className="w-full">
    <thead>
      <tr>
        <th className="py-2">Month</th>
        <th className="py-2">Total Expense</th>
        <th className="py-2">Total Income</th>
        <th className="py-2">Profit</th>
      </tr>
    </thead>
    <tbody>
      {financialData.data.map((item) => (
        <tr key={item.month}>
          <td className="py-2">{item.month}</td>
          <td className="py-2">{item.totalExpense}</td>
          <td className="py-2">{item.totalIncome}</td>
          <td className="py-2">{item.profit}</td>
        </tr>
      ))}
      <tr>
        <td className="py-2 font-bold">Total Profit for the Year</td>
        <td className="py-2"></td>
        <td className="py-2"></td>
        <td className="py-2 font-bold">
          {financialData.data.reduce(
            (total, item) => total + item.profit,
            0
          )}
        </td>
      </tr>
    </tbody>
  </table>
            </div>


        </>
    );
};

export default FinancialDataPage;