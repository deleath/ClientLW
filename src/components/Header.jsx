import React from "react";
import { useSelector } from "react-redux";

export default function Header({ title = "Рецепты", ...props }) {
  return (
    <div
      className="mb-2 mt-3"
      style={{
        backgroundColor: "#ebeae8",
        border: "2px solid #333",
        borderRadius: "15px",
      }}
    >
      <h1 className="text-center mb-2 mt-2">
        <i>{title}</i>
      </h1>
    </div>
  );
}
