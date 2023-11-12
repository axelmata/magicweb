import { Sidebar } from '@/components/menus/Sidebar';
import { NavbarTop } from '../../components/menus/NavbarTop';

export default function MypageLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
        <NavbarTop/>
        <Sidebar/>
        {children}
    </div>
  );
}