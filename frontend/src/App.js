import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home";
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import DashboardMariee from "./pages/dashboardMariee";
import DashboardPrestatair from "./pages/dashboardPrestatair";
import PrivateRoute from "./hooks/privateRoute";


function App() {
  return (
    <div className=" flex flex-col">
      

      <div className="App">
      <BrowserRouter>
        <Routes>
        
          
          <Route index="/" element={ <Home /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/register" element={ <RegisterPage /> } />

          <Route 
            path="/espace/mariee" 
            element={
              <PrivateRoute>
                <DashboardMariee />
              </PrivateRoute>
            }
          />

          <Route 
            path="/espace/prestatair" 
            element={
              <PrivateRoute>
                <DashboardPrestatair />
              </PrivateRoute>
            } 
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>

    </div>

    
  );
}

export default App;
