import { Avatar, AppShell, Button, Flex, Space, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconHome, IconUser, IconFileDescription, IconPhoto, IconMail } from '@tabler/icons-react';
import styles from '../styles/sidebar.module.css';

function Sidebar() {
  const [opened] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <AppShell
      navbar={{
        width: 230,
        breakpoint: 'md',
        collapsed: { mobile: !opened },
        
      }}
      padding="xl">
      <AppShell.Navbar className={styles.navbar} p='xl'>
        <Flex align='center' justify='center' direction='column'>
          {!isMobile&&(
            <Avatar 
            src='\Images\profile.png'
            alt="Profile Picture"
            variant='transparent' 
            size='xl' 
          />
          )}
          <Space h='sm' />
          <Text size="xl" fw={700}>David Martinez</Text>
        </Flex>
        
        <Flex justify='center' align='flex-start' direction='column' gap='xs'>
          <Button className={styles.buttonMenu} leftSection={<IconHome size={20} />} variant='transparent' size="md">
            Home
          </Button>
          <Button className={styles.buttonMenu} leftSection={<IconUser size={20} />} variant='transparent' size="md">
            About
          </Button>
          <Button className={styles.buttonMenu} leftSection={<IconFileDescription size={20} />} variant='transparent' size="md">
            Resume
          </Button>
          <Button className={styles.buttonMenu} leftSection={<IconPhoto size={20} />} variant='transparent' size="md">
            Portfolio
          </Button>
          <Button className={styles.buttonMenu} leftSection={<IconMail size={20} />} variant='transparent' size="md">
            Contact
          </Button>
        </Flex>
      </AppShell.Navbar>
    </AppShell>
  );
}

export default Sidebar;
