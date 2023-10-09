import React from "react";
import { createRoot } from "react-dom/client";
import CustomInput from "./task3/CustomInput";

// Render your React component instead
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<CustomInput></CustomInput>);
