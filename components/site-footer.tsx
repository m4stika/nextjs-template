// import { apiServer } from "@/lib/server-api"
import { use } from "react"

const getApiVersion = async () => {
  return '1.0.0'
  // const response = await apiServer.get<string>({ url: '/version' })
  // if (response.status === 'error') return false
  // return response.data
}

export function SiteFooter() {
  const apiVersion = use(getApiVersion())
  // const { publicRuntimeConfig } = getConfig();
  return (
    <footer className="border-t  py-2 dark:border-border md:px-8 md:py-0">
      <div className="flex flex-col items-center  gap-2 md:h-12 md:flex-row cursor-default">
        <p className="basis-1/3 text-balance text-center text-sm leading-loose text-muted-foreground md:text-left cursor-default mt-1">
          {`©${new Date().getFullYear()} All Right Reserved`}</p>
        <p className="basis-1/3 text-balance text-center text-sm text-muted-foreground">
          {`API (${apiVersion}) `}
        </p>
        <p className="flex-1 text-balance text-right text-sm leading-loose text-muted-foreground ">
          {`Contact-us : ${process.env.NEXT_PUBLIC_CONTACT}`}
        </p>
      </div>
    </footer>
  )
}
