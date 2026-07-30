import React, { useState } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

function App() {
  const [contacts, setContacts] = useState([
  {
    id: 1,
    fullName: "Aarav Sharma",
    company: "Creative Tech Solutions",
    phone: "+91 98765 43210",
    email: "aarav@example.com",
    bio: "Frontend developer who enjoys building clean and responsive UI designs."
  },
  {
    id: 2,
    fullName: "Diya Patel",
    company: "Bright Marketing Co.",
    phone: "+91 91234 56789",
    email: "diya@example.com",
    bio: "Digital marketing specialist with a focus on social media campaigns."
  }]
  );

  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    bio: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addContact = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.company) return;

    setContacts([
    {
      ...formData,
      id: Date.now()
    },
    ...contacts]
    );

    setFormData({
      fullName: "",
      company: "",
      phone: "",
      email: "",
      bio: ""
    });
  };

  const filteredContacts = contacts.filter((contact) => {
    const term = searchTerm.toLowerCase();
    return (
      contact.fullName.toLowerCase().includes(term) ||
      contact.company.toLowerCase().includes(term));

  });

  return (/*#__PURE__*/
    React.createElement("div", { className: "app" }, /*#__PURE__*/
    React.createElement("h1", null, "React Contact Cards Manager"), /*#__PURE__*/

    React.createElement("input", {
      className: "search-box",
      type: "text",
      placeholder: "Search by name or company...",
      value: searchTerm,
      onChange: (e) => setSearchTerm(e.target.value) }
    ), /*#__PURE__*/

    React.createElement("form", { className: "form", onSubmit: addContact }, /*#__PURE__*/
    React.createElement("h2", null, "Add New Contact"), /*#__PURE__*/

    React.createElement("div", { className: "form-grid" }, /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      name: "fullName",
      placeholder: "Full Name",
      value: formData.fullName,
      onChange: handleChange }
    ), /*#__PURE__*/

    React.createElement("input", {
      type: "text",
      name: "company",
      placeholder: "Company / Job Title",
      value: formData.company,
      onChange: handleChange }
    ), /*#__PURE__*/

    React.createElement("input", {
      type: "tel",
      name: "phone",
      placeholder: "Phone Number",
      value: formData.phone,
      onChange: handleChange }
    ), /*#__PURE__*/

    React.createElement("input", {
      type: "email",
      name: "email",
      placeholder: "Email Address",
      value: formData.email,
      onChange: handleChange }
    )
    ), /*#__PURE__*/

    React.createElement("textarea", {
      name: "bio",
      placeholder: "Short Bio / Description",
      value: formData.bio,
      onChange: handleChange }
    ), /*#__PURE__*/

    React.createElement("button", { type: "submit" }, "Add Contact")
    ), /*#__PURE__*/

    React.createElement("div", { className: "card-list" },
    filteredContacts.map((contact) => /*#__PURE__*/
    React.createElement("div", { key: contact.id, className: "card" }, /*#__PURE__*/
    React.createElement("h3", null, contact.fullName), /*#__PURE__*/
    React.createElement("div", { className: "company" }, contact.company), /*#__PURE__*/
    React.createElement("div", { className: "info" }, "\uD83D\uDCDE ", contact.phone), /*#__PURE__*/
    React.createElement("div", { className: "info" }, "\u2709\uFE0F ", contact.email), /*#__PURE__*/
    React.createElement("p", { className: "bio" }, contact.bio)
    )
    )
    )
    ));

}

createRoot(document.getElementById("app")).render(/*#__PURE__*/React.createElement(App, null));