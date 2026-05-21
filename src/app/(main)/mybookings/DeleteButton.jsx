"use client";

import { AlertDialog, Button } from "@heroui/react";
import { LuTrash2 } from "react-icons/lu";

const DeleteButton = ({ facilityId, token }) => {

    const handelDelete = async () => {
        const res = await fetch(
            `http://localhost:5000/mybookings/${facilityId}`,
            {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            }
        );

        const result = await res.json();
        console.log(result);
    };

    return (
        <AlertDialog>
            <Button variant="danger">Delete Project</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger className={`text-white`} />
                        <AlertDialog.Header>
                            <LuTrash2 />
                            <AlertDialog.Heading className="text-white">Delete my Bookings?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body className="text-white">
                            <p>
                                After clicking delete, your Booking will canceled.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" className={`text-white`} variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handelDelete} slot="close" variant="danger">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteButton;