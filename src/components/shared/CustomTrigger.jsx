import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function CustomTrigger() {

    const router = useRouter();

    const { data: session } = authClient.useSession()
    console.log(session);

    const handelSignOut = async e => {
        await authClient.signOut();
        router.push('/booking')
    }

    return (
        <Dropdown>
            <Dropdown.Trigger className={`border-4 border-black/20 dark:border-white/20 rounded-full`}>
                <Avatar className="rounded-full ">
                    <Avatar.Image
                        className="rounded-full w-9 h-9"
                        alt="Junior Garcia"
                        src={`${session?.user?.image || 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg'} `}
                    />
                    <Avatar.Fallback className="rounded-full w-9 h-9" delayMs={600}>{session?.user?.name}</Avatar.Fallback>
                </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover className=" bg-transparent backdrop-blur-[8px] p-4 shadow dark:shadow-white/20 shadow-black/20 rounded-2xl" >
                <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                        <Avatar className="w-16 h-16 rounded-full">

                            <Avatar.Image
                                className="rounded-full w-full h-full "
                                alt="Jane"
                                src={`${session?.user?.image || 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg'} `}
                            />
                            <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>

                        </Avatar>
                        <div className="flex flex-col gap-0">
                            <p className="text-sm text-black dark:text-white leading-5 font-medium">{`${session?.user?.name || 'Jane Doe'} `} </p>
                            <p className="text-xs text-black dark:text-white leading-none  ">{`${session?.user?.email || 'example@email.com'} `}  </p>
                        </div>
                    </div>
                </div>
                <Dropdown.Menu>
                    
                    <Dropdown.Item className="text-black dark:text-white" id="profile" textValue="Profile">
                        <Link href={'/profile/mybookings'}>
                            <Label>Profile</Label>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="text-black dark:text-white" id="settings" textValue="Settings">
                        <div className="flex w-full items-center justify-between gap-2">
                            <Label>Settings</Label>
                            <Gear className="size-3.5  " />
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="text-black dark:text-white" id="new-project" textValue="New project">
                        <div className="flex w-full items-center justify-between gap-2">
                            <Label>Create Team</Label>
                            <Persons className="size-3.5  " />
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={handelSignOut} className="text-red-400" id="logout" textValue="Logout" variant="danger">
                        <div className="flex w-full items-center justify-between gap-2">
                            <Label>Log Out</Label>
                            <ArrowRightFromSquare className="size-3.5 text-danger" />
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}