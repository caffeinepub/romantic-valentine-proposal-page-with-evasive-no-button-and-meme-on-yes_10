import ValentineProposal from './components/valentine/ValentineProposal';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <ValentineProposal />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>
          Built with <span className="text-primary">♥</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            caffeine.ai
          </a>
        </p>
        <p className="mt-1">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
