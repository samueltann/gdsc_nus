import { Link, Navigate, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

/**
 * Convert a YouTube watch / share / embed URL into an embeddable URL.
 * Supports youtu.be/<id>, watch?v=<id>, and /embed/<id> forms.
 * Returns null if no video id can be extracted.
 */
function toYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([\w-]{11})/,
    /[?&]v=([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
  ];
  for (const re of patterns) {
    const match = url.match(re);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
  }
  return null;
}

export default function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const similarProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 4);

  const videoEmbedUrl = toYouTubeEmbedUrl(project.videoUrl);

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16">
        {/* Hero Section */}
        <div className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
            {/* Logo */}
            <div className="flex-shrink-0 w-full md:w-36 flex items-center justify-center">
              <div className="w-full max-w-36 aspect-square rounded-xl border border-slate-200 bg-slate-50 p-4 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {project.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {project.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Intro Video */}
        {videoEmbedUrl && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Project Video
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
              <iframe
                src={videoEmbedUrl}
                title={`${project.title} project video`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* About Section */}
        <section className="mt-12 max-w-2xl space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Organisation Context
            </h2>
            <p className="text-base leading-7 text-slate-700">
              {project.organisationContext}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Problem Statement
            </h2>
            <p className="text-base leading-7 text-slate-700">
              {project.problemStatement}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Project Goals and Solution
            </h2>
            <p className="text-base leading-7 text-slate-700">
              {project.projectGoals}
            </p>
          </div>
        </section>

        {similarProjects.length > 0 && (
          <section className="mt-16 border-t border-slate-200 pt-10">
            <h2 className="text-xl font-semibold text-slate-900">
              Similar Projects
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {similarProjects.map((similar) => (
                <Link
                  key={similar.slug}
                  to={`/projects/${similar.slug}`}
                  className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-md"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {similar.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {similar.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-14 flex justify-start">
          <Link
            to="/projects"
            className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
