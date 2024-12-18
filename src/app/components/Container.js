export default function Container({ children }) {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 max-w-5xl">
      {children}
    </div>
  );
}
