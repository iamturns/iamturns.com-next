import { GetStaticProps } from "next";
import Link from "next/link";

import { getContentItems } from "../app/features/content/get";

interface ListingItem {
  id: string;
  url: string;
}

interface Props {
  listing: ListingItem[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contentItems = await getContentItems();

  const listing: ListingItem[] = contentItems.map((content) => ({
    id: content.id,
    url: content.url,
  }));

  return {
    props: {
      listing,
    },
  };
};

export default function Index({ listing }: Props) {
  return (
    <ul>
      {listing.map((listingItem) => (
        <li key={listingItem.id}>
          <Link href={listingItem.url}>
            <a>{listingItem.id}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
