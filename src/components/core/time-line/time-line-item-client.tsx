"use client";
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import TransTypography from '../trans-typography';
import { useLocalePath } from '@/hooks/use-locale-path';

type Props = {
  route?: string;
  buttonText: string;
};

const TimeLineItemClient = ({ route, buttonText }: Props) => {
  const { getLocalePath } = useLocalePath();

  return (
    <Link href={getLocalePath(route ?? '/resume')} className="w-full">
      <Button variant={'default'} className="group ml-auto flex flex-row items-center" size={'sm'}>
        <TransTypography className="text-md sm:text-sm " message={buttonText} />
        <span className="material-symbols-outlined ml-2 text-md group-hover:translate-x-1 transition-transform duration-300">
          <ChevronRight />
        </span>
      </Button>
    </Link>
  );
};

export default TimeLineItemClient;
