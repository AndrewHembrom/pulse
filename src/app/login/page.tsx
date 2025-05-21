import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Authform from "@/components/Authform";

export default function LoginPage() {
  return (
    <div className="mt-20 flex-1 flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          <CardTitle className="text-center text-3xl">Login</CardTitle>
        </CardHeader>

        <Authform type="login" />
      </Card>
    </div>
  );
}
