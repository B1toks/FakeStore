import { Geist } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import Providers from './providers';
import './global.css';

const geist = Geist({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'FakeStore',
    template: '%s | FakeStore',
  },
  description: 'A small Next.js 15 + Redux Toolkit demo store consuming the FakeStore API.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Providers>
          <div className="app">
            <Header title="FakeStore" />
            <div className="main">
              <SideBar title="Menu" />
              <div className="content">{children}</div>
            </div>
            <Footer title="Built by Oleksandr Honchar" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
