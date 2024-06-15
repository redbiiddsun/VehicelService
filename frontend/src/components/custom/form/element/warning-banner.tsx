export default function WarningBanner({
  children,
}: {
  children: string | undefined;
}) {
  return <p className="text-destructive text-sm h-4">{children}</p>;
}
