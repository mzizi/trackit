"use client";

import { useParams } from "next/navigation";

import { ApiAlert } from "@/components/ui/api-alert";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

import { useOrigin } from "@/hooks/use-origin";

interface ApiListProps {
  title?: string;
  entityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
  title,
  entityName,
  entityIdName,
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <div className="flex flex-col gap-2">
      <Heading title="API" description={`API Calls for ${title}`} />
      <Separator />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </div>
  );
};
