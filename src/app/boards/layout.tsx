import Nav from "@/components/Dashboard/Nav/Nav";

interface LayoutProps {
  children: React.ReactNode;
  add: React.ReactNode;
}

export default function RootLayout(props: LayoutProps) {
  return (
    <>
      <Nav />
      {props.children}
      {props.add}
    </>
  );
}
