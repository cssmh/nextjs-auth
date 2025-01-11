import { UserProps } from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = (await getServerSession(authOptions)) as UserProps | null;;
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To Dashboard Page
          </h1>
          <h2 className="text-center mt-1">
            Logged in user email {session?.user?.email}
          </h2>
          <h2 className="text-center mb-1">{session?.user?.name}</h2>
          <Image
            src={
              session?.user?.image ||
              "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
            }
            width={100}
            height={100}
            alt="user"
            className="mx-auto rounded-full"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
