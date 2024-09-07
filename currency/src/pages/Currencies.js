import React from 'react';
import { useSelector } from 'react-redux';

function Currencies() {
    const transactions = useSelector((state) => state.transactions.transactions);

    // Group transactions by country and compute totals
    const groupedTransactions = transactions.reduce((acc, transaction) => {
        const { targetCountry, exchangeRateLb, amount, PaymentAmountUs } = transaction;

        const amountNumber = +amount;
        const paymentAmountUsNumber = +PaymentAmountUs;
        const exchangeRateLbNumber = +exchangeRateLb;

        if (!acc[targetCountry]) {
            acc[targetCountry] = {
                exchangeRateLb: exchangeRateLbNumber,
                totalAmount: 0,
                totalPaymentAmountUs: 0,
            };
        }

        acc[targetCountry].totalAmount += amountNumber;
        acc[targetCountry].totalPaymentAmountUs += paymentAmountUsNumber;

        return acc;
    }, {});

    const groupedEntries = Object.entries(groupedTransactions);

    return (
        <div className='min-w-[75%] p-2 bg-gray-100'>
            <h1 className='text-2xl font-bold mb-4 text-center text-gray-800'>ملخص العملة            </h1>
            <table className='w-full table-fixed bg-white shadow-md rounded-lg border border-gray-300'>
                <thead>
                    <tr className='bg-gray-700 text-white'>
                        <th className='p-4 border-b'>سعر الصرف (LB)</th>
                        <th className='p-4 border-b'>رصيد الدولة</th>
                        <th className='p-4 border-b'>المبلغ الإجمالي</th>
                        <th className='p-4 border-b'>المبلغ الإجمالي (USD)</th>
                    </tr>
                </thead>
                <tbody>
                    {groupedEntries.length > 0 ? (
                        groupedEntries.map(([country, { exchangeRateLb, totalAmount, totalPaymentAmountUs }], index) => (
                            <tr key={index} className='text-center hover:bg-gray-100'>
                                <td className='p-4 border-b'>{exchangeRateLb.toFixed(2)}</td>
                                <td className='p-4 border-b'>{country}</td>
                                <td className='p-4 border-b'>{totalAmount.toFixed(2)}</td>
                                <td className='p-4 border-b'>{totalPaymentAmountUs.toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className='text-center p-4'>No transactions available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Currencies;
