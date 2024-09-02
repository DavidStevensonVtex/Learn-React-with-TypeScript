// Listing 8.8 Creating src/Header.tsx

import { User } from "./api/authenticate";

type Props = {
    user: undefined | User;
    onSignInClick: () => void;
    loading: boolean;
};

export function Header({
    user,
    onSignInClick,
    loading,
}: Props) {
    return (
        <header className="flex justify-between items-center border-b-2 border-gray-100 py-6">
            {user ? (
                <span className="ml-auto font-bold">
                    {user.name} has signed in
                </span>
            ) : (
                <button
                    onClick={onSignInClick}
                    className="whitespace-nowrap inline-flex items-center justify-center ml-auto px-4 py-2 w-36 border border-transparent rounded-d shadow-sm text-base font-medum text-white bg-indigo-600 hover:bg-indgo-700"
                    disabled={loading}
                >
                    {loading ? '...' : 'Sign in'}
                </button>
            )}
        </header>
    )

}