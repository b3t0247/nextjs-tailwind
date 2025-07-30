export default async function LocaleRoot({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await Promise.resolve(params);

  return (
    <main className="p-6 text-2xl">
      <p>
        Current locale: <strong>{locale}</strong>
      </p>
    </main>
  );
}
