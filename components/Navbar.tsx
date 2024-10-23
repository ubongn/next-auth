import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Navbar() {


    return (
        <nav className="  py-3 px-4 bg-white shadow-md">
            <div className="max-w-5xl mx-auto flex justify-between items-center">

                <Link href="/" className="text-xl font-bold">
                    Next-Auth
                </Link>

                <div className="flex gap-4">

                    <Link href="/auth/signin">
                        <Button variant="default">Sign In</Button>
                    </Link>

                    <form>
                        <Button variant="default" type="submit">
                            Sign Out
                        </Button>
                    </form>
                </div>
            </div>

        </nav>
    );
}