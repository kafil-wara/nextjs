import AdminHeader from "../components/adminHeader";
import Header from "../components/header";
import UserLayout from "../components/userLayout";
import axios from "axios";
import { useRouter } from "next/router";

export default function UserProfile({ data }) {
    const router = useRouter();
    return (
        <>
            <AdminHeader title="User Profile" />
            <UserLayout user={data} />
        </>

    )

}

export async function getServerSideProps(context) {
    const id = context.params.id;
    const response = await axios.get(`https://nestjs-production-8281.up.railway.app/admin/finduser/${id}`);
    const data = await response.data;
    return { props: { data } }
}