
import AddNewspaper from "@/components/AddNewspaper";

import Dashboard from "@/components/Dashboard";
import Loading from "@/components/Loading";
import Login from "@/components/Login";
import Main from "@/components/Main";
import { useAuth } from "@/context/AuthContext";


export default function DashboardPage() {


    
  return (
    <Main>
        <Dashboard />
    </Main>
  )
}
