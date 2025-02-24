import { InputComponent } from "./input";
import { DeleteButton } from "./deleteButton";

export function ArrayInput({ options, setOptions = () => {} }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptions((prevOptions) =>
      prevOptions.map((option, index) =>
        index === parseInt(name) ? { ...option, voteOption: value } : option
      )
    );
  };

  const handleDeleteOption = (index) => {
    setOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  };

  return (
    <div>
      {options.map((item, index) => (
        <div key={index} className="flex flex-row gap-x-1 justify-between">
          <InputComponent
            name={index.toString()}
            value={item.voteOption}
            onChange={handleChange}
            placeholder={`Giá trị khảo sát ${index + 1}`}
          />
          {options.length > 2 && (
            <div className="max-w-[100px]">
              <DeleteButton onClick={() => handleDeleteOption(index)}>
                Xóa
              </DeleteButton>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
