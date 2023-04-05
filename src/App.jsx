import ConfirmationForm from "./components/ConfirmationForm";
import RegistrationForm from "./components/RegistrationForm";
import Participants from "./components/Participants";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
    return (
        <div id="page-container">
            {/* not included in the route */}
            <div id="content-wrap">
                <Routes>
                    <Route path="/" element={<RegistrationForm />} />
                    <Route
                        path="/confirmation"
                        element={<ConfirmationForm />}
                    />
                    <Route
                        path="/pdkki-participants"
                        element={<Participants />}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
