'use client'

import { useParams, usePathname} from 'next/navigation';
import * as React from 'react';

export interface PostDetailPageProps {
}

export default function PostDetailPage (props: PostDetailPageProps) {
    const pathname = usePathname()
    const params = useParams();

    return (
    <div>
      PostDetailPage
      <p># {pathname.split('/')}</p>
      <br></br>
      <p>{JSON.stringify(params.slug)}</p>
    </div>
  );
}
