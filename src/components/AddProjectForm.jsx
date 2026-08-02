import { useState } from "react";

const CATEGORIES = [
  "Advertising & Print",
  "Digital Product Design",
  "Brand Identity",
  "Marketing Campaign",
];

const emptyForm = {
  client: "",
  title: "",
  category: CATEGORIES[0],
  description: "",
};

function AddProjectForm({ onAddProject }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.client.trim() || !form.title.trim() || !form.description.trim()) {
      setError("Client, title, and description are all required.");
      return;
    }

    onAddProject({
      id: `p${Date.now()}`,
      client: form.client.trim(),
      title: form.title.trim(),
      category: form.category,
      description: form.description.trim(),
    });

    setForm(emptyForm);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h3>Add a campaign</h3>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="client">Client</label>
          <input
            id="client"
            type="text"
            value={form.client}
            onChange={handleChange("client")}
            placeholder="e.g. Java House"
          />
        </div>

        <div className="form-field">
          <label htmlFor="title">Campaign title</label>
          <input
            id="title"
            type="text"
            value={form.title}
            onChange={handleChange("title")}
            placeholder="e.g. Morning Ritual Rebrand"
          />
        </div>

        <div className="form-field form-grid-full">
          <label htmlFor="category">Category</label>
          <select id="category" value={form.category} onChange={handleChange("category")}>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field form-grid-full">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={form.description}
            onChange={handleChange("description")}
            rows={3}
            placeholder="What did the agency deliver, and what was the result?"
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}

      <button type="submit" className="form-submit">
        Add project
      </button>
    </form>
  );
}

export default AddProjectForm;
