import ConfirmationForm from "./components/ConfirmationForm";
import RegistrationForm from "./components/RegistrationForm";
import Participants from "./components/Participants";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
    return (
        <div>
            {/* not included in the route */}
            <Routes>
                <Route path="/" element={<RegistrationForm />} />
                <Route path="/confirmation" element={<ConfirmationForm />} />
                <Route path="/pdkki-participants" element={<Participants />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
