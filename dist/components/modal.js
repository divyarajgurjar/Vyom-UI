export function Modal({ title = "Modal Title", content = "This is a modal." }) {
    return `
      <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-5 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold">${title}</h2>
          <p class="mt-2">${content}</p>
        </div>
      </div>
    `;
  }
  