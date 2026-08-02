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
    <form
      onSubmit={handleSubmit}
      className="mb-10 border border-line bg-white p-6"
    >
      <h3 className="mb-4 font-display text-lg font-semibold text-ink">
        Add a campaign
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="client" className="mb-1 block text-sm font-medium text-ink">
            Client
          </label>
          <input
            id="client"
            type="text"
            value={form.client}
            onChange={handleChange("client")}
            className="w-full border border-line px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-cobalt"
            placeholder="e.g. Java House"
          />
        </div>

        <div>
          <label htmlFor="title" className="mb-1 block text-sm font-medium text-ink">
            Campaign title
          </label>
          <input
            id="title"
            type="text"
            value={form.title}
            onChange={handleChange("title")}
            className="w-full border border-line px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-cobalt"
            placeholder="e.g. Morning Ritual Rebrand"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="category" className="mb-1 block text-sm font-medium text-ink">
            Category
          </label>
          <select
            id="category"
            value={form.category}
            onChange={handleChange("category")}
            className="w-full border border-line bg-white px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-cobalt"
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="mb-1 block text-sm font-medium text-ink">
            Description
          </label>
          <textarea
            id="description"
            value={form.description}
            onChange={handleChange("description")}
            rows={3}
            className="w-full border border-line px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-cobalt"
            placeholder="What did the agency deliver, and what was the result?"
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 bg-cobalt px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-paper transition-transform hover:-translate-y-0.5"
      >
        Add project
      </button>
    </form>
  );
}

export default AddProjectForm;
