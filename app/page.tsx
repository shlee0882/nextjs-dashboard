import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Head from 'next/head';
import NumberPad from './ui/main/digit-number';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Responsive Grid with Next.js and Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NumberPad />
      </main>
    </div>
  );
}




