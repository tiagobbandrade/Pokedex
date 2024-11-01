import { ChangeEvent, HTMLAttributes, PropsWithChildren } from "react";
import { useFilterContext } from "./Filter";

type FilterContentProps = {
  label: string;
  id: string;
} & PropsWithChildren &
  HTMLAttributes<HTMLSelectElement>;

export function FilterOption({
  children,
  label,
  id,
  ...props
}: FilterContentProps) {
  const { setHabitat, setType } = useFilterContext();

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    if (id == "habitat") setHabitat(e.currentTarget.value);

    if (id == "type") setType(e.currentTarget.value);
  }

  return (
    <div className="flex items-center px-2 py-3 gap-3 rounded-md border border-[#23262E] bg-[#191B20]">
      <label htmlFor={id} className="text-xs font-light text-white/30">
        {label}
      </label>
      <select
        id={id}
        onChange={handleChange}
        className="text-xs text-white bg-transparent outline-none cursor-pointer"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
