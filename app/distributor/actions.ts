"use server";

import { prisma } from "@/lib/prisma";
import { distributorSchema } from "@/validations/distributors";

export type DistributorActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitDistributor(
  prevState: DistributorActionState,
  formData: FormData
): Promise<DistributorActionState> {
  try {
    // Convert FormData to object
    const rawData = {
      shopName: formData.get("shopName"),
      ownerName: formData.get("ownerName"),
      mobileNumber: formData.get("mobileNumber"),
      shopAddress: formData.get("shopAddress"),
      pincode: formData.get("pincode"),
      shopType: formData.get("shopType"),
      gstNumber: formData.get("gstNumber"),
      shopPhotoUrl: formData.get("shopPhotoUrl"),
    };

    // Validate using Zod
    const validated = distributorSchema.safeParse(rawData);

    if (!validated.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validated.error.flatten().fieldErrors,
      };
    }

    const data = validated.data;

    // Save to DB
    await prisma.distributorLead.create({
      data: {
        shopName: data.shopName,
        ownerName: data.ownerName,
        mobileNumber: data.mobileNumber,
        shopAddress: data.shopAddress,
        pincode: data.pincode,
        shopType: data.shopType,
        gstNumber: data.gstNumber || null,
        shopPhotoUrl: data.shopPhotoUrl || null,
      },
    });

    return {
      success: true,
      message: "Distributor request submitted successfully",
    };
  } catch (error) {
    console.error("Distributor submission error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}