"use client";

import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import { AlertTriangleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ErrorFallback = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 p-8">
      <span className="w-16 h-16">
        <AlertTriangleIcon />
      </span>
      <h1 className="text-3xl font-extrabold leading-loose capitalize xl:text-5xl">
        Error Loading Page
      </h1>
      <h2 className="text-lg font-medium leading-loose capitalize xl:text-2xl">
        You internet appears to be disconnected. Kindly check & refresh page.
      </h2>
      <Button
        size="lg"
        onClick={() => router.back()}
        className="text-sm font-medium capitalize"
      >
        Return to the homepage
      </Button>
    </div>
  );
};
