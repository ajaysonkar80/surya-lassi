"use server";

import { prisma } from "@/lib/prisma";

/* ================================
   Types
================================ */

export type DistributorLeadData = {
  id: string;
  shopName: string;
  ownerName: string;
  mobileNumber: string;
  shopAddress: string;
  pincode: string;
  shopType: string;
  gstNumber: string | null;
  shopPhotoUrl: string | null;
  createdAt: Date;
};

export type GetLeadsResult = {
  success: boolean;
  data?: {
    leads: DistributorLeadData[];
    total: number;
    totalPages: number;
    currentPage: number;
  };
  message?: string;
};

export type SingleLeadResult = {
  success: boolean;
  data?: DistributorLeadData | null;
  message?: string;
};

export type ActionResult = {
  success: boolean;
  message: string;
};

/* ================================
   Get Paginated Distributor Leads
================================ */

export async function getDistributorLeads(
  page: number = 1,
  limit: number = 10
): Promise<GetLeadsResult> {
  try {
    const skip = (page - 1) * limit;

    const [leads, total] = await Promise.all([
      prisma.distributorLead.findMany({
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: limit,
      }),
      prisma.distributorLead.count(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      success: true,
      data: {
        leads,
        total,
        totalPages,
        currentPage: page,
      },
    };
  } catch (error) {
  console.error("REAL ERROR:", error);
  throw error;
}
}

/* ================================
   Get Single Distributor Lead
================================ */

export async function getDistributorLeadById(
  id: string
): Promise<SingleLeadResult> {
  try {
    const lead = await prisma.distributorLead.findUnique({
      where: { id },
    });

    return {
      success: true,
      data: lead,
    };
  } catch (error) {
    console.error("Error fetching distributor lead:", error);

    return {
      success: false,
      message: "Failed to fetch distributor lead",
    };
  }
}

/* ================================
   Delete Distributor Lead
================================ */

export async function deleteDistributorLead(
  id: string
): Promise<ActionResult> {
  try {
    await prisma.distributorLead.delete({
      where: { id },
    });

    return {
      success: true,
      message: "Distributor lead deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting distributor lead:", error);

    return {
      success: false,
      message: "Failed to delete distributor lead",
    };
  }
}