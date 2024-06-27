import { Avatar, Button, Flex, Space, Text } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import { IconHome, IconUser, IconFileDescription, IconPhoto, IconMail } from '@tabler/icons-react';
import styles from '../styles/sidebar.module.css';

function Sidebar() {
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <Flex direction="column" p="xl" className={styles.navbar}>
      <Flex align='center' justify='center' direction='column'>
        {!isMobile && (
          <Avatar 
            src='/Images/profile.png' // Pastikan menggunakan forward slashes
            alt="Profile Picture"
            variant='transparent' 
            size='xl' 
          />
        )}
        <Space h='sm' />
        <Text size="22px" fw={700}>David Martinez</Text>
      </Flex>
      <Space h='xl'/>
      <Flex justify='center' align='flex-start' direction='column' gap='xs'>
        <Button className={styles.buttonMenu} leftSection={<IconHome size={20} />} variant='transparent' size="xl">
          Home
        </Button>
        <Button className={styles.buttonMenu} leftSection={<IconUser size={20} />} variant='transparent' size="xl">
          About
        </Button>
        <Button className={styles.buttonMenu} leftSection={<IconFileDescription size={20} />} variant='transparent' size="xl">
          Resume
        </Button>
        <Button className={styles.buttonMenu} leftSection={<IconPhoto size={20} />} variant='transparent' size="xl">
          Portfolio
        </Button>
        <Button className={styles.buttonMenu} leftSection={<IconMail size={20} />} variant='transparent' size="xl">
          Contact
        </Button>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
