import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  slug: string;
  title: string;
  author: string;
  authorUrl: string;
  date: string;
  excerpt: string;
  image: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog posts metadata
    const fetchPosts = async () => {
      try {
        // In a real implementation, this would fetch from a generated index
        const postsData: BlogPost[] = [
          {
            slug: 'welcome-to-mfbt',
            title: 'Welcome to Move Fast and Break Things',
            author: 'Yurij Mikhalevich',
            authorUrl: 'https://github.com/yurijmikhalevich',
            date: '2025-10-01',
            excerpt: 'Learn about our community\'s mission to empower developers to build, experiment, and innovate without fear.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop',
          },
          {
            slug: 'building-minerva',
            title: 'Building Minerva - A GPT-Powered Learning Companion',
            author: 'Yurij Mikhalevich',
            authorUrl: 'https://github.com/yurijmikhalevich',
            date: '2025-09-15',
            excerpt: 'The story behind creating Minerva, an AI Discord bot designed to help students learn software development.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop',
          },
          {
            slug: 'hackathon-announcement',
            title: 'MFBT Website Redesign Hackathon',
            author: 'Community',
            authorUrl: 'https://github.com/move-fast-and-break-things',
            date: '2025-10-03',
            excerpt: 'Join us in redesigning the Move Fast and Break Things community website. Show off your skills and win prizes!',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop',
          },
        ];
        
        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Stories, insights, and updates from the Move Fast and Break Things community
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading posts...</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <time>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</time>
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <a
                        href={post.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <User size={14} />
                        <span>{post.author}</span>
                      </a>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="gap-2">
                          Read more <ArrowRight size={14} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
