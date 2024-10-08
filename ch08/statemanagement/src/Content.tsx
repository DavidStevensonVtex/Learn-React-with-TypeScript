// Listing 8.36 Using Redux in the src/Content.tsx file.

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store/store";

export function Content() {
    const permissions = useSelector(
        (state: RootState) => state.user.permissions
    )

    if (permissions === undefined) {
        return null;
    }

    return permissions.includes("admin") ? (
        <p className="mt-4 text-l text-center">
            Some important stuff that only an admin can do
        </p>
    ) : (
        <p className="mt-4 text-l text-center">
            Insufficient permissions
        </p>
    )
}