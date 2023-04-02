import ConfirmationForm from "./components/ConfirmationForm";
import RegistrationForm from "./components/RegistrationForm";
import Participants from "./components/Participants";
import { Routes, Route } from "react-router-dom";
function App() {
    return (
        <div>
            {/* not included in the route */}
            <Routes>
                <Route path="/" element={<RegistrationForm />} />
                <Route path="/confirmation" element={<ConfirmationForm />} />
                <Route path="/pdkki-participants" element={<Participants />} />
            </Routes>
        </div>
    );
}

export default App;
