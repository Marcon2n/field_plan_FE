export function Button({ type = "button", onClick = () => {}, children }) {
  return (
    <button
      type={type}
      className="my-2 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-1 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
