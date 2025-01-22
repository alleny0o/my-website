import Image from "next/image";
import { client } from "@/lib/sanity";
import { ExperiencesCard } from "@/lib/interface";

function formatDate(dateString: string) {
  if (!dateString) return 'Present';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

async function getExperiences() {
  const query = `*[_type == 'experience'] | order(order asc) {
    _id,
    companyName,
    companyUrl,
    description,
    jobTitle,
    "companyLogo": companyLogo.asset->url,
    startDate,
    endDate,
  }`;

  const data = await client.fetch(query, {}, {next: { revalidate: 30 }});
  return data;
}

export async function ExperienceTimeline() {
  const data: ExperiencesCard[] = await getExperiences();

  if (!data || data.length === 0) {
    return (
      <div className="mt-4">
        <div className="bg-gray-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extralight mb-4">Experience</h2>
          <p className="text-gray-600 text-lg">Coming soon! Currently seeking new opportunities.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-extralight mb-8 px-4">Experience</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200" />
        
        <div className="space-y-12">
          {data.map((experience) => (
            <div key={experience._id} className="relative pl-20 pr-4">
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-gray-400" />
              
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shadow-sm flex-shrink-0">
                    {experience.companyLogo && (
                      <Image 
                      src={experience.companyLogo} 
                      alt={`${experience.companyName} logo`} 
                      width={64}
                      height={64}
                      className="object-cover p-2 w-full h-full rounded-xl"
                    />
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-lg font-medium">{experience.companyName}</h3>
                      <a 
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        Visit Company ↗
                      </a>
                    </div>
                    <p className="text-gray-600 font-medium">{experience.jobTitle}</p>
                    <p className="text-sm text-gray-500">
                      {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}