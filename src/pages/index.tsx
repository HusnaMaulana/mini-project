import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Sidebar from '../components/sideBar';
import LandingPage from '../components/landingPage';

export default function Home() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      navbar={{
        width: 230,
        breakpoint: 'md',
        collapsed: { mobile: !opened },
        
      }}
    >

      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <LandingPage />
      </AppShell.Main>
    </AppShell>
  );
}
