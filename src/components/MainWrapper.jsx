export const MainWrapper = (props) => {
  return (
    <main>
      <div className="container pt-4">{props.children}</div>
    </main>
  );
};
