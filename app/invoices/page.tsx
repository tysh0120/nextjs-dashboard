export default async function Page() {
  await new Promise((res) => { setTimeout(res, 2000) });
  return (
    <div>invoices..</div>
  );
}
