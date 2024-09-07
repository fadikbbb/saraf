import React, { useState } from 'react';

function LebaneseDeposits() {
    const [formData, setFormData] = useState({
        name: '',
        amount: 0,
        Statement: '',
    });
    const [isApear, setIsApear] = useState(false);
    const [deposits, setDeposits] = useState([]);
    const [names, setNames] = useState([]); // List of depositor names

    const handleAddDeposit = (e) => {
        e.preventDefault();

        // Check if the entered name already exists in deposits
        const existingDeposit = deposits.find(deposit => deposit.name === formData.name);

        if (existingDeposit) {
            // If the name exists, sum the amounts
            const updatedDeposits = deposits.map(deposit =>
                deposit.name === formData.name
                    ? { ...deposit, amount: deposit.amount + formData.amount }
                    : deposit
            );
            setDeposits(updatedDeposits);
        } else {
            // If the name doesn't exist, add the new deposit
            setDeposits([...deposits, formData]);

            // Add the name to the names list if it's a new name
            if (!names.includes(formData.name)) {
                setNames([...names, formData.name]);
            }
        }

        // Reset the form
        setFormData({
            name: '',
            amount: 0,
            Statement: '',
        });
        setIsApear(false);
    };

    return (
        <div className="p-2 bg-gray-100 min-w-[75%] min-h-screen flex flex-col ">
            <h1 className="text-2xl font-bold w-full mb-6 text-center">أمانات لبناني</h1>

            {isApear && (
                <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 text-2xl font-semibold"
                            onClick={() => setIsApear(false)}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">إضافة أمانة</h2>
                        <form onSubmit={handleAddDeposit}>
                            <label className="block text-gray-700 mb-2">الاسم</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            >
                                <option value="" >اختر الاسم أو أدخل اسم جديد</option>
                                {names.map((name, index) => (
                                    <option key={index} value={name}>{name}</option>
                                ))}
                            </select>

                            {/* Input for new name if it's not in the list */}
                            {!names.includes(formData.name) && (
                                <input
                                    type="text"
                                    placeholder="أدخل اسم جديد"
                                    className="w-full p-2 border border-gray-300 rounded mb-4"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            )}

                            <label className="block text-gray-700 mb-2">المبلغ</label>
                            <input
                                type="number"
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                                value={formData.amount}
                                onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) })}
                            />

                            <label className="block text-gray-700 mb-2">البيان</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                                value={formData.Statement}
                                onChange={(e) => setFormData({ ...formData, Statement: e.target.value })}
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                            >
                                إضافة
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                onClick={() => setIsApear(true)}
            >
                إضافة أمانة
            </button>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-center">قائمة الأمانات</h2>
            <table className="table-fixed w-full  text-right ">
                <thead>
                    <tr className="bg-gray-700 text-white text-center">
                        <th className=" p-2">الاسم</th>
                        <th className=" p-2">المبلغ</th>
                    </tr>
                </thead>
                <tbody>
                    {deposits.length !== 0 ? (deposits.map((deposit, index) => (
                        <tr key={index} className="bg-white border-b-2 hover:bg-gray-200 even:bg-gray-50 text-center">
                            <td className=" p-2">{deposit.name}</td>
                            <td className=" p-2">{deposit.amount}</td>
                        </tr>
                    ))) : (
                        <tr>
                            <td colSpan={2} className="bg-white border-b-2 hover:bg-gray-200 even:bg-gray-50 text-center">
                          لا يوجد أمانات
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default LebaneseDeposits;
