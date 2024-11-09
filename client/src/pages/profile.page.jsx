import React, { useState, useEffect } from "react";
import { ProfileImage, ProfileText, SubmitButton } from "../styles";
import { FormGroup, Input, Label } from "../styles/profile.style";
import {
  ProfileFormContainer,
  ProfileImageContainer,
} from "../styles/profile.style";
import {
  MandatoryMessage,
  ProfilePageContainer,
} from "../styles/profile.style";
import { useAuth } from "../AuthContext"; // Import the useAuth hook

const ProfilePage = () => {
  const { user } = useAuth(); // Get user info from context
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData(user); // Set the form data with retrieved user info
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.email) newErrors.email = "E-mail is required.";
    if (!formData.mobile) newErrors.mobile = "Mobile is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      localStorage.setItem("user", JSON.stringify(formData)); // Update local storage with edited profile data
    }
  };

  return (
    <ProfilePageContainer>
      <ProfileFormContainer>
        <MandatoryMessage>
          Please fill in all mandatory fields.
        </MandatoryMessage>
        <h2>General Information</h2>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label isMandatory>First Name</Label>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "mandatory" : ""}
            />
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName}</span>
            )}
          </FormGroup>
          <FormGroup>
            <Label isMandatory>Last Name</Label>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "mandatory" : ""}
            />
            {errors.lastName && (
              <span style={{ color: "red" }}>{errors.lastName}</span>
            )}
          </FormGroup>
          <FormGroup>
            <Label isMandatory>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "mandatory" : ""}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </FormGroup>
          <FormGroup>
            <Label isMandatory>Mobile</Label>
            <Input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={errors.mobile ? "mandatory" : ""}
            />
            {errors.mobile && (
              <span style={{ color: "red" }}>{errors.mobile}</span>
            )}
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Postal code</Label>
            <Input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </FormGroup>
          <SubmitButton type="submit">Save Changes</SubmitButton>
        </form>
      </ProfileFormContainer>

      <ProfileImageContainer>
        <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
        <ProfileText>
          {formData.firstName} {formData.lastName}
        </ProfileText>
      </ProfileImageContainer>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
