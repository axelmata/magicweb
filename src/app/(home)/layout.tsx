import { NavbarTop } from '@/components';
import { Sidebar } from '@/components/menus/Sidebar';

export default function MypageLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className='px-5'>
        <NavbarTop/>
        <Sidebar/>
        {children}
    </div>
  );
}