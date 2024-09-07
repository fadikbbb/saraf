import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Create this component for the sidebar and content layout
import Balance from './pages/Balances';
import Capital from './pages/Capital';
import LebaneseDeposits from './pages/LebaneseDeposits';
import NoPage from './pages/noPage';
import Currencies from './pages/Currencies';
import DebtBook from './pages/DebtBook';
import Inventory from './pages/Inventory';
import Expenses from './pages/Expenses1';
import NotImplemented from './pages/NotImplemented';
import Filtering from './pages/Filtering';
import RecordBond from './pages/RecordBond';
import Transactions from './pages/Transactions';
import History from './pages/History';
import { Provider } from 'react-redux';
import store from './store/store';
const countryOptions = [
  { code: 'US', name: 'الولايات المتحدة', currency: 'USD', symbol: '$'  },
  { code: 'EU', name: 'منطقة اليورو', currency: 'EUR', symbol: '€' },
  { code: 'GB', name: 'المملكة المتحدة', currency: 'GBP', symbol: '£' },
  { code: 'JP', name: 'اليابان', currency: 'JPY', symbol: '¥' },
  { code: 'CA', name: 'كندا', currency: 'CAD', symbol: 'C$' },
  { code: 'AU', name: 'أستراليا', currency: 'AUD', symbol: 'A$' },
  { code: 'IN', name: 'الهند', currency: 'INR', symbol: '₹' },
  { code: 'CN', name: 'الصين', currency: 'CNY', symbol: '¥' },
  // More countries can be added here
];
function App() {
  // Add your routes here
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Balance />} />
            <Route path='/capital' element={<Capital />} />
            <Route path='/lebanese-deposits' element={<LebaneseDeposits />} />
            <Route path='/expenses' element={<Expenses />} />
            <Route path='/not-implemented' element={<NotImplemented />} />
            <Route path='/filtering' element={<Filtering />} />
            <Route path='/record-bond' element={<RecordBond />} />
            <Route path='/debt-book' element={<DebtBook />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/currencies' element={<Currencies />} />
            <Route path='/transactions' element={<Transactions countryOptions={countryOptions} />} />
            <Route path='/history' element={<History />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
