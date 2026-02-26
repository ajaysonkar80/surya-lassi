import { prisma } from "@/lib/prisma";

export default async function TestDBPage() {
  try {
    const count = await prisma.distributorLead.count();

    return (
      <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h1>✅ Database Connected Successfully</h1>
        <p>Total Distributor Leads: {count}</p>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h1>❌ Database Connection Failed</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
}