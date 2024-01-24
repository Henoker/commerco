import './App.css';
import { Provider } from 'react-redux';
import userStore from './redux/userStore';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import UserWrapper from './components/user/UserWrapper';

function App() {
  return (
   <Router>
    <Provider store={userStore}>
      <Routes>
        <Route path="/" element={<UserWrapper />} />
      </Routes>
    </Provider>
   </Router>
  );
}

export default App;
