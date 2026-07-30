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
    }
  ]);

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
      ...contacts
    ]);

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
      contact.company.toLowerCase().includes(term)
    );
  });

  return (
    <div className="app">
      <h1>React Contact Cards Manager</h1>

      <input
        className="search-box"
        type="text"
        placeholder="Search by name or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <form className="form" onSubmit={addContact}>
        <h2>Add New Contact</h2>

        <div className="form-grid">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Company / Job Title"
            value={formData.company}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="bio"
          placeholder="Short Bio / Description"
          value={formData.bio}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Add Contact</button>
      </form>

      <div className="card-list">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="card">
            <h3>{contact.fullName}</h3>
            <div className="company">{contact.company}</div>
            <div className="info">📞 {contact.phone}</div>
            <div className="info">✉️ {contact.email}</div>
            <p className="bio">{contact.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById("app")).render(<App />);
