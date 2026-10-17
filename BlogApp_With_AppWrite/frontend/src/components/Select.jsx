import { useId } from "react";
import { forwardRef } from "react";
const Select = forwardRef(function Select(
  { options, label, className, ...props },
  ref,
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label> htmlfor={id} className= ''</label>}

      <Select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options.map((option) => {
          const value = typeof option === "string" ? option : option.value;
          const text = typeof option === "string" ? option : option.name;
          return (
            <option key={value} value={value}>
              {text}
            </option>
          );
        })}
      </Select>
    </div>
  );
});
export default { Select };
// export default React.forwardRef = { Select };
