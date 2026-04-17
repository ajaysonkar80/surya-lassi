"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitDistributor, DistributorActionState } from "./actions";

const initialState: DistributorActionState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[#c2a16d] text-white py-3 rounded-lg font-semibold hover:bg-[#b08f5c] transition disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-[#c2a16d] focus:ring-offset-2"
    >
      {pending ? "Submitting..." : "Submit Application"}
    </button>
  );
}

export default function DistributorPage() {
  const [state, formAction] = useFormState(
    submitDistributor,
    initialState
  );

  const inputBaseStyles =
    "w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 caret-purple-600";

  return (
    <div className="min-h-screen bg-[#fffbf2] flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-2xl p-10 border border-purple-100">
        <h1 className="text-4xl font-bold text-purple-800 mb-3">
          Become a Distributor
        </h1>

        <p className="text-gray-700 mb-8">
          Partner with us and grow your business with our premium lassi products.
        </p>

        {state.success && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-200">
            {state.message}
          </div>
        )}

        {!state.success && state.message && (
          <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg border border-red-200">
            {state.message}
          </div>
        )}

        <form action={formAction} className="space-y-6">
          {/* Shop Name */}
          <div>
            <label className="block font-semibold text-purple-900 mb-2">
              Shop Name
            </label>
            <input
              name="shopName"
              placeholder="Enter your shop name"
              className={inputBaseStyles}
            />
            {state.errors?.shopName?.[0] && (
              <p className="text-red-600 text-sm mt-1">
                {state.errors.shopName[0]}
              </p>
            )}
          </div>

          {/* Owner Name */}
          <div>
            <label className="block font-semibold text-purple-900 mb-2">
              Owner Name
            </label>
            <input
              name="ownerName"
              placeholder="Enter owner's full name"
              className={inputBaseStyles}
            />
            {state.errors?.ownerName?.[0] && (
              <p className="text-red-600 text-sm mt-1">
                {state.errors.ownerName[0]}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="block font-semibold text-purple-900 mb-2">
              Mobile Number
            </label>
            <input
              name="mobileNumber"
              placeholder="Enter 10-digit mobile number"
              className={inputBaseStyles}
            />
            {state.errors?.mobileNumber?.[0] && (
              <p className="text-red-600 text-sm mt-1">
                {state.errors.mobileNumber[0]}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold text-purple-900 mb-2">
              Shop Address
            </label>
            <textarea
              name="shopAddress"
              placeholder="Enter full shop address"
              rows={4}
              className={inputBaseStyles}
            />
            {state.errors?.shopAddress?.[0] && (
              <p className="text-red-600 text-sm mt-1">
                {state.errors.shopAddress[0]}
              </p>
            )}
          </div>

          {/* Pincode */}
          <div>
            <label className="block font-semibold text-purple-900 mb-2">
              Pincode
            </label>
            <input
              name="pincode"
              placeholder="Enter 6-digit pincode"
              className={inputBaseStyles}
            />
            {state.errors?.pincode?.[0] && (
              <p className="text-red-600 text-sm mt-1">
                {state.errors.pincode[0]}
              </p>
            )}
          </div>

          {/* Shop Type */}
          <div>
            <label className="block font-semibold text-purple-900 mb-2">
              Shop Type
            </label>
            <select
              name="shopType"
              className={inputBaseStyles}
              defaultValue=""
            >
              <option value="" disabled>
                Select Shop Type
              </option>
              <option value="GENERAL_STORE">General Store</option>
              <option value="SUPERMARKET">Supermarket</option>
              <option value="DAIRY_SHOP">Dairy Shop</option>
              <option value="RESTAURANT">Restaurant</option>
              <option value="CAFE">Cafe</option>
              <option value="WHOLESALER">Wholesaler</option>
              <option value="OTHER">Other</option>
            </select>
            {state.errors?.shopType?.[0] && (
              <p className="text-red-600 text-sm mt-1">
                {state.errors.shopType[0]}
              </p>
            )}
          </div>

          {/* GST */}
          <div>
            <label className="block font-semibold text-purple-900 mb-2">
              GST Number (Optional)
            </label>
            <input
              name="gstNumber"
              placeholder="Enter GST number (if available)"
              className={inputBaseStyles}
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block font-semibold text-purple-900 mb-2">
              Shop Photo URL (Optional)
            </label>
            <input
              name="shopPhotoUrl"
              placeholder="Paste image URL"
              className={inputBaseStyles}
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}