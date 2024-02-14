import clsx from 'clsx';

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const btnClassName = clsx(
    'bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded shadow',
    className
  );

  return <button className={btnClassName}>{children}</button>;
}
