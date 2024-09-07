import { NavLink } from 'react-router-dom';
import {
    FaBalanceScale, FaMoneyBill, FaWallet, FaFileInvoice,
    FaClipboardCheck, FaCoins, FaBook, FaFileAlt, FaFilter, FaLayerGroup,
    FaArrowLeft, FaArrowRight, FaMoneyCheck, FaBookOpen, FaSignOutAlt
} from 'react-icons/fa';
import { useState } from 'react';

function SideBar() {
    const [isOpen, setIsOpen] = useState(true);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const handleLogoutClick = () => {
        setShowLogoutConfirm(true);
    };

    const handleConfirmLogout = () => {
        // Add your logout logic here
        console.log("User logged out");
        setShowLogoutConfirm(false);
    };

    const handleCancelLogout = () => {
        setShowLogoutConfirm(false);
    };

    return (
        <div className={`relative p-0  flex flex-col  h-screen bg-white shadow-lg  ${isOpen ? 'min-w-14 sm:min-w-[25%]'  : 'p-0 min-w-14'} duration-300 overflow-hidden`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-8 sm:flex  hidden top-4 m-3 p-2  right-4 self-end bg-blue-600 text-white rounded-full shadow-lg transition-transform duration-300 ${isOpen ? 'close-button  self-end  p-2' : 'open-button'} transform`}
            >
                {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
            </button>
            <div className="flex flex-col justify-evenly h-full ">
                <div className={`flex flex-col gap-3  duration-300`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10 rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaBalanceScale className={` w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>ميزان</span>
                    </NavLink>
                    <NavLink
                        to="/capital"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaMoneyBill className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>رأس مال</span>
                    </NavLink>
                    <NavLink
                        to="/lebanese-deposits"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaWallet className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>امانات لبناني</span>
                    </NavLink>
                    <NavLink
                        to="/expenses"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaFileInvoice className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>مصاريف</span>
                    </NavLink>
                    <NavLink
                        to="/not-implemented"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaClipboardCheck className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>غير منفذ</span>
                    </NavLink>
                    <NavLink
                        to="/filtering"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaFilter className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>تصفية</span>
                    </NavLink>
                    <NavLink
                        to="/record-bond"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaFileAlt className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>سند قيد</span>
                    </NavLink>
                    <NavLink
                        to="/debt-book"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaBook className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>دفتر دين</span>
                    </NavLink>
                    <NavLink
                        to="/currencies"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaCoins className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>عملات</span>
                    </NavLink>
                    <NavLink
                        to="/inventory"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaLayerGroup className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>جردة</span>
                    </NavLink>
                    <NavLink
                        to="/transactions"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaMoneyCheck className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>عمليات المالية</span>
                    </NavLink>
                    <NavLink
                        to="/history"
                        className={({ isActive }) =>
                            `flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 ${isActive ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-200 hover:text-blue-600"}`
                        }
                    >
                        <FaBookOpen className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>سجلات المالية</span>
                    </NavLink>
                    <button
                        onClick={handleLogoutClick}
                        className={`flex justify-between items-center transition-all gap-2 w-full h-10  rounded-bl-lg rounded-tl-lg  duration-300 hover:bg-gray-200 hover:text-blue-600`}
                    >
                        <FaSignOutAlt className={`w-1/4 text-md mx-auto`} />
                        <span className={` w-3/4 text-center text-md font-medium  ${isOpen ? " opacity-100 hidden sm:block" : "w-0 opacity-0 hidden overflow-hidden"}`}>تسجيل الخروج</span>
                    </button>
                </div>
            </div>

            {/* Logout Confirmation Popup */}
            {showLogoutConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4  shadow-lg">
                        <p className=" mb-4">هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
                        <div className="flex gap-2">
                            <button
                                onClick={handleConfirmLogout}
                                className="px-3 py-1 bg-blue-600 text-white  shadow-md "
                            >
                                تأكيد
                            </button>
                            <button
                                onClick={handleCancelLogout}
                                className="px-4 py-2 bg-gray-300 text-black  shadow-md"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SideBar;
