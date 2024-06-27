import { AppShell } from "@mantine/core";
import Sidebar from "./sideBar";


function MainLayout(){
    return(
        <AppShell
        navbar={<Sidebar />}
        padding='md'>
            
        </AppShell>

    )
}

export default MainLayout;