import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const Confimation = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">
            delete account
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader className="">
            <AlertDialogTitle className="text-gray-800">
              Do you want to delete your account ?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              This action cannot be undone. You will not be able to get access.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="">
            <AlertDialogCancel className="text-gray-600 hover:text-gray-800">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className=" bg-black hover:bg-red-600  text-white">
              {/* // onClick={logoutHandler}  */}
              <p> Delete Account</p>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Confimation;
