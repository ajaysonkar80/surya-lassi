import { z } from "zod";

export const distributorSchema = z.object({
  shopName: z
    .string()
    .min(2, "Shop name must be at least 2 characters"),

  ownerName: z
    .string()
    .min(2, "Owner name must be at least 2 characters"),

  mobileNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),

  shopAddress: z
    .string()
    .min(5, "Shop address is required"),

  pincode: z
    .string()
    .regex(/^\d{6}$/, "Enter valid 6-digit pincode"),

  shopType: z
    .string()
    .min(2, "Shop type is required"),

  gstNumber: z
    .string()
    .optional()
    .or(z.literal("")),

  shopPhotoUrl: z
    .string()
    .url("Invalid image URL")
    .optional()
    .or(z.literal("")),
});

export type DistributorInput = z.infer<typeof distributorSchema>;