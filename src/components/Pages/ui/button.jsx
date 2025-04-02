// src/components/ui/button.jsx
import React from "react";
export function Button({ children, className, ...props }) {
    return (
      <button className={`p-2 rounded-md ${className}`} {...props}>
        {children}
      </button>
    );
  }