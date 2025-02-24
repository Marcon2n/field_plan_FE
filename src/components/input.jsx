export function InputComponent({
  id = undefined,
  name = undefined,
  type = "text",
  placeholder = "",
  label = undefined,
  value = undefined,
  onChange = () => {},
}) {
  return (
    <div className="sm:col-span-4 w-full">
      {label && (
        <label
          className="block text-sm/6 font-medium text-gray-900"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
      </div>
    </div>
  );
}
