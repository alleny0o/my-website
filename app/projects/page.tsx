import { client } from "@/lib/sanity";
import Image from "next/image";
import { ProjectsCard } from "@/lib/interface";

async function getProjects() {
  const query = `*[_type == 'project'] | order(order asc) {
    title,
    _id,
    link,
    description,
    tags,
    "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function ProjectsPage() {
  const data: ProjectsCard[] = await getProjects();

  return (
    <div className="min-h-screen max-w-7xl w-full px-4 md:px-8 mx-auto flex-1 pb-8">
      <h1 className="text-4xl font-semibold pt-5">Projects</h1>
      <p className="leading-7 text-muted-foreground mt-[1px] mb-8">Check out some of my projects!</p>

      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-2xl font-medium mb-4">Coming Soon!</h2>
          <p className="text-muted-foreground max-w-md">
            I&apos;m currently working on some exciting projects. Check back later to see what I&apos;ve been building!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 custom-sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project) => (
            <a
              href={project.link}
              key={project._id}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-background border border-border rounded-lg overflow-hidden transition-all hover:border-primary/50"
            >
              <div className="relative h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-102"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">{project.title}</h2>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
