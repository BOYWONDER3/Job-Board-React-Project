import { MyJobListingsPage } from "./page";
import { loader } from './loader'
import { PrivatePage } from "@/components/routing/PrivatePage";

export const myJobListingsRoute = {
    loader,
    element: (
        <PrivatePage>
         <MyJobListingsPage />
         </PrivatePage>
    ),
}