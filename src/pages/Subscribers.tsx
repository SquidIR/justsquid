import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Subscribers = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Polls state
  const [polls, setPolls] = useState([
    {
      id: 1,
      question: 'What type of music should I create more of?',
      options: [
        { id: 1, text: 'Electronic/EDM', votes: 0 },
        { id: 2, text: 'Chiptune/8-bit', votes: 0 },
        { id: 3, text: 'Lo-fi Hip Hop', votes: 0 },
        { id: 4, text: 'Orchestral', votes: 0 },
      ],
      userVote: null,
    },
    {
      id: 2,
      question: 'Which Geometry Dash level should I feature next?',
      options: [
        { id: 1, text: 'Bloodbath', votes: 0 },
        { id: 2, text: 'Tartarus', votes: 0 },
        { id: 3, text: 'Sonic Wave', votes: 0 },
        { id: 4, text: 'Cataclysm', votes: 0 },
      ],
      userVote: null,
    },
    {
      id: 3,
      question: 'How often should I upload new videos?',
      options: [
        { id: 1, text: 'Every day', votes: 0 },
        { id: 2, text: '3-4 times per week', votes: 0 },
        { id: 3, text: 'Once a week', votes: 0 },
        { id: 4, text: 'Whenever I feel like it', votes: 0 },
      ],
      userVote: null,
    },
  ]);
  const [firebaseConnected, setFirebaseConnected] = useState(false);

  // Load polls on mount
  useEffect(() => {
    // Just use local state for now
    setFirebaseConnected(false);
  }, []);

  const handleVote = (pollId: number, optionId: number) => {
    const updatedPolls = polls.map((poll) => {
      if (poll.id === pollId) {
        // Remove previous vote if exists
        const updatedOptions = poll.options.map((option) => {
          if (poll.userVote === option.id) {
            return { ...option, votes: option.votes - 1 };
          }
          return option;
        });

        // Add new vote
        const newOptions = updatedOptions.map((option) => {
          if (option.id === optionId) {
            return { ...option, votes: option.votes + 1 };
          }
          return option;
        });

        return { ...poll, options: newOptions, userVote: optionId };
      }
      return poll;
    });

    setPolls(updatedPolls);
  };

  const getTotalVotes = (options: any[]) => {
    return options.reduce((sum, option) => sum + option.votes, 0);
  };

  // Change this to your desired password
  const CORRECT_PASSWORD = '1353447';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      setError('');
      // Store in sessionStorage so they stay unlocked while browsing
      sessionStorage.setItem('subscribersUnlocked', 'true');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isUnlocked) {
    return (
      <div className="relative pt-20 min-h-screen">
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
                Welcome, <span className="text-primary">Subscriber!</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Thanks for supporting the channel! 🎉
              </p>
            </div>

            <div className="space-y-8">
              <div className="card-geometric hover:glow-red transition-all duration-300 p-8">
                <h2 className="font-heading text-2xl font-bold mb-4 text-primary">
                  Exclusive Content
                </h2>
                <p className="text-muted-foreground text-lg">
                  This is a special area for my amazing subscribers! Here you'll find exclusive behind-the-scenes content, 
                  early access to new music, special announcements, and more.
                </p>
              </div>

              <div className="card-geometric hover:glow-red transition-all duration-300 p-8">
                <h2 className="font-heading text-2xl font-bold mb-6 text-primary">
                  📊 Community Polls
                </h2>
                <div className="space-y-8">
                  {polls.map((poll) => (
                    <div
                      key={poll.id}
                      className="border border-border rounded-lg p-6 bg-secondary/30"
                    >
                      <h3 className="font-heading text-lg font-bold mb-4">
                        {poll.question}
                      </h3>
                      <div className="space-y-3">
                        {poll.options.map((option) => {
                          const totalVotes = getTotalVotes(poll.options);
                          const percentage =
                            totalVotes > 0
                              ? Math.round((option.votes / totalVotes) * 100)
                              : 0;
                          const isSelected = poll.userVote === option.id;

                          return (
                            <button
                              key={option.id}
                              onClick={() => handleVote(poll.id, option.id)}
                              className={`w-full text-left transition-all duration-300 rounded-lg overflow-hidden ${
                                isSelected
                                  ? 'ring-2 ring-primary'
                                  : 'hover:ring-2 hover:ring-primary/50'
                              }`}
                            >
                              <div className="p-3 bg-secondary/50 relative">
                                <div
                                  className="absolute inset-0 bg-primary/20 transition-all duration-300"
                                  style={{ width: `${percentage}%` }}
                                />
                                <div className="relative flex justify-between items-center">
                                  <span className="font-medium">{option.text}</span>
                                  <span className="text-sm text-muted-foreground">
                                    {percentage}% ({option.votes})
                                  </span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        Total votes: {getTotalVotes(poll.options)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    sessionStorage.removeItem('subscribersUnlocked');
                    setIsUnlocked(false);
                    setPassword('');
                  }}
                  className="btn-outline-hero"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative pt-20 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">
            <span className="text-primary">Subscribers</span> Only
          </h1>
          <p className="text-muted-foreground">
            Enter the password from the video to access exclusive content
          </p>
        </div>

        <div className="card-geometric p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full btn-hero py-3 font-heading font-bold uppercase"
            >
              Unlock
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Not a subscriber yet?{' '}
            <a
              href="https://www.youtube.com/@ItsSquid534"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Subscribe to the channel
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
