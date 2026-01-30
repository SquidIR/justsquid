import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

const Subscribers = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Calculate timer to September 16, 2026
    const startDate = new Date(2026, 0, 30); // January 30, 2026
    const endDate = new Date(2026, 8, 16); // September 16, 2026
    const today = new Date();

    const totalTime = endDate.getTime() - startDate.getTime();
    const elapsedTime = today.getTime() - startDate.getTime();
    const currentProgress = Math.min(Math.max((elapsedTime / totalTime) * 100, 0), 100);

    setProgress(currentProgress);
  }, []);

  return (
    <div className="relative pt-20 min-h-screen flex items-center justify-center px-6">
      <style>{`
        @keyframes slideInScale {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.3), inset 0 0 20px rgba(255, 0, 0, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 0, 0, 0.6), inset 0 0 40px rgba(255, 0, 0, 0.2);
          }
        }

        @keyframes float-icon {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .wip-container {
          animation: slideInScale 0.6s ease-out;
        }

        .wip-icon {
          animation: float-icon 3s ease-in-out infinite;
        }

        .wip-badge {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-2xl w-full wip-container">
        {/* Main WIP Card */}
        <div className="card-geometric p-12 text-center wip-badge border-2 border-primary/50">
          {/* Animated Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center wip-icon">
              <Zap className="w-12 h-12 text-primary animate-spin" style={{ animationDuration: '2s' }} />
            </div>
          </div>

          {/* Content */}
          <h1 className="font-heading text-5xl font-bold mb-4">
            <span className="text-primary">Work In Progress</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            This page is being powered up with Firebase! 🚀
          </p>

          {/* Status Box */}
          <div className="bg-secondary/50 border border-primary/30 rounded-lg p-6 mb-8">
            <p className="text-muted-foreground mb-4">
              Coming soon with these amazing features:
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Real-time poll persistence
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Community voting leaderboards
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Live subscriber statistics
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Real-time notifications
              </li>
            </ul>
          </div>

          {/* Loading Bar */}
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
