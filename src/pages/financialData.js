import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import AdminHeader from './components/adminHeader';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const FinancialDataPage = () => {
    const financialData = {
        data: [
            {
                "month": "January 2022",
                "totalExpense": 8000,
                "totalIncome": 5000,
                "profit": -3000
            },
            {
                "month": "February 2022",
                "totalExpense": 4500,
                "totalIncome": 7000,
                "profit": 2500
            },
            {
                "month": "March 2022",
                "totalExpense": 5500,
                "totalIncome": 9000,
                "profit": 3500
            },
            {
                "month": "April 2022",
                "totalExpense": 4000,
                "totalIncome": 6000,
                "profit": 2000
            },
            {
                "month": "May 2022",
                "totalExpense": 6000,
                "totalIncome": 9500,
                "profit": 3500
            },
            {
                "month": "June 2022",
                "totalExpense": 5500,
                "totalIncome": 8500,
                "profit": 3000
            },
            {
                "month": "July 2022",
                "totalExpense": 4500,
                "totalIncome": 7500,
                "profit": 3000
            },
            {
                "month": "August 2022",
                "totalExpense": 4000,
                "totalIncome": 7000,
                "profit": 3000
            },
            {
                "month": "September 2022",
                "totalExpense": 5500,
                "totalIncome": 9000,
                "profit": 3500
            },
            {
                "month": "October 2022",
                "totalExpense": 4500,
                "totalIncome": 7500,
                "profit": 3000
            },
            {
                "month": "November 2022",
                "totalExpense": 5000,
                "totalIncome": 8000,
                "profit": 3000
            },
            {
                "month": "December 2022",
                "totalExpense": 6000,
                "totalIncome": 9500,
                "profit": 3500
            }
        ],
    };

    return (
        <>
<Head>
        <title>All User</title>
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <div className="border-b-2 shadow-xl">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/images/resize.png" alt="Logo" height={200} width={200} />
              </Link>
              {/* <a href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">TV Shows</a>
                    <a href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">Movies</a> */}
            </div>

            <div className="text-2xl font-bold text-gray-800">
              <Link href="/adminDashboard">Admin Dashboard</Link>
            </div>
            <div className="flex items-center">

            </div>
          </div>
          <div className="flex justify-end">
            <Link href="/" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600 ">Go To Main Site</Link>
          </div>
        </div> 
                    <Link href="/adminDashboard" className="text-blue-500 underline mb-4 inline-block">
                Back to Admin Dashboard
            </Link>
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
                            <td className="py-2 font-bold">Total Profit for the Year 2022</td>
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

            </div>


        </>
    );
};

export default FinancialDataPage;
