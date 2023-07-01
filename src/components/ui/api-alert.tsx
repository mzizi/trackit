import { Copy, Server } from "lucide-react";
import { toast } from "react-hot-toast";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "default",
  admin: "destructive",
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  variant = "public",
}) => {
  const onCopy = (description: string) => {
    navigator.clipboard.writeText(description);
    toast.success("API Route copied to clipboard.");
  };

  return (
    <Alert className="!p-4">
      <AlertTitle className="flex items-center gap-x-2">
        <Server className="w-4 h-4" />
        <span className="w-[6ch] font-semibold">{title}</span>
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="flex items-center gap-4 mt-4">
        <code className="relative flex-1 p-2 font-mono text-sm font-medium rounded bg-primary/10">
          {description}
        </code>
        <Button
          size="sm"
          variant="outline"
          title="Copy to clipboard"
          onClick={() => onCopy(description)}
          className="!bg-secondary !text-secondary-foreground "
        >
          <Copy className="w-4 h-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
