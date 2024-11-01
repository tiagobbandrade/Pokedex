import {
  createContext,
  Dispatch,
  FormEvent,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";

type FilterContextType = {
  habitat: string;
  type: string;
  setHabitat: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<string>>;
};

const FilterContext = createContext<FilterContextType>({} as FilterContextType);

export function Filter({ children }: PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [habitat, setHabitat] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const updatedParams = new URLSearchParams(searchParams);

    if (habitat.length) {
      updatedParams.set("habitat", habitat);
    } else {
      updatedParams.delete("habitat");
    }
    if (type.length) {
      updatedParams.set("type", type);
    } else {
      updatedParams.delete("type");
    }

    setSearchParams(updatedParams);
  }

  return (
    <FilterContext.Provider
      value={{
        habitat,
        setHabitat,
        setType,
        type,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center self-start gap-3 mt-16"
      >
        {children}
      </form>
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
