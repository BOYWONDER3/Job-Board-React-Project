import { baseApi } from "@/services/baseApi";
import { jobListingFormSchema } from "@backend/constants/schemas/jobListings";
import { z } from "zod";
import { jobListingSchema } from "../constants/schemas";
import { JOB_LISTING_DURATIONS } from "@backend/constants/types";

export function createJobListing(data: z.infer<typeof jobListingFormSchema>) {
  return baseApi
    .post("/job-listings", data)
    .then((res) => jobListingSchema.parseAsync(res.data));
}

export function getAllMyListings() {
  return baseApi
    .get("/job-listings/my-listings")
    .then((res) => z.array(jobListingSchema).parseAsync(res.data));
}

export function deleteListing(id: string) {
  return baseApi.delete(`/job-listings/${id}`);
}

export function getJobListing(id: string) {
  return baseApi
    .get(`/job-listings/${id}`)
    .then((res) => jobListingSchema.parseAsync(res.data));
}

export function editJobListing(
  id: string,
  data: z.infer<typeof jobListingFormSchema>
) {
  return baseApi
    .put(`/job-listings/${id}`, data)
    .then((res) => jobListingSchema.parseAsync(res.data));
}

export function createPublishPaymentIntent(
  id: string,
  duration: (typeof JOB_LISTING_DURATIONS)[number]
) {
  return baseApi
    .post<{ clientSecret: string}> (`/job-listings/${id}/create-publish-payment-intent`, { duration })
    .then((res) => res.data);
}

export function getAllPublishedListings() {
  return baseApi
    .get("/job-listings/published")
    .then(res => z.array(jobListingSchema).parseAsync(res.data))
}