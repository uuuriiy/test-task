import { Providers } from '../providers/index';
import { fonts } from '../fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.oswald.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
