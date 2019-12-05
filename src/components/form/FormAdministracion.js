import ReactSelect from "react-select";

function Select({ defaultValue, options, ...otherProps }) {
  return (
    <ReactSelect
      defaultValue={
        defaultValue && {
          value: defaultValue,
          label: options.find(o => o.value === defaultValue).label,
        }
      }
      options={options}
      {...otherProps}
    />
  );
}


<Select
  options={[
    { id: "Y", label: "Yellow" },
    { id: "G", label: "Green" },
    { id: "B", label: "Blue" },
  ]}
  defaultValue="G"
/>;