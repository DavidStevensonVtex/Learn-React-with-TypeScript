// Listing 6-31. Adding a lazy admin page to the app in src/pages/AdminPage.tsx

export default function AdminPage() {
    return (
        <div className="text-center p-5 text-xl">
            <h1 className="text-xl text-slate-900">Admin Panel</h1>
            <p className="text-base text-slate-900">
                You shouldn't come here often because I'm lazy
            </p>
        </div>
    )
}