
"use client";

import { Input } from "@/components/ui/input";
import { usePaginations } from "@/hooks/use-pagination";
import { debounce } from "@/lib/utils";
import { useState } from "react";

export function Search({ queryKey }: { queryKey: string }) {
  const { setId, pagination } = usePaginations(queryKey)
  const [internalValue, setInternalValue] = useState<string>(
    pagination && pagination.SearchId && pagination.SearchId !== "" ? pagination.SearchId : ""
  );

  const _onChange = debounce((e: any) => {
    const value = e.target.value;
    if (!value) {
      if (pagination && pagination.SearchId)
        setId(undefined);
    }
    else setId(value);
    setInternalValue(value);
  }, 1000);

  return (
    <div>
      <Input
        defaultValue={internalValue}
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
        onChange={_onChange}
      />
    </div>
  );
}
