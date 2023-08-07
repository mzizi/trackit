"use client";

import PageLayout from "@/components/layouts/PageLayout";
import { Loader } from "@/components/ui/loader";

const Loading = () => {
  return (
    <PageLayout>
      <div className="flex items-center justify-center w-full h-full">
        <Loader />
      </div>
    </PageLayout>
  );
};

export default Loading;
