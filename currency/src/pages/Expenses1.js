import React, { useState } from 'react';

function Expenses() {
    // State for modal visibility
    const [showModal, setShowModal] = useState(false);

    // State for the current form data
    const [formData, setFormData] = useState({
        name: '',
        usdAmount: '',
        lbpAmount: '',
        description: '',
    });

    // State to hold all expenses
    const [expenses, setExpenses] = useState([]);

    // State to track if we're editing an existing expense
    const [editIndex, setEditIndex] = useState(null);

    // Handle form input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Generate dynamic ID and current date
    const generateId = () => expenses.length + 1;
    const getCurrentDate = () => new Date().toISOString().split('T')[0];

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editIndex !== null) {
            // Editing an existing expense
            const updatedExpenses = expenses.map((expense, index) =>
                index === editIndex ? { ...formData, id: expense.id, date: expense.date } : expense
            );
            setExpenses(updatedExpenses);
        } else {
            // Adding a new expense
            const newExpense = {
                id: generateId(),
                ...formData,
                date: getCurrentDate(),
            };
            setExpenses([...expenses, newExpense]);
        }

        // Reset form and close modal
        setFormData({
            name: '',
            usdAmount: '',
            lbpAmount: '',
            description: '',
        });
        setEditIndex(null);
        setShowModal(false);
    };

    // Open modal for editing
    const handleEdit = (index) => {
        setFormData(expenses[index]);
        setEditIndex(index);
        setShowModal(true);
    };

    return (
        <div className="p-2 min-w-[75%] bg-gray-100">
            <h1 className="text-2xl font-bold mb-4 text-center">مصاريف</h1>
            <button
                onClick={() => setShowModal(true)}
                className="bg-blue-500 w-full text-white px-4 py-2 rounded mb-4"
            >
                اضافة
            </button>

            {/* Table */}
            <table className="w-full table-fixed bg-white shadow-md rounded">
                <thead>
                    <tr className="bg-gray-700 text-white uppercase text-sm leading-normal">
                        <th className="px-4 py-2 ">ID</th>
                        <th className="px-4 py-2 ">الاسم</th>
                        <th className="px-4 py-2 ">مدفوع الدولار الاميركي</th>
                        <th className="px-4 py-2 ">مدفوع الليرة اللبنانية</th>
                        <th className="px-4 py-2 ">بيان</th>
                        <th className="px-4 py-2 ">التاريخ</th>
                        <th className="px-4 py-2 ">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.length > 0 ? (
                        expenses.map((expense, index) => (
                            <tr key={expense.id} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2 ">{expense.id}</td>
                                <td className="px-4 py-2 ">{expense.name}</td>
                                <td className="px-4 py-2 ">{expense.usdAmount}</td>
                                <td className="px-4 py-2 ">{expense.lbpAmount}</td>
                                <td className="px-4 py-2 ">{expense.description}</td>
                                <td className="px-4 py-2 ">{expense.date}</td>
                                <td className="px-4 py-2 ">
                                    <button
                                        onClick={() => handleEdit(index)}
                                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => setExpenses(expenses.filter((_, i) => i !== index))}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="px-4 py-2 text-center">
                            لم تتم إضافة أي نفقات حتى الآن.

                            </td>
                        </tr>
                    )}
                   
                </tbody>
            </table>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">
                            {editIndex !== null ? 'Edit Expense' : 'Add New Expense'}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2">
                                الاسم:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="border w-full p-2 rounded mt-1"
                                />
                            </label>
                            <label className="block mb-2">
                                مدفوع الدولار الاميركي:
                                <input
                                    type="number"
                                    name="usdAmount"
                                    value={formData.usdAmount}
                                    onChange={handleChange}
                                    required
                                    className="border w-full p-2 rounded mt-1"
                                />
                            </label>
                            <label className="block mb-2">
                                مدفوع الليرة اللبنانية:
                                <input
                                    type="number"
                                    name="lbpAmount"
                                    value={formData.lbpAmount}
                                    onChange={handleChange}
                                    required
                                    className="border w-full p-2 rounded mt-1"
                                />
                            </label>
                            <label className="block mb-4">
                                بيان:
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    className="border w-full p-2 rounded mt-1"
                                />
                            </label>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowModal(false);
                                        setEditIndex(null);
                                        setFormData({
                                            name: '',
                                            usdAmount: '',
                                            lbpAmount: '',
                                            description: '',
                                        });
                                    }}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Close
                                </button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                    {editIndex !== null ? 'Update' : 'Add'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Expenses;
