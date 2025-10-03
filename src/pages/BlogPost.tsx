import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PostData {
  title: string;
  author: string;
  authorUrl: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/blog/${slug}.md`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        
        const markdown = await response.text();
        const { data, content } = matter(markdown);
        
        setPost({
          title: data.title,
          author: data.author,
          authorUrl: data.authorUrl,
          date: data.date,
          excerpt: data.excerpt,
          image: data.image,
          content,
        });
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post');
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-4xl text-center py-12">
            <p className="text-muted-foreground">Loading post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-4xl text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">{error || 'The blog post you are looking for does not exist.'}</p>
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft size={16} />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <a
                href={post.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <User size={16} />
                <span>{post.author}</span>
              </a>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <time>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>
            </div>
          </div>

          {post.image && (
            <div className="mb-12 rounded-lg overflow-hidden animate-fade-in">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg prose-invert max-w-none animate-fade-in">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
                p: ({ children }) => <p className="text-lg leading-relaxed mb-4 text-foreground/90">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="text-lg text-foreground/90">{children}</li>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary underline transition-colors"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{children}</code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft size={16} />
                Back to Blog
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
