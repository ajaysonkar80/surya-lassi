import {
  getDistributorLeads,
  deleteDistributorLead,
} from "./actions";

import { revalidatePath } from "next/cache";

type PageProps = {
  searchParams?: {
    page?: string;
  };
};

export default async function AdminDistributorsPage({
  searchParams,
}: PageProps) {
  const currentPage = Number(searchParams?.page) || 1;

  const result = await getDistributorLeads(currentPage, 10);

  if (!result.success || !result.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">
          Failed to load distributor leads
        </h1>
      </div>
    );
  }

  const { leads, totalPages } = result.data;

  async function handleDelete(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;

    await deleteDistributorLead(id);
    revalidatePath("/admin/distributors");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">
          Distributor Leads
        </h1>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left text-gray-800">
            {/* Table Header */}
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Shop</th>
                <th className="px-4 py-3 font-semibold">Owner</th>
                <th className="px-4 py-3 font-semibold">Mobile</th>
                <th className="px-4 py-3 font-semibold">Pincode</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold text-center">
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white">
              {leads.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-6 text-gray-500"
                  >
                    No distributor leads found.
                  </td>
                </tr>
              )}

              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {lead.shopName}
                  </td>

                  <td className="px-4 py-3 text-gray-700">
                    {lead.ownerName}
                  </td>

                  <td className="px-4 py-3 text-gray-700">
                    {lead.mobileNumber}
                  </td>

                  <td className="px-4 py-3 text-gray-700">
                    {lead.pincode}
                  </td>

                  <td className="px-4 py-3 text-gray-700">
                    {lead.shopType.replace("_", " ")}
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <form action={handleDelete}>
                      <input
                        type="hidden"
                        name="id"
                        value={lead.id}
                      />
                      <button
                        type="submit"
                        className="bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;

              return (
                <a
                  key={pageNumber}
                  href={`/admin/distributors?page=${pageNumber}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    pageNumber === currentPage
                      ? "bg-orange-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {pageNumber}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}