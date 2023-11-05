import { baseApi } from "@/services/baseApi";
import { jobListingFormSchema } from "@backend/constants/schemas/jobListings";
import { z } from "zod";
import { jobListingSchema } from "./constants/schemas";

export function createJobListing(data: z.infer<typeof jobListingFormSchema>) {
  return baseApi
    .post("/job-listings", data)
    .then((res) => jobListingSchema.parseAsync(res.data));
}
