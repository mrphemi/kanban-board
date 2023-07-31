import Nav from "@/components/Dashboard/Nav/Nav";

interface LayoutProps {
    children: React.ReactNode;
    add: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Nav />
            <main id="dashboard-content" className="duration-200">
                {props.children}
                {props.add}
            </main>
        </>
    );
}
