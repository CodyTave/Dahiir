export default function Button({
  children,
  onClick,
  light,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  light?: boolean;
  className?: string;
}) {
  return (
    <>
      {light ? (
        <button
          onClick={onClick}
          className={
            "hover:border-dark-3 px-8 py-2 rounded-md font-semibold bg-light-0 border border-light-0 text-dark-3 transall xxs:text-base text-sm " +
            className
          }
        >
          {children}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={
            "bg-dark-3 text-light-0 px-8 py-2 rounded-md font-semibold hover:bg-light-0 border border-dark-3 hover:text-dark-3 transall xxs:text-base text-sm " +
            className
          }
        >
          {children}
        </button>
      )}
    </>
  );
}
