interface LayoutProps {
  children: React.ReactNode;
  edit: React.ReactNode;
  task: React.ReactNode;
  info: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      {props.children}
      {props.edit}
      {props.task}
    </>
  );
}
