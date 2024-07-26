import axios from "axios";
import { useEffect, useState } from "react";

interface IAddress {
  city: string;
  country: string;
  phone: string;
}

interface ICustomer {
  id: number;
  companyName: string;
  address: IAddress;
}

const BASE_URL = "https://northwind.vercel.app/api";

const Customers = () => {
  const [data, setData] = useState<ICustomer[]>([]);

  const getData = async (endpoint: "customers" | "suppliers") => {
    try {
      const response = await axios.get<ICustomer[]>(`${BASE_URL}/${endpoint}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        const response = await axios.delete(`${BASE_URL}/customers/${id}`);
        if (response.status === 200) {
          const updatedCustomers = data.filter((cust) => cust.id !== id);
          setData(updatedCustomers);
          console.log(`Customer with id ${id} is deleted`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData("customers");
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Customers Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200 border-b border-gray-300">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">ID</th>
              <th className="px-4 py-2 text-left text-gray-600">Company</th>
              <th className="px-4 py-2 text-left text-gray-600">Phone</th>
              <th className="px-4 py-2 text-left text-gray-600">Address</th>
              <th className="px-4 py-2 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-300">
                  <td className="px-4 py-2 text-gray-700">{customer.id}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {customer.companyName}
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    {customer.address.phone}
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    {customer.address?.city}, {customer.address?.country}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(customer.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
