// Listing 10.16 Creating StarRepoButton.tsx file in the src/repoPage folder.

type Props = {
    onClick: () => void;
};

export function StarRepoButton({ onClick }: Props) {
    return (
        <button
            type="button"
            className="mt-2 h-10 px-6 font-semibold bg-black text-white"
            onClick={onClick}
        >
            Star
        </button>
    )
}