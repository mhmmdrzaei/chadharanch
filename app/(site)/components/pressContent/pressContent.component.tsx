import { PortableText } from "@portabletext/react";
import {Press} from '@/sanity/types/Press'

type LinkMark = {
  blank?: boolean;
  href: string;
};

type Components = {
  marks: {
    link: (props: { value: LinkMark; children: React.ReactNode }) => React.ReactNode;
  };
};

type HeaderProps = {
  press: Press[];
};

const components: Components = {
  marks: {
    link: ({ value, children }) => {
      const { blank, href } = value;
      return blank ? (
        <a href={href} target="_blank" rel="noopener">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

export default function PressContent({ press }: HeaderProps) {
  return (
    <>
      {press.map((pressPage) => (
        <section className="pageMain" key={pressPage._id}>
          <h2>{pressPage.pageTitle}</h2>
          <PortableText value={pressPage.presslistings} components={components as any} />
        </section>
      ))}
    </>
  );
}

  