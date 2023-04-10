import Header from "../components/header";
import UserLayout from "../components/userLayout";
import axios from "axios";
import { useRouter } from "next/router";

export default function UserProfile({ data }) {
    const router = useRouter();
    return(
        <>
        <Header title="User Profile"/>
        <UserLayout user={data} />
        </>

    )

    }

export async function getServerSideProps(context) {
    const id = context.params.id;
    const response = await axios.get(`http://localhost:3000/admin/finduser/${id}`);
    const data = await response.data;
    return { props: { data } }
}