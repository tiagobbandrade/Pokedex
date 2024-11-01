import { PropsWithChildren } from "react";

type OptionProps = {
  value: string;
} & PropsWithChildren;

export function Option({ value, children }: OptionProps) {
  return (
    <option value={value} className="text-[#121316]">
      {children}
    </option>
  );
}
