import CardPage from "@/components/card-page";
import { Key } from "lucide-react";

export default function LoginPage() {
  return (
    <CardPage
      title="New Page"
      description="Security"
      icon={<Key size={20} />}
      search={{ active: true, queryKey: "queryKey" }}
      action={{
        isShow: true,
        baseUrl: "/reports/security/guest-visit/123",
        urlApi: "guestVisitApi",
        queryKey: ["queryKey"],
        visibleControl: ["refresh", "filter", "print"],
      }}
    >Login Page</CardPage>
  )
}

