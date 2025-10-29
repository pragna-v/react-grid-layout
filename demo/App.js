import React, { useState } from "react";

const App = () => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>React Grid Layout Demo by Pragna</h2>
      <div>
        <label>Rows: </label>
        <input
          type="number"
          value={rows}
          onChange={(e) => setRows(parseInt(e.target.value) || 1)}
        />
        <label style={{ marginLeft: "10px" }}>Columns: </label>
        <input
          type="number"
          value={cols}
          onChange={(e) => setCols(parseInt(e.target.value) || 1)}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 100px)`,
          gridTemplateRows: `repeat(${rows}, 100px)`,
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px"
        }}
      >
        {[...Array(rows * cols)].map((_, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "6px"
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
