interface LayoutProps {
  children: React.ReactNode;
  editTask: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      {props.children}
      {props.editTask}
    </>
  );
}
