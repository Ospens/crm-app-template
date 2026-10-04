import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { CustomersPage } from "./pages/customers";
import { DealsPage } from "./pages/deals";
import { TasksPage } from "./pages/tasks";
import PrivateRoute from "./routes/private/PrivateRoute";
import PublicRoute from "./routes/public/PublicRoute";
import { ToastContainer, Bounce } from 'react-toastify';

function App() {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routes>
        <Route path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
        <Route path="/login" element={<PublicRoute> <LoginPage /> </PublicRoute>} />
        <Route path="/register" element={<PublicRoute> <RegisterPage /> </PublicRoute>} />
        <Route path="/customers" element={<PrivateRoute> <CustomersPage /> </PrivateRoute>} />
        <Route path="/deals" element={<PrivateRoute> <DealsPage /> </PrivateRoute>} />
        <Route path="/tasks" element={<PrivateRoute> <TasksPage /> </PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;