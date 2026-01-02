import CardPage from "@/components/card-page";
import { BookOpen } from "lucide-react";

export const metadata = { title: `Daftar Perkiraan` };
export default function AccountingPage() {
  return (
    <CardPage
      title="Chart of Account"
      description="Accounting"
      icon={<BookOpen size={20} />}
      search={{ active: true, queryKey: "queryKey" }}
      action={{
        isShow: true,
        baseUrl: "/reports/security/guest-visit/123",
        urlApi: "guestVisitApi",
        queryKey: ["queryKey"],
        visibleControl: ["refresh", "filter", "print"],
      }}
    >Accounting Page</CardPage>
  )
}

