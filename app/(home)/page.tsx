import ToDocsBtn from '@/components/to-docs-btn';
import { DOCS } from '@/consts';
import IconFour from '@/components/icons/four';

export default function HomePage() {
  const title = "Formulate, Organize, Unite, Reflect.";

  const paragraph = (
    <>
      With the limited time, that we have on this Earth, I plan on leaving, a few things behind.<br />
      - AIM. FOUR. SAFE. FUTURE.
    </>
  );

  const description = (
    <>
      <a href={`/docs/home`}>cd /docs</a>
      <br /><br />
      <span className="text-sm">{paragraph}</span>
    </>
  );

  return (
    <>
      <main className="container flex flex-col gap-8 py-8 lg:gap-10 lg:py-10 max-w-7xl">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-fd-card mb-4 aspect-square rounded-full border p-6 lg:p-6">
            <IconFour className="size-36 shrink-0 lg:size-32 icon-adjust-memo -ml-1" aria-label="safe.apescasio.fr" />
          </div>
          <h1 className="text-2xl font-semibold lg:text-4xl">{title}</h1>
          <p className="text-fd-muted-foreground lg:text-lg">{description}</p>
        </div>

        {/* Docs */}
        <div className="flex flex-col items-center gap-8">
          <div className="grid max-w-4xl grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-center">
            {Object.values(DOCS).map(({ title, path, icon: Icon }) => (
              <ToDocsBtn
                key={title}
                title={title}
                href={path}
                icon={<Icon className="size-6 shrink-0 lg:size-4" />}
              />
            ))}
          </div>

          <p
            suppressHydrationWarning
            className="text-fd-muted-foreground -mt-4 text-center text-sm lg:text-base"
          >
            © {new Date().getFullYear()} Aaron (Iso) Pescasio /{" "}
            <a
              href="https://apescasio.fr/"
              target="_blank"
              className="hover:text-fd-accent-foreground underline"
            >
              apescasio.fr
            </a>
          </p>
        </div>

      </main>
    </>
  );
}