import ValentineProposal from './components/valentine/ValentineProposal';
import { useState, useEffect } from 'react';

function App() {
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.origin);
    }
  }, []);

  const copyToClipboard = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <ValentineProposal />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground space-y-3">
        <div className="space-y-1">
          <p className="font-medium text-foreground">myvalentinepiku</p>
          {shareUrl && (
            <button
              onClick={copyToClipboard}
              className="text-xs text-primary hover:underline cursor-pointer"
            >
              {shareUrl} (click to copy)
            </button>
          )}
        </div>
        <p>
          Built with <span className="text-primary">♥</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'myvalentinepiku'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            caffeine.ai
          </a>
        </p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
