export function Button({ label = "Click Me", className = "" }) {
    // Create a button element
    const button = document.createElement("button");
    
    // Add text to the button
    button.textContent = label;
    
    // Add Tailwind classes
    button.className = `px-4 py-2 bg-blue-500 text-white rounded ${className}`;

    return button; // Return the actual button element
}
