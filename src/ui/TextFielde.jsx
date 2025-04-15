
function TextFielde({lable, value, onChange, type, id}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-sm text-[var(--text-500)]">
        {lable}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        className="border border-gray-300 rounded-md px-3 py-2 outline-none"
      />
    </div>
  );
}

export default TextFielde
