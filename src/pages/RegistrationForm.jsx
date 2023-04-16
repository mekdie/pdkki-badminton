import { useState } from "react";
import { collection, doc, addDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase-config";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { Button, Container, Form } from "react-bootstrap";
import FormDetails from "../components/FormDetails";

import { useNavigate } from "react-router-dom";

//recaptcha
import ReCAPTCHA from "react-google-recaptcha";

//timestamp
import { serverTimestamp } from "firebase/firestore";

const RegistrationForm = () => {
    const [isVerified, setIsVerified] = useState(false);

    const navigate = useNavigate();

    const [data, setData] = useState({
        racquets: "Yes",
        level: "beginner",
        paid: false,
    });

    const [imageUpload, setImageUpload] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const usersCollectionRef = collection(db, "users");

    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
            timestamp: serverTimestamp(),
        });
    };

    const uploadImage = (userId) => {
        if (imageUpload == null) return;
        //creating folder inside storage for images
        const imageRef = ref(storage, `invoices/${userId}`);
        //uploading to storage using reference and the image you want to upload
        uploadBytes(imageRef, imageUpload).then((res) => {
            getDownloadURL(imageRef).then(async (url) => {
                //add imageUrl field to this data
                const userDoc = doc(db, "users", userId);
                await updateDoc(userDoc, { imageUrl: url });
            });
        }); // returns promise
        //once the upload is done, go to this page, might need to add loading here
        navigate("/confirmation", { state: { data } });
    };

    //add user
    const addUser = (e) => {
        e.preventDefault();
        //getting data of submitted form
        if (isVerified) {
            // submit the form
            addDoc(usersCollectionRef, data).then((res) => {
                uploadImage(res.id);
            });
        } else {
            alert("Please verify that you are not a robot.");
        }
    };

    //captcha
    const handleCaptchaVerify = (response) => {
        if (response) {
            setIsVerified(true);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImageUpload(file);

        // Create a FileReader object
        const reader = new FileReader();

        // Set a callback function to be called when the file is loaded
        reader.onload = () => {
            setPreviewUrl(reader.result);
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
    };
    return (
        <>
            <Container>
                <Form onSubmit={addUser}>
                    <FormDetails />
                    <hr></hr>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label className="required">Name</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            placeholder="Enter name"
                            required
                            onChange={updateData}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="required">
                            Email address
                        </Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            required
                            onChange={updateData}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label className="required">
                            Phone Number
                        </Form.Label>
                        <Form.Control
                            name="phone"
                            type="number"
                            placeholder="Enter phone number"
                            required
                            onChange={updateData}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your contact with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="racquets">
                        <Form.Label className="required">
                            Can you bring your own racquets?
                        </Form.Label>
                        <div className="mb-3">
                            <Form.Check inline required>
                                <Form.Check.Input
                                    type={"radio"}
                                    name="racquets"
                                    onChange={updateData}
                                    value="Yes"
                                    required
                                />
                                <Form.Check.Label className="custom-radio">
                                    Yes
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check inline>
                                <Form.Check.Input
                                    type={"radio"}
                                    name="racquets"
                                    onChange={updateData}
                                    value="No"
                                    required
                                />
                                <Form.Check.Label className="custom-radio">
                                    No
                                </Form.Check.Label>
                            </Form.Check>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="level">
                        <Form.Label>Your level</Form.Label>
                        <Form.Select
                            name="level"
                            className="mb-3"
                            controlId="level"
                            onChange={updateData}
                        >
                            <option value="beginner" selected>
                                Beginner
                            </option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="level">
                        <Form.Label className="required">
                            Payment invoice upload
                        </Form.Label>
                        <Form.Control
                            onChange={handleImageUpload}
                            type="file"
                            required
                        />
                        {previewUrl && (
                            <img
                                src={previewUrl}
                                alt="preview"
                                className="w-100 text-center mt-3"
                            />
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
                            onChange={handleCaptchaVerify}
                        />
                    </Form.Group>
                    {/* file upload here in the future  */}
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default RegistrationForm;
