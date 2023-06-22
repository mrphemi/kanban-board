import Nav from "@/components/Dashboard/Nav/Nav";

interface LayoutProps {
  children: React.ReactNode;
  edit: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      {props.children}
      {props.edit}
    </>
  );
}
