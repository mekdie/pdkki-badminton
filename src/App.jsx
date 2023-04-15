import ConfirmationForm from "./pages/ConfirmationForm";
import RegistrationForm from "./pages/RegistrationForm";
import Participants from "./pages/Participants";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import NavigationBar from "./components/NavigationBar";
function App() {
    return (
        <div id="page-container">
            {/* not included in the route */}
            <NavigationBar></NavigationBar>
            <div id="content-wrap">
                <Routes>
                    <Route path="/" element={<RegistrationForm />} />
                    <Route
                        path="/confirmation"
                        element={<ConfirmationForm />}
                    />
                    <Route path="/participants" element={<Participants />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
