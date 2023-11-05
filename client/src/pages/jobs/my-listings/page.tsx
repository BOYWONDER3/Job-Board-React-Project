import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function MyJobListingsPage() {
  return (
    <PageHeader
      btnSection={
        <Button variant="outline" asChild>
          <Link to="/jobs/new">Create Listing</Link>
        </Button>
      }
    >
      My Job Listings
    </PageHeader>
  );
}
