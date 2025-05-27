import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home";
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import DashboardMariee from "./pages/dashboardMariee";
import DashboardPrestatair from "./pages/dashboardPrestatair";


function App() {
  return (
    <div className=" flex flex-col">
      

      <div className="App">
      <BrowserRouter>
        <Routes>
        
          
          <Route index="/" element={ <Home /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/register" element={ <RegisterPage /> } />
          <Route path="/espace/mariee" element={ <DashboardMariee /> } />
          <Route path="/espace/prestatair" element={ <DashboardPrestatair /> } />
          {/* <Route path="/dashboard" element={ 
            <Protected >
              <Dashboard /> 
            </Protected>
          } /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>

    </div>

    
  );
}

export default App;
