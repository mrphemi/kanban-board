import Nav from "@/components/Dashboard/Nav/Nav";

interface LayoutProps {
    children: React.ReactNode;
    add: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Nav />
            {props.children}
            {props.add}
        </>
    );
}
