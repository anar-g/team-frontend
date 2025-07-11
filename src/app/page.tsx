import HeroSection from '@/components/hero-section'
import { TracingBeam } from '@/components/ui/tracing-beam'

export default function HomePage() {
  const dummyContent = [
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: (
        <>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt Lorem ut
            aliqua anim do. Duis cupidatat qui irure cupidatat incididunt incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur fugiat Lorem
            aute sit ullamco. Qui deserunt non reprehenderit dolore nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in occaecat reprehenderit
            laborum nostrud fugiat voluptate do Lorem culpa officia sint labore. Tempor consectetur excepteur ut fugiat veniam commodo et labore dolore commodo
            pariatur.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad veniam in commodo id reprehenderit adipisicing. Proident duis exercitation ad quis
            ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod reprehenderit deserunt amet laborum consequat adipisicing officia qui irure id sint
            adipisicing. Adipisicing fugiat aliqua nulla nostrud. Amet culpa officia aliquip deserunt veniam deserunt officia adipisicing aliquip proident
            officia sunt.
          </p>
        </>
      ),
      badge: 'React',
      image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non
            voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse
            adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proident reprehenderit.
            Laborum exercitation aliqua reprehenderit ea sint cillum ut mollit.
          </p>
        </>
      ),
      badge: 'Changelog',
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non
            voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse
            adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
        </>
      ),
      badge: 'Launch Week',
      image:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950">
      <HeroSection />
      <TracingBeam className="px-6">
        <div className="mx-auto max-w-2xl pt-4 antialiased">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-sm text-white dark:bg-white dark:text-black">{item.badge}</h2>
              <p className="mb-4 text-xl font-bold text-black dark:text-white">{item.title}</p>
              <div className="prose prose-sm dark:prose-invert text-sm">
                {item?.image && (
                  <img src={item.image || '/placeholder.svg'} alt="blog thumbnail" height="1000" width="1000" className="mb-10 rounded-lg object-cover" />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  )
}
