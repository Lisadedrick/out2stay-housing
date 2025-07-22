import React, { useState } from 'react';

const properties = [
  {
    id: 1,
    title: "2BR Apartment in Stockton",
    description: "Newly renovated 2-bedroom near downtown. Furnished. No deposit for verified parolees.",
    zip: "95212",
    price: 1450,
    contact: "housing@safeplace.com",
  },
  {
    id: 2,
    title: "Shared House in San Jose",
    description: "Room available in clean, sober living home. Walk to transit. Weekly support group access.",
    zip: "95112",
    price: 650,
    contact: "sharedhome@outlook.com",
  },
];

function App() {
  const [zipFilter, setZipFilter] = useState("");

  const filtered = zipFilter
    ? properties.filter((p) => p.zip.includes(zipFilter))
    : properties;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Out2Stay Housing Directory</h1>

      
    <iframe
      id="JotFormIFrame-251986777848079"
      title="Out2Stay"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allow="geolocation; microphone; camera; fullscreen; payment"
      src="https://form.jotform.com/251986777848079"
      frameborder="0"
      style="min-width:100%;max-width:100%;height:539px;border:none;"
      scrolling="no"
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-251986777848079']", "https://form.jotform.com/")</script>
    
      <div>
        <label>Search by ZIP Code</label>
        <input
          type="text"
          value={zipFilter}
          onChange={(e) => setZipFilter(e.target.value)}
          placeholder="Enter ZIP (e.g. 95112)"
        />
      </div>
      {filtered.map((property) => (
        <div key={property.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p><strong>Rent:</strong> ${property.price}/month</p>
          <p><strong>ZIP:</strong> {property.zip}</p>
          <p><strong>Contact:</strong> {property.contact}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
