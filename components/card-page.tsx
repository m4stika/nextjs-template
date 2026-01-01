import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";
import { VisibleButton } from "@/lib/common";
import PageActions from "./page-actions";
import { Search } from "./search-page";

type Action = {
  visibleControl?: VisibleButton[];
  isShow: boolean;
  baseUrl: string;
  queryKey: string[];
  urlApi: string;
  secondRoute?: string;
  contentFilter?: React.ReactNode;
};

type IContent = {
  action?: Action;
  showFooter?: boolean;
  // variant?: ColorVariant | "none";
  description?: string;
  skeleton?: boolean;
  customButton?: React.ReactElement;
  icon?: React.ReactElement;
  search?: {
    active: boolean;
    queryKey: string;
  };
  headerClassName?: HTMLProps<HTMLElement>["className"];
  contentClassName?: HTMLProps<HTMLElement>["className"];
};
type CardProps = React.ComponentProps<typeof Card> & IContent;

const CardPage = ({
  className,
  headerClassName,
  contentClassName,
  title,
  description,
  icon,
  action,
  // variant = "none",
  showFooter = false,
  skeleton = false,
  customButton,
  search = { active: false, queryKey: "" },
  children,
}: CardProps) => {
  return (
    <div className="p-4 relative size-full flex justify-center flex-1"
    >
      <Card
        className={cn(
          "min-h-1/2 min-w-[calc(1/2*100%)] shadow-lg",
          className
        )}
      >
        <CardHeader className={cn("p-0", headerClassName)}>
          <div
            className={cn(
              "flex flex-row items-center justify-between px-4",
            )}
          >
            <div className="col-span-2">
              {skeleton && (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-40" />
                </div>
              )}
              {!skeleton && (
                <CardTitle className="capitalize flex flex-row space-x-2 items-center ">
                  {icon && icon}
                  <span className="">{title}</span>
                  {description && !skeleton && (
                    <>
                      <span className="text-input">|</span>
                      {/* <CardDescription className={cn(variant !== "none" && "")}> */}
                      <CardDescription className="text-input">
                        {description}
                      </CardDescription>
                    </>
                  )}
                </CardTitle>
              )}
            </div>
            {/* search box */}
            <div className="col-span-2 hidden lg:block">
              {search && search.active && <Search queryKey={search.queryKey} />}
            </div>
            <div className="">
              {skeleton && <Skeleton className="w-full h-full" />}

              {action && !skeleton && (
                <PageActions
                  visibleControl={action.visibleControl}
                  baseUrl={action.baseUrl}
                  queryKey={action.queryKey}
                  urlApi={action.urlApi}
                  secondRoute={action.secondRoute}
                  contentFilter={action.contentFilter}
                />
              )}

              {customButton && !skeleton && customButton}
            </div>
          </div>
          <div className="border-t border-border" />
        </CardHeader>
        <CardContent className={cn("py-2", contentClassName)}>{children}</CardContent>
        {showFooter && (
          <CardFooter className="flex-none bg-red-100">
            <p>Card Footer</p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default CardPage;
