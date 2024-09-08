import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; // Additional icons for payment and user
import Flag from 'react-world-flags'; // For displaying country flags
import { addTransaction, } from '../store/TransactionSlice'; // Adjust the path accordingly
import { useDispatch } from 'react-redux';


const Transactions = ({ countryOptions }) => {
    const dispatch = useDispatch();
    const [targetCountry, setTargetCountry] = useState('');
    const [amount, setAmount] = useState(''); // Amount in USD
    const [exchangeRateLb, setExchangeRateLb] = useState(''); // Exchange rate in L.L.
    const [exchangeRateUs, setExchangeRateUs] = useState('');
    const [transactionType, setTransactionType] = useState('buy'); // Buy or sell
    const [userName, setUserName] = useState('');
    const [TransactionReports, setTransactionReports] = useState('مقبوضات');
    const [transactions, setTransactions] = useState([]); // Store transactions
    const [errorMessage, setErrorMessage] = useState(''); // Error message for failed validation
    const [message, setMessage] = useState('');
    const handleTargetCountryChange = (e) => {
        setTargetCountry(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleTransactionReportsChange = (e) => {
        setTransactionReports(e.target.value);
    };
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleExchangeRateLbChange = (e) => {
        setExchangeRateLb(e.target.value);
    };

    const handleExchangeRateUsChange = (e) => {
        setExchangeRateUs(e.target.value);
    };



    const PaymentAmountUs = amount && exchangeRateUs ? (amount * exchangeRateUs).toFixed(2) : 0;
    const PaymentAmountLb = amount && exchangeRateLb ? (amount * exchangeRateLb).toFixed(2) : 0;

    const getCurrencySymbol = (countryCode) => {
        const country = countryOptions.find((c) => c.code === countryCode);
        return country ? country.symbol : '';
    };

    const validateFields = () => {
        if (
            !userName ||
            !targetCountry ||
            !TransactionReports ||
            !amount ||
            !exchangeRateUs ||
            !exchangeRateLb
        ) {
            setErrorMessage('Transaction Failed: Please fill in all fields.');
            return false;
        }
        setErrorMessage(''); // Clear the error message if validation passes
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateFields()) {
            return;
        }

        const newTransaction = {
            userName,
            transactionType,
            targetCountry,
            TransactionReports,
            amount,
            exchangeRateUs,
            exchangeRateLb,
            PaymentAmountUs,
            PaymentAmountLb,
        };
        dispatch(addTransaction(newTransaction));
        setTransactions([...transactions, newTransaction]);
        setMessage('تمت العملية بنجاح');
        console.log('Transaction added:', newTransaction);
    };
    return (
        <div className="flex flex-wrap justify-center max-w-lg  min-w-[75%] p-2 bg-gray-100 shadow-md rounded-lg">
            <h1 className="w-full text-2xl font-bold mb-6 text-center">عمليات المالية</h1>
            {/* User Name Input */}
            <div className="mb-4 flex flex-col justify-center items-center w-full ">
                <label className="block mb-2 font-medium">اسم المستخدم</label>
                <div className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex  w-full ">
                    <label htmlFor="userName">
                        <FaUser className="m-1 text-xl text-gray-600" />
                    </label>
                    <input
                        id="userName"
                        type="text"
                        value={userName}
                        onChange={handleUserNameChange}
                        placeholder="Enter your name"
                        className="w-full focus:outline-none "
                    />
                </div>
            </div>

            {/* Transaction Type */}
            <div className="mb-4 w-full sm:w-1/2 p-1">
                <label className="block mb-2 font-medium">نوع المعاملة</label>
                <select
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="شراء">شراء</option>
                    <option value="بيع">بيع</option>
                </select>
            </div>

            {/* Target Country Selection */}
            <div className="mb-4 w-full sm:w-1/2 p-1">
                <label className="block mb-2 font-medium">الدولة المستهدفة</label>
                <select
                    onChange={handleTargetCountryChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Country</option>
                    {countryOptions.map((country) => (
                        <option key={country.code} value={country.name}>
                            {country.name} ({country.currency})
                        </option>
                    ))}
                </select>
                {targetCountry && (
                    <div className="flex items-center mt-2">
                        <Flag code={targetCountry} className="w-8 h-5 mr-2" />
                        <span>{getCurrencySymbol(targetCountry)}</span>
                    </div>
                )}
            </div>

            {/* Amount in Input */}
            <div className="mb-4 w-full text-center p-1">
                <label htmlFor="amount" className="block mb-2 font-medium">المبلغ</label>
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            {/* Exchange Lebanese Rate Input */}
            <div className="mb-4 w-full sm:w-1/2 p-1">
                <label htmlFor="exchangeRateLb" className="block mb-2 font-medium">سعر الصرف اللبناني</label>
                <input
                    type="number"
                    value={exchangeRateLb}
                    onChange={handleExchangeRateLbChange}
                    placeholder="Enter exchange rate"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            {/* Exchange Dollar Rate Input */}
            <div className="mb-4 w-full sm:w-1/2 p-1">
                <label htmlFor="exchangeRateUs" className="block mb-2 font-medium">سعر صرف الدولار</label>
                <input
                    type="number"
                    value={exchangeRateUs}
                    onChange={handleExchangeRateUsChange}
                    placeholder="Enter exchange rate"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4 w-full p-1">
                <label className="block mb-2 font-medium"> تقارير المعاملة</label>
                <select value={TransactionReports} onChange={handleTransactionReportsChange} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="مقبوضات">مقبوضات</option>
                    <option value="غير مقبوضات">غير مقبوضات</option>
                </select>
            </div>
            {/* Payment Amount in USD */}
            <div className="mb-4 w-full sm:w-1/2 p-1">
                <label className="block mb-2 font-medium">قيمة الدفع بالدولار</label>
                <h3 className='text-lg'>{PaymentAmountUs} $</h3>
            </div>

            {/* Payment Amount in LB */}
            <div className="mb-4 w-full sm:w-1/2 p-1">
                <label className="block mb-2 font-medium">قيمة الدفع بالليرة اللبنانية</label>
                <h3 className='text-lg'>{PaymentAmountLb + "L.L."}</h3>
            </div>
            {message && <div className="text-center p-1 text-green-500">{message}</div>}
            {/* Submit Button */}
            <div className="flex justify-center sm:w-full p-1">
                <button
                    onClick={handleSubmit}
                    className="w-full self-center h-fit p-4 md:w-1/2 px-6  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    تقديم
                </button>
            </div>

            {/* Error Message */}
            {errorMessage && (
                <div className="mt-4 p-4 bg-red-100 text-red-600 border border-red-300 rounded-md">
                    {errorMessage}
                </div>
            )}

        </div>
    );
};

export default Transactions;
