import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  name: string;
  description: string;
  author: string;
  authorUrl: string;
  repoUrl: string;
  imageUrl: string;
  loadMore?: boolean;
}

const projects: Project[] = [
  {
    name: 'Minerva',
    description: 'Minerva is a GPT-powered Discord bot built to help students learn software development.',
    author: 'Yurij Mikhalevich',
    authorUrl: 'https://github.com/yurijmikhalevich',
    repoUrl: 'https://github.com/move-fast-and-break-things/minerva',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    name: 'Cosmetic helper bot',
    description: "This is a bot that helps men in the most difficult moments. The bot recognizes the girl's cosmetics.",
    author: 'Mikhail Voronovskiy',
    authorUrl: 'https://github.com/FiFGamEshka',
    repoUrl: 'https://github.com/move-fast-and-break-things/cosmetic-helper-bot',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop',
  },
  {
    name: 'The List',
    description: 'The application is an assistant to the headman to mark the presence of students in the class.',
    author: 'Community',
    authorUrl: 'https://github.com/move-fast-and-break-things',
    repoUrl: 'https://github.com/move-fast-and-break-things/the-list',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
  },
  {
    name: 'Emoji Translator',
    description: 'The translator helps to find out the mood level of the interlocutor by the emoticons that he sends.',
    author: 'Community',
    authorUrl: 'https://github.com/move-fast-and-break-things',
    repoUrl: 'https://github.com/move-fast-and-break-things/rn-emoji-translator-demo',
    imageUrl: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&h=400&fit=crop',
  },
  {
    name: 'Dr Stone Character Classifier',
    description: "The classifier of Dr. Stone's characters. Using the fastai library and Binder.",
    author: 'Yurij Mikhalevich',
    authorUrl: 'https://github.com/yurijmikhalevich',
    repoUrl: 'https://github.com/move-fast-and-break-things/dr-stone-character-classifier-demo',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&h=400&fit=crop',
  },
  {
    name: 'Music Recommender',
    description: 'Music recommendation model.',
    author: 'Katya Smetanina',
    authorUrl: 'https://github.com/KatyaLetuchaya',
    repoUrl: 'https://github.com/move-fast-and-break-things/MusicRecommender',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
    loadMore: true,
  },
  {
    name: 'Car Classifier',
    description: 'The model is able to classify cars from the anime Initial D. By sending a photo of the telegram, the bot determines the brand of the car.',
    author: 'Astemir Unarokov',
    authorUrl: 'https://github.com/ast3310',
    repoUrl: 'https://github.com/move-fast-and-break-things/JDM-initial-d-classification',
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
    loadMore: true,
  },
  {
    name: 'Japanese Reader',
    description: 'Lightning App that recognizes handwritten Katakana. Katakana is a Japanese syllabic alphabet.',
    author: 'Danil Ostaptsov',
    authorUrl: 'https://github.com/OstaptsovDanil',
    repoUrl: 'https://github.com/move-fast-and-break-things/japanese-reader',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=400&fit=crop',
    loadMore: true,
  },
  {
    name: 'Audio Compression',
    description: 'An algorithm for audio compression.',
    author: 'Artem Belyi',
    authorUrl: 'https://github.com/Roha990',
    repoUrl: 'https://github.com/move-fast-and-break-things/audio-compression',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop',
    loadMore: true,
  },
  {
    name: 'Food Recogniser',
    description: 'The model determines whether the food is in the picture.',
    author: 'Fedor Simonov',
    authorUrl: 'https://github.com/lolyafedor',
    repoUrl: 'https://github.com/move-fast-and-break-things/food-recogniser',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
    loadMore: true,
  },
  {
    name: 'The Masterpiece creator',
    description: 'Masterpiece creator uses the discoart library to create Disco Diffusion artworks.',
    author: 'Irina Kogay',
    authorUrl: 'https://github.com/KogaiIrina',
    repoUrl: 'https://github.com/move-fast-and-break-things/masterpiece-creator',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=400&fit=crop',
    loadMore: true,
  },
  {
    name: 'Tic-Tac-Toe app',
    description: 'The application is tic-tac-toe on react native.',
    author: 'Community',
    authorUrl: 'https://github.com/move-fast-and-break-things',
    repoUrl: 'https://github.com/move-fast-and-break-things/rn-tic-tac-toe-demo',
    imageUrl: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&h=400&fit=crop',
    loadMore: true,
  },
  {
    name: 'Parrots',
    description: 'The ML model distinguishes by the photo of wavy, royal and haro parrots.',
    author: 'Emma Maltseva',
    authorUrl: 'https://github.com/EmmaMaltseva',
    repoUrl: 'https://github.com/move-fast-and-break-things/Parrots',
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&h=400&fit=crop',
    loadMore: true,
  },
  {
    name: 'Spacemen',
    description: 'The ML-model is able to classify astronauts, space marines and stormtroopers.',
    author: 'Danil Ostaptsov',
    authorUrl: 'https://github.com/OstaptsovDanil',
    repoUrl: 'https://github.com/move-fast-and-break-things/spacemen',
    imageUrl: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&h=400&fit=crop',
    loadMore: true,
  },
  {
    name: 'Spider Recognizer',
    description: 'ML model classifying spiders.',
    author: 'Irina Kogay',
    authorUrl: 'https://github.com/KogaiIrina',
    repoUrl: 'https://github.com/move-fast-and-break-things/spider-recognizer',
    imageUrl: 'https://images.unsplash.com/photo-1577406272554-fdf8e8f70a11?w=600&h=400&fit=crop',
    loadMore: true,
  },
  {
    name: 'MFBT',
    description: 'The Move Fast and Break Things community website. Contains information about projects and their creators.',
    author: 'Emma Maltseva',
    authorUrl: 'https://github.com/EmmaMaltseva',
    repoUrl: 'https://github.com/move-fast-and-break-things/movefastandbreakthings.club',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    loadMore: true,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.filter((p) => !p.loadMore);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase">Projects</h2>

        <div className="space-y-8">
          {displayedProjects.map((project, index) => (
            <div key={index}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold glow-hover">{project.name}</h3>
                  </a>
                  <p className="text-muted-foreground">{project.description}</p>
                  <p>
                    <a
                      href={project.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shine-animation"
                    >
                      {project.author}
                    </a>
                  </p>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    See repository <ArrowRight size={16} />
                  </a>
                </div>
                <div>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="image-glow-hover w-full aspect-video object-cover"
                    />
                  </a>
                </div>
              </div>
              {index < displayedProjects.length - 1 && (
                <hr className="my-8 border-border" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/20"
          >
            {showAll ? 'Hide' : 'Load More'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
