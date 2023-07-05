import { ErrorFallback } from "@/components/fallbacks";
import PageLayout from "@/components/layouts/PageLayout";

export default function Loading() {
  return (
    <PageLayout>
      <ErrorFallback />
    </PageLayout>
  );
}
