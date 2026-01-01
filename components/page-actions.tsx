
"use client"

import React from 'react'
import { Copy, Filter, Pen, Plus, Printer, RefreshCw, Trash } from 'lucide-react';
import { VisibleButton } from '@/lib/common';
// import { useTableState } from '@/hooks/use-table-state'
// import { useQueryClient } from '@tanstack/react-query';
// import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
// import { isEmpty } from '@/lib/utils';
// import { usePaginations } from '@/hooks/use-pagination';
// import dateFormatter from '@/lib/date-formater';

interface InputProps extends React.HTMLAttributes<HTMLElement> {
  visibleControl?: VisibleButton[];
  secondRoute?: string;
  baseUrl: string;
  queryKey: string[];
  urlApi: string;
  contentFilter?: React.ReactNode;
}


type Control = {
  mode: VisibleButton;
  label: string;
  // variant?: ButtonVariant;
  icon: React.ReactElement;
  alwaysOn?: boolean;
};

const controls: Control[] = [
  {
    mode: "new",
    label: "New",
    // variant: "contained",
    icon: <Plus className='text-primary size-5' />,
    alwaysOn: true,
  },
  {
    mode: "copy",
    label: "Copy",
    // variant: "contained",
    icon: <Copy className='text-success size-5' />,
  },
  {
    mode: "edit",
    label: "Edit",
    // variant: "contained",
    icon: <Pen className='text-warning size-5' />,
  },

  {
    mode: "print",
    label: "Print",
    // variant: "contained",
    icon: <Printer className='text-warning size-5' />,
    alwaysOn: true,
  },

  {
    mode: "delete",
    label: "Delete",
    // variant: "outlined",
    icon: <Trash className='text-destructive size-5' />,
  },
  {
    mode: "refresh",
    label: "Refresh",
    // variant: "outlined",
    icon: <RefreshCw className='text-success size-5' />,
    alwaysOn: true,
  },
  {
    mode: "filter",
    label: "Filter",
    // variant: "outlined",
    icon: <Filter className='size-5' />,
    alwaysOn: true,
  },
];



type TData = Record<"id", string> & Record<string, string>;
const PageActions = ({
  visibleControl = ["new", "copy", "edit", "delete"],
  // baseUrl,
  // queryKey,
  // secondRoute,
  // contentFilter,
}: InputProps) => {
  // const { itemSelected } = useTableState()
  // const isSelected = itemSelected ? isEmpty(itemSelected) : false

  // const dataId: string = isSelected ? (itemSelected as TData)?.id : "";
  // const queryClient = useQueryClient();
  // const router = useRouter();
  // const { pagination } = usePaginations(queryKey[0])

  const CreateButton = (propItems: { item: Control }) => {
    return (
      <Button size={"icon"} variant={"ghost"}>
        <RefreshCw />
      </Button>
    )
    // const { mode, label, icon, alwaysOn } = propItems.item;
    // const newId: string = ["menu", "new"].includes(mode) ? "new" : dataId;
    // const newMode: string = ["menu", "new"].includes(mode) ? "new" : mode === "print" ? "" : mode;
    // let hrefWithProps: string;
    // const routeSplit = secondRoute?.split("/");
    // if (routeSplit && routeSplit[0] === "context") {
    //   if (pagination) {
    //     const dateFrom = dateFormatter(pagination.dateFrom!, 'yyyy-MM-dd');
    //     const dateTo = dateFormatter(pagination.dateTo!, 'yyyy-MM-dd');
    //     const SearchId = pagination.SearchId;
    //     hrefWithProps = `${baseUrl}/${dateFrom}X${dateTo}/${SearchId}`;
    //   }
    // } else
    //   hrefWithProps = secondRoute
    //     ? `${baseUrl}/${newId}/${newMode}/${secondRoute}`
    //     : `${baseUrl}/${newId}/${newMode}`;
    // return mode === "filter" ? (
    //   contentFilter && contentFilter
    // )
    //   : (
    //     <Button
    //       name={mode}
    //       aria-label={`${label} button`}
    //       size={"icon"}
    //       // className={cn('size-10 [&_svg]:size-5')}
    //       variant={"ghost"}
    //       disabled={!alwaysOn && !isSelected}
    //       onClick={() => {
    //         if (mode === "print") {
    //           const windowPdf = window.open(`${hrefWithProps}`, "_blank");
    //           return windowPdf?.focus();
    //         } else if (mode === "refresh") {
    //           queryClient.invalidateQueries({ queryKey });
    //         } else return router.push(hrefWithProps);
    //       }}
    //     >
    //       {icon}
    //     </Button>
    //   )
  }

  return (
    <div className="flex flex-row">
      {visibleControl.map((item) => {
        const control = controls.find(({ mode }) => mode === item);
        return (
          control && <CreateButton key={control.mode} item={control} />
        );
      })}
    </div>
  );
}

export default PageActions
