interface Props {
  label: string;
  name: string;
  defaultChecked: string | number;
  options: { label: string; value: string | number }[];
}

export const RadioButtonSection = (props: Props) => {
  return (
    <div className="flex w-full items-center gap-2">
      <span className="whitespace-nowrap rounded py-1 font-semibold">
        {props.label}:
      </span>
      <div className="flex items-center gap-2">
        {props.options.map((option, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="radio"
              name={props.name}
              value={option.value}
              defaultChecked={option.value === props.defaultChecked}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};
