import { NavbarTop } from '@/components';
import { ImageHeader } from '@/components/home/ImageHeader';
import { Sidebar } from '@/components/menus/Sidebar';

export default function MypageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative'>
      <ImageHeader />
      <div className='px-5'>
        <NavbarTop />
        <Sidebar />
        {children}
      </div>






    </div>
  );
}