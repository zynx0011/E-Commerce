import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const adminVerify = asyncHandler(async (req, _, next) => {
  try {
    const user = req.user;
    if (!user.isAdmin) {
      throw new ApiError(402, "admin not found");
    }

    // req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "invalid token error");
  }
});
