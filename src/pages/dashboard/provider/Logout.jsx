import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

export default function Logout() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const handleOpen = () => setOpen(!open);

    handleOpen();
  }, []);

  return (
    <body>
      <div className="servicebg inset-0 mt-[120px] h-[100vh] w-[100%] overflow-y-auto shadow-lg lg:p-10 ">
        {/* <Button variant="gradient" className="text-black">
          Logout
        </Button> */}

        <Dialog open={open} handler={handleOpen} className=" p-5 inset-0 m-auto rounded-none">
          <DialogHeader className="text-sm mb-3">Logout</DialogHeader>
          <DialogBody>Are You Sure?</DialogBody>

          <DialogFooter>
            <div className="flex justify-between text-sm gap-5">
              <div>
                {" "}
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
              </div>
              <div>
                <Button
                  variant="text"
                  color="green"
                  onClick={() => navigate("/")}
                >
                  <span>Yes</span>
                </Button>
              </div>
            </div>
          </DialogFooter>
        </Dialog>
      </div>
    </body>
  );
}
