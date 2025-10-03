import { useEffect, useState } from 'react';

interface Creator {
  name: string;
  bio: string | null;
  avatar: string;
  html_url: string;
}

const Creators = () => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const response = await fetch('https://api.github.com/orgs/move-fast-and-break-things/members');
        if (!response.ok) {
          throw new Error('Failed to fetch members');
        }
        const members = await response.json();

        const creatorsData = await Promise.all(
          members.map(async (member: { url: string }) => {
            const userResponse = await fetch(member.url);
            if (!userResponse.ok) {
              throw new Error('Failed to fetch user data');
            }
            const userData = await userResponse.json();
            return {
              name: userData.name || userData.login,
              bio: userData.bio,
              avatar: userData.avatar_url,
              html_url: userData.html_url,
            };
          })
        );

        setCreators(creatorsData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  return (
    <section id="creators" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase">Creators</h2>

        {loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading creators...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-destructive">Error loading creators: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.map((creator, index) => (
              <a
                key={index}
                href={creator.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-16 h-16 rounded-full border-2 border-primary group-hover:scale-110 transition-transform"
                  />
                  <h3 className="font-semibold text-lg glow-hover">{creator.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {creator.bio || 'No biography available'}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Creators;
